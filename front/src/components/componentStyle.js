import styled from "styled-components";
import { footerImg } from "../utils/imgImport";

export const FooterContainer = styled.footer`
  width: 100%;
  height: 50px;
  /* background-image: url(${footerImg}); */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterBackground = styled.img`
  width: 100%;
  height: auto;
  position: absolute;
  bottom: 0;
`;
