import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Container from "@material-ui/core/Container";

function Layout() {
  const HeaderStyle = {
    position: "fixed",
    top: 0,
    padding: "100px",
    backgroundColor: "yellow",
    minHeight: "50vh",
  };

  const LayoutStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    minHeight: "100vh",
  };

  const FooterStyle = {
    backgroundColor: "red",
  };

  return (
    <Container style={LayoutStyle} maxWidth="xl" disableGutters={true}>
      <Header
        style={{
          color: "red",
          position: "fixed",
          top: 0,
          padding: "100px",
          backgroundColor: "yellow",
          minHeight: "50vh",
        }}
      />

      <Footer style={FooterStyle} />
    </Container>
  );
}

export default Layout;
