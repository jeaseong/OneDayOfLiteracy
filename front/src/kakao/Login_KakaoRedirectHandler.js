// 리다이렉트될 화면

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { SERVER_URL } from "./OAuth";

const Login_KakaoRedirectHandler = () => {
  const navigate = useNavigate();
  console.log("login");
  useEffect(() => {
    let params = new URL(document.location.toString()).searchParams;
    let code = params.get("code"); // 인가코드 받는 부분

    console.log(code);

    axios
      .get(`${SERVER_URL}/oauth/kakao?code=${code}`)
      .then((res) => {
        // res에 포함된 토큰 받아서 원하는 로직을 하면된다.
        console.log(res);
        const accessToken = res.data["token"];
        const userId = res.data["_id"];
        console.log(accessToken);
        console.log(userId);

        // sessionStorage에 "accessToken"이라는 키로 토큰을 저장함.
        sessionStorage.setItem("token", accessToken);

        // sessionStorage에 "_id"라는 키로 userId 저장
        sessionStorage.setItem("_id", userId);

        // 토큰 받았으니 메인 화면으로 전환
        navigate("/");
      })
      .catch((err) => {
        console.log("카카오로그인 에러", err);

        //로그인 실패 시 alert
        alert("로그인에 실패했습니다.");

        // 로그인 실패하면 로그인 화면으로 전환(현재는 그냥 대충 만든거라 '/' 경로가 login페이지)
        navigate("/");
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      사실 이페이지는 크게 의미 없다. 첫화면으로 로직이 끝나면 이동시켜주면
      된다.
    </div>
  );
};

export default Login_KakaoRedirectHandler;
