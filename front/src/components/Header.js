import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "react-query";
import { useGetCurrentUser } from "../queries/userQuery";
import { CustomSnackbar, setAlertData } from "./CustomSnackbar";
import { SUCCESS_MESSAGE, ALERT_TYPE, LABEL } from "../utils/constants";
import { img } from "../utils/imgImport";
import {
  HeaderContainer,
  LogoContainer,
  Navigation,
  NavList,
<<<<<<< HEAD
} from "../styles/componentStyle";
=======
} from "./componentStyle";
import SearchContent from "./Search/SearchContent";
>>>>>>> a816b2c8f43094726c5078b5e2f17ac1a9f53ab8

function Header() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { userState, isLogin } = useGetCurrentUser();
  const [value, setValue] = useState("one");
  const [showAlert, setShowAlert] = useState(false);

  const userId = isLogin ? userState._id : null;

  const logoutSuccessData = setAlertData(
    showAlert,
    setShowAlert,
    SUCCESS_MESSAGE.LOGOUT,
    ALERT_TYPE.SUCCESS
  );

  const LoginRegisterTab =
    window.location.pathname === "/user/login" ? (
      <NavList onClick={() => navigate("/user/register")}>
        {LABEL.REGISTER}
      </NavList>
    ) : (
      <NavList onClick={() => navigate("/user/login")}>{LABEL.LOGIN}</NavList>
    );

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleUserLogout = () => {
    localStorage.removeItem("userToken");
    queryClient.removeQueries("userState");
    setShowAlert(true);
    navigate("/");
  };

  return (
    <HeaderContainer>
      <LogoContainer>
        <img
          onClick={() => navigate("/")}
          src={img.logoHeader}
          alt="logo"
          width="200px"
        ></img>
      </LogoContainer>
      <SearchContent />
      <Navigation onChange={handleChange}>
        <NavList
          onClick={(e) => {
            e.preventDefault();
            navigate("/");
          }}
          label="서비스 소개"
        >
          {LABEL.SERVICE_INTRODUCE}
        </NavList>
        {isLogin ? (
          <>
            <NavList onClick={() => navigate(`/user/${userId}`)}>
              {LABEL.PROFILE}
            </NavList>
            <NavList onClick={handleUserLogout}>{LABEL.LOGOUT}</NavList>
          </>
        ) : (
          LoginRegisterTab
        )}
      </Navigation>
      <CustomSnackbar {...logoutSuccessData} />
    </HeaderContainer>
  );
}

export default Header;
