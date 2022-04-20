import React from "react";
import Nav from "./Nav";

function Header() {
  return (
    <>
      <img
        src={`${process.env.PUBLIC_URL}/moonhaeday.png`}
        alt="logo"
        width="150"
      ></img>
      <Nav />
    </>
  );
}

export default Header;
