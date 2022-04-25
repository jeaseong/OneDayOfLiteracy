import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
// import Box from "@mui/material/Box";
import { useQueryClient } from "react-query";
import { useCurrentUser } from "../queries/userQuery";
import { CustomSnackbar, setAlertData } from "./CustomSnackbar";
import { successMessage, alertType } from "../utils/alertMessage";
import { HeaderContainer, LogoContainer, Navigation } from "./componentStyle";

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
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { isLogin } = useCurrentUser();
  const [value, setValue] = useState("one");
  const [showAlert, setShowAlert] = useState(false);

  const logoutSuccessData = setAlertData(
    showAlert,
    setShowAlert,
    successMessage.logout,
    alertType.success
  );

  const LoginRegisterTab =
    window.location.pathname === "/user/login" ? (
      <LinkTab
        value={false}
        onClick={() => navigate("/user/register")}
        label="회원가입"
      />
    ) : (
      <LinkTab
        value={false}
        onClick={() => navigate("/user/login")}
        label="로그인"
      />
    );

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleUserLogout = () => {
    sessionStorage.removeItem("userToken");
    queryClient.removeQueries("userState");
    setShowAlert(true);
  };

  return (
    <HeaderContainer>
      <LogoContainer>
        <img
          onClick={() => navigate("/")}
          src={`${process.env.PUBLIC_URL}/logo_header.png`}
          alt="logo"
        ></img>
      </LogoContainer>
      <Navigation
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
          <LinkTab value={false} onClick={handleUserLogout} label="로그아웃" />
        ) : (
          LoginRegisterTab
        )}
      </Navigation>
      <CustomSnackbar {...logoutSuccessData} />
    </HeaderContainer>
  );
}

export default Header;
