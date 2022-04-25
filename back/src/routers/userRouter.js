import is from "@sindresorhus/is";
import { Router } from "express";
import { loginRequired } from "../middlewares/loginRequired";
import { userAuthService } from "../services/userService";
import config from "../config";
import axios from "axios";

const userAuthRouter = Router();

// POST /user/register : user 추가
userAuthRouter.post("/user/register", async (req, res, next) => {
  try {
    if (is.emptyObject(req.body)) {
      throw new Error("잘못된 요청입니다.");
    }

    // req (request) 에서 데이터 가져오기
    const email = req.body.email;
    const password = req.body.password;
    const nickname = req.body.nickname;

    // 위 데이터를 유저 db에 추가하기
    const newUser = await userAuthService.addUser({
      email,
      password,
      nickname,
    });

    if (newUser.errorMessage) {
      throw new Error(newUser.errorMessage);
    }

    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
});

// POST /user/login : user 로그인
userAuthRouter.post("/user/login", async (req, res, next) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    const user = await userAuthService.getUser({ email, password });

    if (user.errorMessage) {
      throw new Error(user.errorMessage);
    }

    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
});

// GET /oauth/kakao : kakaoUser 로그인
userAuthRouter.get("/oauth/kakao", async (req, res, next) => {
  const code = req.query.code;

  try {
    // 토큰 발급
    let result = await axios.post(config.kakao.oauthUrl, {},
              {
                headers: {
                  "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
                },
                params: {
                  grant_type: "authorization_code",
                  client_id: config.kakao.clientId,
                  redirect_uri: config.kakao.redirectUrl,
                  code: code,
                }
              })
      
    const accessToken = result.data.access_token;
    console.log(accessToken);
    // 토큰으로 유저(나) 정보 얻기
    result = await axios.post(config.kakao.userUrl, {},
            { 
              headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
              }
            })
  
    const kakaoAccount = result.data.kakao_account;
    console.log(kakaoAccount)
    const nickname = kakaoAccount.profile.nickname;
    const email = kakaoAccount.email ?? null;

    if(email === null){ 
      // 유저가 카카오 로그인 시, "이메일 제공 허용"을 꼭 해주어야 이메일 정보를 우리 서버가 받을 수 있다!
      
      
      const plzCheckEmail = { errorMessage: "kakao email 제공 동의사항을 선택해주세요!"}
      res.status(400).send(plzCheckEmail);
    }

    const user = await userAuthService.getKakaoUser({ email, accessToken });

    if (user.errorNotFound) {
      const newUser = await userAuthService.addKakaoUser({
        nickname,
        email,
        accessToken,
      });

      res.status(201).json(newUser);
    }
    
    console.log(user);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
});

// GET /users : 전체 user 조회
userAuthRouter.get("/users", async (req, res, next) => {
  try {
    const users = await userAuthService.getUsers();
    const kakaoUsers = await userAuthService.getKakaoUsers();

    const totalUsers = {
      general: users,
      kakao: kakaoUsers,
    };

    res.status(200).json(totalUsers);
  } catch (error) {
    next(error);
  }
});

// GET /user/current : 현재 로그인 user 조회
userAuthRouter.get("/user/current", loginRequired, async (req, res, next) => {
  try {
    const userType = req.currentUserType;
    const userId = req.currentUserId;
    

    let currentUserInfo = null;
    if (userType === "general") {
      // 일반 로그인 유저
      currentUserInfo = await userAuthService.getUserInfo({
        userId,
      });
    } else if (userType === "kakao") {
      // 카카오 로그인 유저
      currentUserInfo = await userAuthService.getKakaoUserInfo({
        userId,
      });
    }

    if (currentUserInfo?.errorMessage) {
      throw new Error(currentUserInfo.errorMessage);
    } else if (currentUserInfo === null) {
      throw new Error("userType이 잘못되었습니다.");
    }

    res.status(200).json(currentUserInfo);
  } catch (error) {
    next(error);
  }
});

// PUT /user/:userId : user 정보 수정
userAuthRouter.put("/user/:userId", loginRequired, async (req, res, next) => {
  try {
    const userType = req.currentUserType;
    const currentUserId = req.currentUserId;
    const { userId } = req.params;
    const { nickname, password } = req.body;
    
    if(userId !== currentUserId) {
      throw new Error('path parameter로 보낸 userId와 로그인한 userId가 달라서 수정을 제한합니다.');
    }

    let updatedUser = null;
    if (userType === "general") {
      const toUpdate = {
        nickname,
        password,
      };
      updatedUser = await userAuthService.setUser({ userId, toUpdate });
    } else if (userType === "kakao") {
      const toUpdate = {
        nickname,
      };
      updatedUser = await userAuthService.setKakaoUser({ userId, toUpdate });
    }

    if (updatedUser?.errorMessage) {
      throw new Error(updatedUser.errorMessage);
    } else if (updatedUser === null) {
      //그럴 일은 없지만, 혹시 currentUserType이 잘못 저장되어 찾기 불가능한 상태
      throw new Error("userType이 잘못되었습니다.");
    }

    res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
});

// GET /users/:userId : 일반 user 조회
userAuthRouter.get(
  "/users/:userId",
  //loginRequired,
  async (req, res, next) => {
    try {
      const { userId } = req.params;
      const user = await userAuthService.getUserInfo({ userId });

      if (user.errorMessage) {
        throw new Error(user.errorMessage);
      }

      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }
);

// GET /users/kakao/:userId : 카카오 user 조회
userAuthRouter.get(
  "/users/kakao/:userId",
  //loginRequired,
  async (req, res, next) => {
    try {
      const { userId } = req.params;
      const user = await userAuthService.getKakaoUserInfo({ userId });

      if (user.errorMessage) {
        throw new Error(user.errorMessage);
      }

      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }
);

// DELETE /user/:userId : user 삭제 (회원 탈퇴)
userAuthRouter.delete(
  "/user/:userId",
  loginRequired,
  async (req, res, next) => {
    try {
      const { userId } = req.params;

      const deletedUser = await userAuthService.deleteUser({ userId });

      if (deletedUser.deletedCount !== 1) {
        throw new Error("정상적으로 삭제되지 않았습니다.");
      }

      res.status(200).send("success");
    } catch (error) {
      next(error);
    }
  }
);

// DELETE /user/kakao/:userId : kakao user 삭제 (단순히 우리 db에서 삭제)
// 추가로, 앱과 kakao 연결 끊기(카카오 로그인 연동 해제=> 동의 항목도 철회됨)
// unlink 설명 : https://developers.kakao.com/docs/latest/ko/kakaologin/common#link-and-unlink
userAuthRouter.delete(
  "/user/kakao/:userId",
  loginRequired,
  async (req, res, next) => {
    try {
      const { userId } = req.params;
      const kakaoToken = req.currentToken;

      const deletedUser = await userAuthService.deleteKakaoUser({ userId });

      if (deletedUser.deletedCount !== 1) {
        throw new Error("정상적으로 삭제되지 않았습니다.");
      }

      const result = await axios.post(config.kakao.unlinkUrl,{},
        {
          headers: {
            Authorization: `Bearer ${kakaoToken}`,
          },
        }
      );
      
      res.status(200).send("success");
    } catch (error) {
      next(error);
    }
  }
);

export { userAuthRouter };