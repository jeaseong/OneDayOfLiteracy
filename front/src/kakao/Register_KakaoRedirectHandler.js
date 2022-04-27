// 리다이렉트될 화면

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { SERVER_URL } from "./OAuth";

const Register_KakaoRedirectHandler = () => {
  const navigate = useNavigate();
  console.log("register");
  useEffect(() => {
    let params = new URL(document.location.toString()).searchParams;
    let code = params.get("code"); // 인가코드 받는 부분

    console.log(code);

    axios
      .post(`${SERVER_URL}/oauth/kakao/register?code=${code}`, {}, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        // res에 포함된 토큰 받아서 원하는 로직을 하면된다.
        console.log(res);

        //kakaoId 필드에 회원번호가 추가되었는지 확인
        console.log(res.data.kakaoId);

        // 메인 화면으로 전환
        navigate("/");
      })
      .catch((err) => {
        console.log("카카오 계정 등록 에러", err);

        //계정 등록 실패 시 alert
        alert("카카오 계정 등록에 실패했습니다.");

        // 계정 등록 실패하면 로그인 화면으로 전환(현재는 그냥 대충 만든거라 '/' 경로가 login페이지)
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

export default Register_KakaoRedirectHandler;
