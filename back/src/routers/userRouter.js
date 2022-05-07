<<<<<<< HEAD
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
                  grant_type: config.kakao.grantType,
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
      throw new Error('카카오 email 제공을 꼭 체크해주세요!');
    }

    const user = await userAuthService.getKakaoUser({ email });

    if (user.errorNotFound) {
      const newUser = await userAuthService.addKakaoUser({
        nickname,
        email,
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
=======
import { Router } from "express";
import { loginRequired } from "../middlewares/loginRequired";
import { isValidData, invalidCallback } from "../middlewares/validationMiddleware";
import { uploader, deleteImg } from "../middlewares/imageUploadMiddleware";
import { userAuthService } from "../services/userService";
import config from "../config";
import axios from "axios";
import assert from "assert";
import { typeName } from "../utils/validation/typeName";

const userAuthRouter = Router();

// POST /users/register : user 추가
userAuthRouter
  .post("/users/register", 
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

// GET /oauth/kakao : 카카오 로그인으로 회원가입 및 로그인
userAuthRouter
  .get("/oauth/kakao",
  async (req, res, next) => {
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
            redirect_uri: config.kakao.redirectUrl,
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
      
      let user = await userAuthService.getUserByKakaoId({ kakaoId });

      if (!user) {
        user = await userAuthService.addUserByKakaoId({ kakaoId });
      }
      
      user = await userAuthService.getKakaoUser({ kakaoId });
      

      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
});


// POST /users/login : 일반 로그인
userAuthRouter
  .post("/users/login",
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

// GET /users : 전체 user 조회
// /users?sort[field]={String}&sort[type]={String}&page={Number}&limit={Number}
userAuthRouter.get(
  "/users", 
  isValidData("user-sorting"),
  invalidCallback,
  async (req, res, next) => {
  try {
    // pagination 필요
    const { sort, page, limit } = req.query;
    
    const TypeCheck = (variable) => {
      if (typeName(variable) === "Array" || typeName(variable) == "Object") {
        throw new Error(
          `${variable}를 보낼 시, api 문서에 기재된 query string 형식을 준수하세요.`
        );
      }
    };
    TypeCheck(limit);
    TypeCheck(page);

    const users = await userAuthService.getUsers({ sort, page, limit });
    res.status(200).json(users);
>>>>>>> dev-back
  } catch (error) {
    next(error);
  }
});

<<<<<<< HEAD
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
=======
// GET /users/current : 현재 로그인 user 조회
userAuthRouter.get("/users/current", loginRequired, async (req, res, next) => {
  try {
    const userId = req.currentUserId;
    const currentUserInfo = await userAuthService.getUserInfo({
        userId,
      });

    if (currentUserInfo?.errorMessage) {
      throw new Error(currentUserInfo.errorMessage);
>>>>>>> dev-back
    }

    res.status(200).json(currentUserInfo);
  } catch (error) {
    next(error);
  }
});

<<<<<<< HEAD
// PUT /user/:userId : user 정보 수정
userAuthRouter.put("/user/:userId", loginRequired, async (req, res, next) => {
  try {
    const userType = req.currentUserType;
    const currentUserId = req.currentUserId;
    const { userId } = req.params;
    const { nickname, password } = req.body;
=======
// PUT /users/:userId : user 정보 수정
userAuthRouter.put("/users/:userId", loginRequired, async (req, res, next) => {
  try {
    const currentUserId = req.currentUserId;
    const { userId } = req.params;

    const nickname = req.body.nickname ?? null;
    const introduce = req.body.introduce ?? null;
    const password = req.body.password ?? null;
>>>>>>> dev-back
    
    if(userId !== currentUserId) {
      throw new Error('path parameter로 보낸 userId와 로그인한 userId가 달라서 수정을 제한합니다.');
    }

<<<<<<< HEAD
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
=======
    const toUpdate = {
      nickname,
      introduce,
      password
    }

    const updatedUser = await userAuthService.setUser({ userId, toUpdate });

    if (updatedUser?.errorMessage) {
      throw new Error(updatedUser.errorMessage);
>>>>>>> dev-back
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

<<<<<<< HEAD
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
=======
// POST /users/:userId/uploadImage : 프로필 이미지 등록 / 수정
userAuthRouter
  .post('/users/:userId/uploadImage',
    loginRequired,
    uploader('user'), 
    deleteImg,
    async (req, res, next) => {
    try {
      const { userId } = req.params;
      if (req.currentUserId !== userId) throw new Error("Invalid request");
      const dirName = req.files[0].bucket.split("/")[1];
      const imageName = req.files[0].key;
      const toUpdate = {
        profileUrl: `https://team2.cdn.ntruss.com/${dirName}/${imageName}`
      };
      const setUser = await userAuthService.setUser({ userId, toUpdate })
      res.status(201).json({ message: "success" });
    } catch (err) {
      next(err);
>>>>>>> dev-back
    }
  }
);

<<<<<<< HEAD
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
userAuthRouter.delete(
  "/user/kakao/:userId",
  //loginRequired,
  async (req, res, next) => {
    try {
      const { userId } = req.params;

      const deletedUser = await userAuthService.deleteKakaoUser({ userId });
=======
//삭제 PATCH /users/:userId/removeImage
// body = { key: 파일명(1234.png) }
userAuthRouter.patch("/users/:userId/removeImage", 
  loginRequired, 
  deleteImg, 
  async (req, res, next) => {
    try {
      const { userId } = req.params;
      assert(req.currentUserId === userId, "유저 ID가 올바르지 않습니다.");

      const toUpdate = {
        profileUrl: "https://team2.cdn.ntruss.com/users/default.png"
      };
      const setUser = await userAuthService.setUser({ userId, toUpdate })
      res.status(200).json({ message: "success"});
    } catch (err) {
      next(err);
    }
})

// DELETE /users/:userId : user 삭제 (회원 탈퇴)
userAuthRouter.delete(
  "/users/:userId",
  loginRequired,
  async (req, res, next) => {
    try {
      const { userId } = req.params;
      assert(req.currentUserId === userId, "유저 정보가 일치하지 않습니다.");
      
      const user = await userAuthService.getUserInfo({ userId });
      
      if (user.kakaoId !== 0) {
        const params = new URLSearchParams();
        params.append('target_id_type', 'user_id');
        params.append('target_id', `${user.kakaoId}`)
        const res = await axios.post(
            config.kakao.unlinkUrl,
            params,
            {
              headers: {
                "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
                Authorization: `KakaoAK ${config.kakao.adminKey}`,
              },
            }
          );
        const kakaoId = res.data.id;
        assert(kakaoId === user.kakaoId, "카카오 계정 연결 해제 오류");
      }
      
      res.status(200).send("success");

      const deletedUser = await userAuthService.deleteUser({ userId });
>>>>>>> dev-back

      if (deletedUser.deletedCount !== 1) {
        throw new Error("정상적으로 삭제되지 않았습니다.");
      }
<<<<<<< HEAD

      res.status(200).send("success");
=======
      
>>>>>>> dev-back
    } catch (error) {
      next(error);
    }
  }
);

<<<<<<< HEAD
export { userAuthRouter };
=======
export { userAuthRouter };
>>>>>>> dev-back
