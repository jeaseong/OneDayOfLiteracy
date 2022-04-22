import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { palette } from "@mui/system";
import { lightBlue } from "@mui/material/colors";
// import { shadows } from "@material-ui/system";

function Errorpage() {
  return (
    <Container
      fixed
      sx={{
        textAlign: "center",
        mt: "20%",
      }}
    >
      <Box sx={{ boxShadow: 3, padding: 20 }}>
        <Typography
          variant="h1"
          component="div"
          gutterBottom
          sx={{ fontWeight: "bold", fontSize: 100 }}
        >
          <span>4</span>
          <span style={{ color: lightBlue[400] }}>0</span>
          <span>4</span>
        </Typography>
        <Typography variant="h5" gutterBottom component="div">
          THE PAGE YOU REQUESTED COULD NOT FOUND
        </Typography>
      </Box>
    </Container>
  );
}
export default Errorpage;
