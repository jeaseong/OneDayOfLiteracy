import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { Copyright } from "../../../components/Copyright";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { validation } from "../../../utils/validation";
import { useUserLogin } from "../../../queries/userQuery";
import { useNavigate } from "react-router-dom";

const theme = createTheme();

/**
 * 유저의 로그인을 담당하는 컴포넌트 입니다.
 * @param {function} onSubmit - 테스트를 위한 모의함수입니다.
 **/
function Login({ onSubmit = () => {} }) {
  const navigate = useNavigate();
  const kakaoAuthUrl = process.env.REACT_APP_KAKAO_AUTH_URL;
  const initialInfo = {
    email: "",
    password: "",
  };
  const [loginInfo, setLoginInfo] = useState(initialInfo);
  const isActive = validation("login", loginInfo);
  const mutation = useUserLogin();

  const handleOnChange = (e) => {
    setLoginInfo((cur) => ({ ...cur, [e.target.name]: e.target.value }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    onSubmit();
    mutation.mutate(loginInfo);
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://source.unsplash.com/random)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleOnSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                onChange={handleOnChange}
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={handleOnChange}
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={!isActive}
              >
                Sign In
              </Button>
              <div style={{ textAlign: "center" }}>
                <Link href={kakaoAuthUrl}>
                  <img src="/kakao_login_medium_narrow.png" alt="kakaoLogin" />
                </Link>
              </div>
              <Grid container>
                <Grid item xs>
                  <Button>비밀번호 찾기</Button>
                </Grid>
                <Grid item>
                  <Button onClick={() => navigate("/user/register")}>
                    아직 계정이 없으신가요?
                  </Button>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default Login;
