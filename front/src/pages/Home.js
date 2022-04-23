import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>문해한 하루</h1>
      <button
        type={"button"}
        onClick={() => {
          navigate("/test");
        }}
      >
        테스트보기
      </button>
    </div>
  );
}

export default Home;
