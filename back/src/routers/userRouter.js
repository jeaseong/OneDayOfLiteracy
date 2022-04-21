import is from "@sindresorhus/is";
import { Router } from "express";
// import { login_required } from "../middlewares/login_required";
import { userAuthService } from "../services/userService";

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

// GET /users : 전체 user 조회
userAuthRouter.get("/users", async (req, res, next) => {
    try {
      const users = await userAuthService.getUsers();
      res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  }
);

// GET /user/current : 현재 로그인 user 조회
userAuthRouter.get("/user/current", 
  //login_required,
  async (req, res, next) => {
    try {
      const userId = req.currentUserId;
      const currentUserInfo = await userAuthService.getUserInfo({
        userId,
      });

      if (currentUserInfo.errorMessage) {
        throw new Error(currentUserInfo.errorMessage);
      }

      res.status(200).json(currentUserInfo);
    } catch (error) {
      next(error);
    }
  }
);

// PUT /user/:userId : user 정보 수정
userAuthRouter.put(
  "/user/:userId",
  //login_required,
  async (req, res, next) => {
    try {
      const { userId } = req.params;
      const { nickname } = req.body;

      const toUpdate = {
        nickname,
      };

      const updatedUser = await userAuthService.setUser({ userId, toUpdate });

      if (updatedUser.errorMessage) {
        throw new Error(updatedUser.errorMessage);
      }

      res.status(200).json(updatedUser);
    } catch (error) {
      next(error);
    }
  }
);

// GET /users/:userId : user 조회
userAuthRouter.get(
  "/users/:userId",
  //login_required,
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
  //login_required,
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

export { userAuthRouter };
