import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "react-query";
import { useCurrentUser } from "../queries/userQuery";
import { CustomSnackbar, setAlertData } from "./CustomSnackbar";
import { successMessage, alertType } from "../utils/alertMessage";
import {
  HeaderContainer,
  LogoContainer,
  Navigation,
  NavList,
} from "./componentStyle";

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
      <NavList onClick={() => navigate("/user/register")}>회원가입</NavList>
    ) : (
      <NavList onClick={() => navigate("/user/login")}>로그인 </NavList>
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
          width="200px"
        ></img>
      </LogoContainer>
      <Navigation onChange={handleChange}>
        <NavList
          onClick={(e) => {
            e.preventDefault();
            navigate("/");
          }}
        >
          서비스 소개
        </NavList>
        <NavList
          onClick={(e) => {
            e.preventDefault();
            navigate("/post");
          }}
        >
          게시글
        </NavList>
        {isLogin ? (
          <NavList onClick={handleUserLogout}>로그아웃</NavList>
        ) : (
          LoginRegisterTab
        )}
      </Navigation>
      <CustomSnackbar {...logoutSuccessData} />
    </HeaderContainer>
  );
}

export default Header;
