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
  right: 8%;
`;
