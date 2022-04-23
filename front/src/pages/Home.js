import { useNavigate } from "react-router-dom";
import { useQueryClient } from "react-query";

function Home() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

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
          window.location.reload();
        }}
      >
        로그아웃
      </button>
    </div>
  );
}

export default Home;
