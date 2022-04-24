import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Copyright } from "./Copyright";
import { useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();
  const currentPath = location.pathname;

  const loginPage = "/user/login";
  const registerPage = "/user/register";
  const hideFooter = currentPath === loginPage || currentPath === registerPage;

  if (hideFooter) return null;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[400]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}

export default Footer;
