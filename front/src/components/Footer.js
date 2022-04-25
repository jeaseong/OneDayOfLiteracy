import React from "react";
import { useLocation } from "react-router-dom";
import { Copyright } from "./Copyright";
import { FooterContainer, FooterBackground } from "./componentStyle";
import { footerImg } from "../utils/imgImport";

function Footer() {
  const location = useLocation();
  const currentPath = location.pathname;

  const loginPage = "/user/login";
  const registerPage = "/user/register";
  const hideFooter = currentPath === loginPage || currentPath === registerPage;

  if (hideFooter) return null;

  return (
    <FooterContainer>
      <Copyright />
      <FooterBackground src={footerImg} alt="footer이미지" />
    </FooterContainer>
  );
}

export default Footer;
