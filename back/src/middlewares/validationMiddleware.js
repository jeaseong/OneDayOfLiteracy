import { body, validationResult } from "express-validator";

const isValidData = (type) => {
  switch (type) {
    case "register":
      return [
        body("email", "이메일 정보가 올바르지 않습니다.").exists().isEmail(),
        body("password", "비밀번호 정보가 올바르지 않습니다.").exists().isString()
        .isLength({ min: 3 }),
        body("nickname", "닉네임 정보가 올바르지 않습니다.")
          .exists().isString(),
      ];
    case "login":
      return [
        body("email", "이메일 정보가 올바르지 않습니다.").exists().isEmail(),
        body("password", "비밀번호 정보가 올바르지 않습니다.").exists().isString()
        .isLength({ min: 3 }),
      ];
    
    case "setting":
      return [
        body("password", "비밀번호 정보가 올바르지 않습니다.").isString().isLength({ min: 3 }),
        body("nickname", "닉네임 정보가 올바르지 않습니다.").isString(),
      ];
  }
};

const invalidCallback = (req, res, next) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    const errors = result.errors.reduce((acc, cur) => { 
      if (!(cur.param in acc)) acc[cur.param] = cur.msg;
      return acc;
    }, {});
    return res.status(400).json({ errors });
  }

  next();
};

export { isValidData, invalidCallback };
