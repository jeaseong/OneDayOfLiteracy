import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { lightBlue } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import { LABEL, GUIDE_MESSAGE } from "../utils/constants";

function ErrorPage() {
  const navigate = useNavigate();
  const [showTimeCount, setShowTimeCount] = useState(3);

  useEffect(() => {
    const countDown = setInterval(() => {
      setShowTimeCount((cur) => cur - 1);
    }, 1000);
    return () => clearInterval(countDown);
  }, []);

  useEffect(() => {
    if (showTimeCount < 0) navigate("/");
  }, [showTimeCount, navigate]);

  return (
    <Container
      fixed
      sx={{
        textAlign: "center",
        mt: "5%",
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
          {LABEL.ERROR_INTRODUCE}
        </Typography>
        <br />
        <Typography variant="h5" gutterBottom component="div">
          {showTimeCount + GUIDE_MESSAGE.ERROR}
        </Typography>
      </Box>
    </Container>
  );
}
export default ErrorPage;
