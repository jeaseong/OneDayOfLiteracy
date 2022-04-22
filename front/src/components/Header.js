import React, { useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
// import { UserStateContext, DispatchContext } from "../App";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

function Header() {
  const [value, setValue] = React.useState("one");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const navigate = useNavigate();
  const location = useLocation();
  const [show, setShow] = useState(false);

  const isLogin = false;

  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <img
          onClick={() => navigate("/")}
          src={`${process.env.PUBLIC_URL}/moonhaeday.png`}
          alt="logo"
          width="100"
        ></img>

        {isLogin ? (
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="primary"
            indicatorColor="primary"
            aria-label="primary tabs example"
          >
            <LinkTab href="/" label="서비스 소개" />
            <LinkTab href="/logout" label="로그아웃" />
          </Tabs>
        ) : (
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="primary"
            indicatorColor="primary"
            aria-label="primary tabs example"
          >
            <LinkTab href="/" label="서비스 소개" />
            <LinkTab href="/login" label="로그인" />
            <LinkTab href="/register" label="회원가입" />
          </Tabs>
        )}
      </Box>
    </>
  );
}

export default Header;
