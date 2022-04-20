import React from "react";

function Header() {
  return (
    <>
      <nav>
        <img
          src={`${process.env.PUBLIC_URL}/moonhaeday.png`}
          alt="logo"
          width="150"
        ></img>
        <ul>
          <li>서비스 소개</li>
          <li>로그인</li>
          <li>회원가입</li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
