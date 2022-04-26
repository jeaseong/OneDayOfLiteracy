import styled from "styled-components";
import { img } from "../utils/imgImport";

export const FooterContainer = styled.footer`
  width: 100%;
  height: 100px;
  background-image: url(${img.footerImg});
  background-position: center;
  background-size: 100% 100px;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const FooterBackground = styled.img`
  width: 100%;
  height: auto;
  position: absolute;
  bottom: 10px;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: url(${img.leafLeftHeader}), url(${img.leafRightHeader});
  background-repeat: no-repeat;
  background-position: left, right;
  background-size: auto 80px, auto 100px;
`;

export const LogoContainer = styled.div`
  position: absolute;
  left: 8%;
`;

export const Navigation = styled.div`
  position: absolute;
  right: 4%;
  font-family: Maplestory Light;
`;

export const NavList = styled.button`
  margin-right: 20px;
  font-size: 17px;
  border: none;
  padding-bottom: 5px;
  &:hover {
    cursor: pointer;
    color: #c48f5a;
    transition: 0.1s linear;
    box-sizing: border-box;
  }
`;

export const ErrorContainer = styled.div`
  width: 100%;
  max-width: 55%;
  padding: 0 6%;
  margin: 5% auto;
  text-align: center;
  color: #312517;
`;

export const ErrorBox = styled.div`
  box-shadow: 0px 0 8px #312517;
  padding: 12% 7%;
`;

export const ErrorCode = styled.h2`
  color: #312517;
  display: inline;
  &:nth-child(2) {
    color: #c48f5a;
  }
`;
export const ErrorHeader = styled.div`
  color: #c48f5a;
  font-size: 100px;
`;

export const ErrorMessage = styled.h5`
  color: #c48f5a;
  font-size: 20px;
  margin-top: 30px;
`;
