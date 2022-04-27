import { Router } from "express";
import { loginRequired } from "../middlewares/loginRequired";
import { isValidData, invalidCallback } from "../middlewares/validationMiddleware";
import { userAuthService } from "../services/userService";
import config from "../config";
import axios from "axios";

const userAuthRouter = Router();

// POST /user/register : user 추가
userAuthRouter
  .post("/user/register", 
  isValidData("register"), 
  invalidCallback, 
  async (req, res, next) => {
    try {
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
      next();
    } catch (error) {
      next(error);
    }
});

// POST /user/kakao/register : 카카오 계정 등록(즉, kakaoId 추가)
userAuthRouter.post("/oauth/kakao/register", loginRequired, async (req, res, next) => {
  const code = req.query.code;

  try {
    // 토큰 발급
    let result = await axios.post(
      config.kakao.oauthUrl,
      {},
      {
        headers: {
          "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
        },
        params: {
          grant_type: "authorization_code",
          client_id: config.kakao.clientId,
          redirect_uri: config.kakao.redirectUrl2,
          code: code,
        },
      }
    );

    const accessToken = result.data.access_token;
    
    // 토큰으로 유저(나) 정보 얻기
    result = await axios.post(
      config.kakao.userUrl,
      {},
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
        },
      }
    );

    const kakaoId = result.data.id;

    const user = await userAuthService.getUserByKakaoId({ kakaoId });

    if (user) {
      await axios.post(
        config.kakao.unlinkUrl,
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      throw new Error("다른 이메일로 이미 카카오 계정을 등록하셨습니다. (하나의 이메일 - 하나의 카카오 계정 규칙)");
    }

    const userId = req.currentUserId;
    const toUpdate = { kakaoId };
    
    const updatedUser = await userAuthService.setUser({ userId, toUpdate });

    res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
});


// POST /user/login : 일반 로그인
userAuthRouter
  .post("/user/login",
  isValidData("login"), 
  invalidCallback, 
  async (req, res, next) => {
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

// GET /oauth/kakao : 카카오로 로그인
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
  
    // 토큰으로 유저(나) 정보 얻기
    result = await axios.post(config.kakao.userUrl, {},
            { 
              headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
              }
            })
    

    const kakaoId = result.data.id;

    const user = await userAuthService.getUserByKakaoId({ kakaoId });

    if (!user) {
      await axios.post(
        config.kakao.unlinkUrl,
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      throw new Error(
        "최초로 저희 서비스에 로그인한 후에, 카카오 계정을 등록하세요."
      );
    }

    const userWithToken = await userAuthService.getKakaoUser({ kakaoId });

    res.status(200).json(userWithToken);
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
    const userId = req.currentUserId;
    const currentUserInfo = await userAuthService.getUserInfo({
        userId,
      });

    if (currentUserInfo?.errorMessage) {
      throw new Error(currentUserInfo.errorMessage);
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
  "/user/current/kakao",
  loginRequired,
  async (req, res, next) => {
    try {
      const userId = req.currentUserId;

      const kakaoId = await axios.post(
        config.kakao.unlinkUrl,
        {},
        {
          headers: {
            Authorization: `Bearer ${kakaoToken}`,
          },
        }
      );
      const deletedKakaoId = await userAuthService.deleteKakaoId({ userId });

      if (deletedKakaoId.errorMessage) {
        throw new Error(deleted.errorMessage);
      }


      
      res.status(200).send("success");
    } catch (error) {
      next(error);
    }
  }
);


// POST /user/kakao/delete : 카카오 계정 삭제(즉, kakaoId 삭제 및 앱과 unlink)
userAuthRouter.delete("/oauth/kakao/delete", loginRequired, async (req, res, next) => {
  const code = req.query.code;

  try {
    // 토큰 발급
    let result = await axios.post(
      config.kakao.oauthUrl,
      {},
      {
        headers: {
          "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
        },
        params: {
          grant_type: "authorization_code",
          client_id: config.kakao.clientId,
          redirect_uri: config.kakao.redirectUrl3,
          code: code,
        },
      }
    );

    const accessToken = result.data.access_token;

    // 토큰으로 유저(나) 정보 얻기
    result = await axios.post(
      config.kakao.userUrl,
      {},
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
        },
      }
    );

    const kakaoId = result.data.id;
    
    const user = await userAuthService.getUserByKakaoId({ kakaoId });

    if (!user) {
      throw new Error("등록되지 않은 카카오 계정을 삭제할 수 없습니다.");
    }

    result = await axios.post(
      config.kakao.unlinkUrl,
      {},
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    //result.data 는 { id: 2210894451 } 형태
    const deletedKakaoId = result.data;

    
    if (deletedKakaoId.id !== user._doc["kakaoId"]) {
      console.log("Kakao deleted Error");
      res.status(500).send({ message: "Kakao deleted Error" });
      return;
    }

    const userId = req.currentUserId;
    const toUpdate = { kakaoId: -1 };

    const updatedUser = await userAuthService.setUser({ userId, toUpdate });

    
    res.status(200).json({ message: "success" });
  } catch (error) {
    next(error);
  }
});
export { userAuthRouter };