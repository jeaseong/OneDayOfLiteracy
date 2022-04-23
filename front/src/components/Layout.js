import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Container from "@material-ui/core/Container";
import { withStyles } from "@material-ui/core/styles";
import { getThemeProps } from "@mui/system";

const StyledContainer = withStyles({
  maxWidthXs: {
    paddingRight: "0",
    paddingLeft: "0",
    paddingTop: "0",
    paddingBottom: "0",
  },
  root: {},
})(Container);

function Layout() {
  return (
    <Container maxWidth="xl" disableGutters={true}>
      <Header />
      <Footer />
    </Container>
  );
}

export default Layout;
