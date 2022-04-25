import styled from "styled-components";
import { img } from "../utils/imgImport";

// 회원가입 ============================================================
export const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  align-items: center;
  justify-content: center;
  margin: 30px auto;
`;

export const LogoButton = styled.button`
  appearance: none;
  background-color: transparent;
  border: none;
  border-radius: 8px;
  box-shadow: none;
  transition-duration: 0.3s;

  &:active {
    box-shadow: 3px 3px 3px 3px gray;
  }
`;

export const LogoImage = styled.img.attrs({
  src: img.logoLogin,
  alt: "logo",
})`
  width: 355px;
  height: 204px;
`;

export const CharacterImage = styled.img.attrs({
  src: img.woman,
  alt: "charactor",
})`
  width: 100%;
  height: 100%;
`;

export const AuthHeading = styled.h2`
  color: #c48f5a;
`;

export const AuthInput = styled.input`
  border: solid 2px #c99c6e;
  border-radius: 8px;
  width: 50%;
  height: 30px;
  margin: 1.7rem 0 0 0;
  padding: 10px;
  font-size: 1.3rem;
`;

export const SubmitButton = styled.button`
  width: 52.5%;
  height: 30px;
  background-color: #c48f5a;
  margin: 1.7rem 0 0 0;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-size: 1.2rem;
  box-shadow: 3px 3px 3px gray;
  transition-duration: 0.3s;

  &:active {
    box-shadow: none;
  }

  &:disabled {
    cursor: default;
    opacity: 0.5;
    background: var(--button-bg-color, gray);
  }
`;

export const RouteButton = styled.button`
  display: inline-block;
  appearance: none;
  background-color: transparent;
  border: none;
  color: #c48f5a;
  font-size: 1.1rem;
  margin: 1rem 0 0 0;
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }

  &:active {
    font-weight: bold;
  }
`;

// 로그인 ============================================================
export const LoginForm = styled.div`
  display: flex;
  max-width: 1000px;
  align-items: center;
  justify-content: center;
`;

export const KakaoIcon = styled.img.attrs({
  src: img.kakaoIcon,
  alt: "kakaoIcon",
})`
  width: 25px;
  height: 25px;
`;

export const LoginImgContentBox = styled.div`
  width: 40%;
  height: 15%;
`;

export const LoginContentBox = styled.div`
  width: 60%;
  text-align: center;
`;

export const ButtonContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
