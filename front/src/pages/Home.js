import { useNavigate } from "react-router-dom";
import { useQueryClient } from "react-query";
import { useState } from "react";

function Home() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const userState = queryClient.getQueryData("userState");
  const [isLogin, setIsLogin] = useState(!!userState);

  return (
    <div>
      <h1>문해한 하루</h1>
      <button
        type={"button"}
        onClick={() => {
          navigate("/user/login");
        }}
      >
        로그인
      </button>
      <button
        type={"button"}
        onClick={() => {
          navigate("/user/register");
        }}
      >
        회원가입
      </button>
      <button
        type={"button"}
        onClick={() => {
          sessionStorage.removeItem("userToken");
          queryClient.removeQueries("userState");
          setIsLogin(false);
        }}
      >
        로그아웃
      </button>
      {isLogin && <h2>로그인 중</h2>}
    </div>
  );
}

export default Home;
