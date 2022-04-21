import { useState } from "react";
import { validation } from "../../../utils/validation";
import { post } from "../../../utils/api";
import { useMutation, useQueryClient } from "react-query";

function Login({ onSubmit = () => {} }) {
  const queryClient = useQueryClient();
  const initialInfo = {
    email: "",
    password: "",
  };
  const [loginInfo, setLoginInfo] = useState(initialInfo);
  const isActive = validation("login", loginInfo);
  const mutationLogin = useMutation(
    async (loginData) => await post("user/login", loginData),
    {
      onSuccess: (data) => {
        const jwtToken = data.token;
        sessionStorage.setItem("userToken", jwtToken);
        queryClient.invalidateQueries("userState");
      },
      onError: (err) => console.log(err),
    }
  );

  const handleOnChange = (e) => {
    setLoginInfo((cur) => ({ ...cur, [e.target.name]: e.target.value }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    onSubmit();

    mutationLogin.mutate(loginInfo);
    setLoginInfo(initialInfo);
  };

  return (
    <div>
      <h2>문해한 하루</h2>
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="login-email">이메일</label>
        <input
          id="login-email"
          type="email"
          name="email"
          onChange={handleOnChange}
        />
        <label htmlFor="login-password">비밀번호</label>
        <input
          id="login-password"
          type="password"
          name="password"
          onChange={handleOnChange}
        />
        <button type="submit" disabled={!isActive}>
          로그인
        </button>
      </form>
    </div>
  );
}

export default Login;
