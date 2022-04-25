import React from "react";
import {
  CustomSnackbar,
  setAlertData,
} from "../../../components/CustomSnackbar";
import { useState } from "react";
import { failMessage, alertType } from "../../../utils/alertMessage";
import { validation } from "../../../utils/validation";
import { useUserLogin } from "../../../queries/userQuery";
import { useNavigate } from "react-router-dom";
import {
  AuthContainer,
  AuthHeading,
  AuthInput,
  CharacterImage,
  DescriptionButton,
  LogoButton,
  LogoImage,
  SubmitButton,
  LoginForm,
  KakaoIcon,
  LoginImgContentBox,
  LoginContentBox,
  ButtonContent,
} from "../../../styles/AuthStyle";

/**
 * 유저의 로그인을 담당하는 컴포넌트 입니다.
 * @param onSubmit 테스트를 위한 모의함수입니다.
 * @returns {JSX.Element}
 * @constructor
 */
function Login({ onSubmit = () => {} }) {
  const navigate = useNavigate();
  const kakaoAuthUrl = process.env.REACT_APP_KAKAO_AUTH_URL;
  const initialInfo = {
    email: "",
    password: "",
  };
  const [loginInfo, setLoginInfo] = useState(initialInfo);
  const [showAlert, setShowAlert] = useState(false);
  const loginFailData = setAlertData(
    showAlert,
    setShowAlert,
    failMessage.login,
    alertType.error
  );

  const isActive = validation("login", loginInfo);
  const mutation = useUserLogin(setShowAlert);

  const handleOnChange = (e) => {
    setLoginInfo((cur) => ({ ...cur, [e.target.name]: e.target.value }));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    onSubmit();
    mutation.mutate(loginInfo);
  };

  return (
    <AuthContainer>
      <LogoButton onClick={() => navigate("/")}>
        <LogoImage />
      </LogoButton>
      <LoginForm>
        <LoginContentBox>
          <AuthHeading>로그인</AuthHeading>
          <AuthInput
            type="email"
            placeholder="Email*"
            name="email"
            onChange={handleOnChange}
            required
          />
          <AuthInput
            type="password"
            placeholder="Password*"
            name="password"
            onChange={handleOnChange}
            required
          />
          <div>
            <DescriptionButton onClick={() => navigate("/user/register")}>
              회원 아니야?
            </DescriptionButton>
          </div>
          <SubmitButton
            type="submit"
            onClick={handleOnSubmit}
            disabled={!isActive}
          >
            로그인
          </SubmitButton>
          <SubmitButton onClick={() => (window.location.href = kakaoAuthUrl)}>
            <ButtonContent>
              <KakaoIcon /> &nbsp; 카카오 로그인
            </ButtonContent>
          </SubmitButton>
        </LoginContentBox>
        <LoginImgContentBox>
          <CharacterImage />
        </LoginImgContentBox>
      </LoginForm>
      <CustomSnackbar {...loginFailData} />
    </AuthContainer>
  );
}

export default Login;
