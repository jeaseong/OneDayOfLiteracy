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

  const { isCheckEmail, isCheckNickName, isPassRule, isSamePassword } =
    validation("register", registerInfo);
  const isActive =
    isCheckEmail && isPassRule && isSamePassword && isCheckNickName;

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
      {isCheckEmail && <p>이메일 형식에 맞지 않습니다.</p>}
      <AuthInput
        type="password"
        placeholder="Password*"
        name="password"
        onChange={handleOnChange}
        required
      />
      {isPassRule && <p>비밀번호는 영문 + 숫자 + 8자리 이상입니다.</p>}
      <AuthInput
        type="password"
        placeholder="Confirm Password*"
        name="confirmPassword"
        onChange={handleOnChange}
        required
      />
      {isSamePassword && <p>비밀번호가 일치하지 않습니다.</p>}
      <AuthInput
        type="text"
        placeholder="Nickname*"
        name="nickname"
        onChange={handleOnChange}
        required
      />
      {isCheckNickName && <p>닉네임은 2글자 이상이어야 합니다.</p>}
      <SubmitButton type="submit" onClick={handleOnSubmit} disabled={isActive}>
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
