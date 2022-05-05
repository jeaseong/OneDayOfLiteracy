import styled from "styled-components";
import { img } from "utils/imgImport";

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
