import { useState } from "react";
import { validation } from "../../../utils/validation";
import { post } from "../../../utils/api";

function Login({ onSubmit = () => {} }) {
  const initialInfo = {
    email: "",
    password: "",
  };
  const [loginInfo, setLoginInfo] = useState(initialInfo);
  const isActive = validation("login", loginInfo);

  const handleOnChange = (e) => {
    setLoginInfo((cur) => ({ ...cur, [e.target.name]: e.target.value }));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    onSubmit();

    try {
      await post("user/login", loginInfo);
      setLoginInfo(initialInfo);
    } catch (err) {
      console.log(err);
    }
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
