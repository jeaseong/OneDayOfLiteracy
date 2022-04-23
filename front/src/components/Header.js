import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useCurrentUser } from "../queries/userQuery";

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
  const [value, setValue] = useState("one");
  const navigate = useNavigate();
  const { isLogin } = useCurrentUser();
  const LoginRegisterTab =
    window.location.pathname === "/user/login" ? (
      <LinkTab
        value="two"
        onClick={() => navigate("/user/register")}
        label="회원가입"
      />
    ) : (
      <LinkTab
        value="two"
        onClick={() => navigate("/user/login")}
        label="로그인"
      />
    );

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
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
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="primary"
        indicatorColor="primary"
        aria-label="primary tabs example"
      >
        <LinkTab
          value="one"
          onClick={() => navigate("/")}
          label="서비스 소개"
        />
        {isLogin ? (
          <LinkTab
            value="two"
            onClick={() => navigate("/logout")}
            label="로그아웃"
          />
        ) : (
          LoginRegisterTab
        )}
      </Tabs>
    </Box>
  );
}

export default Header;
