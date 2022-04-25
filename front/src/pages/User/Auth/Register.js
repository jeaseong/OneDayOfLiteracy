import React from "react";
import {
  AuthContainer,
  AuthHeading,
  LogoButton,
  LogoImage,
  AuthInput,
  SubmitButton,
  RouteButton,
} from "../../../styles/AuthStyle";
import {
  CustomSnackbar,
  setAlertData,
} from "../../../components/CustomSnackbar";
import { useState } from "react";
import { validation } from "../../../utils/validation";
import { failMessage, alertType } from "../../../utils/alertMessage";
import { post } from "../../../utils/api";
import { useNavigate } from "react-router-dom";

/**
 * 유저의 회원가입을 담당하는 컴포넌트 입니다.
 * @param onSubmit 테스트를 위한 모의함수입니다.
 * @returns {JSX.Element}
 * @constructor
 */
function Register({ onSubmit = () => {} }) {
  const navigate = useNavigate();
  const initialInfo = {
    email: "",
    password: "",
    confirmPassword: "",
    nickname: "",
  };
  const [registerInfo, setRegisterInfo] = useState(initialInfo);
  const [showAlert, setShowAlert] = useState(false);
  const isActive = validation("register", registerInfo);
  const registerFailData = setAlertData(
    showAlert,
    setShowAlert,
    failMessage.register,
    alertType.error
  );

  const handleOnChange = (e) => {
    setRegisterInfo((cur) => ({ ...cur, [e.target.name]: e.target.value }));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    onSubmit();

    const { email, password, nickname } = registerInfo;
    try {
      await post("user/register", { email, password, nickname });
      setRegisterInfo(initialInfo);
      navigate("/user/login");
    } catch (err) {
      setShowAlert(true);
    }
  };

  return (
    <AuthContainer>
      <LogoButton onClick={() => navigate("/")}>
        <LogoImage src="/assets/img/logo_login.png" alt="logo" />
      </LogoButton>
      <AuthHeading>회원가입</AuthHeading>
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
      <AuthInput
        type="password"
        placeholder="Confirm Password*"
        name="confirmPassword"
        onChange={handleOnChange}
        required
      />
      <AuthInput
        type="text"
        placeholder="Nickname*"
        name="nickname"
        onChange={handleOnChange}
        required
      />
      <SubmitButton type="submit" onClick={handleOnSubmit} disabled={!isActive}>
        가입하기
      </SubmitButton>
      <RouteButton onClick={() => navigate("/user/login")}>
        이미 회원이신가요?
      </RouteButton>
      <CustomSnackbar {...registerFailData} />
    </AuthContainer>
  );
}

export default Register;
