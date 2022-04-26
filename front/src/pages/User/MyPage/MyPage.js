import { useEffect } from "react";
import { useCurrentUser } from "../../../queries/userQuery";
import { useNavigate } from "react-router-dom";
import { MyPageContainer } from "../../../styles/MyPageStyle";

function MyPage() {
  const navigate = useNavigate();
  const { userState, isLogin } = useCurrentUser();

  useEffect(() => {
    if (!isLogin) navigate("/");
  }, [isLogin, navigate]);

  return (
    <MyPageContainer>
      <h2>{userState.nickname}</h2>
    </MyPageContainer>
  );
}

export default MyPage;
