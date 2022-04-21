import jwt from "jsonwebtoken";

function loginRequired(req, res, next) {
  //request 헤더로부터 authorization bearer 토큰을 받음.
  const accessToken = req.headers.authorization?.split(" ")[1] ?? null;

  // 이 토큰은 jwt 토큰 문자열이거나, 혹은 "null" 문자열임.
  // 토큰이 "null" 일 경우, login_required 가 필요한 서비스 사용을 제한함.
  if (accessToken === null) {
    console.log("Authorization 토큰 없음");
    res.status(400).send("로그인한 유저만 사용할 수 있는 서비스입니다.");
  }

  try {
    const secretKey = process.env.JWT_SECRET_KEY || "secretKey";

    //전자 서명에 사용한 secretKey로 accessToken 검증
    const jwtDecoded = jwt.verify(accessToken, secretKey);

    //유저 id를 저장하여, 해당 유저임을 req.currentId에 등록
    req.currentId = jwtDecoded.userId;
    next();
  } catch (error) {
    res.status(400).send("비정상적인 토큰입니다.");
    return;
  }
}

export { loginRequired };
