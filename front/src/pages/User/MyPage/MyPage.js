import { useEffect } from "react";
import { useCurrentUser } from "../../../queries/userQuery";
import { useNavigate } from "react-router-dom";
import { MyPageContainer } from "../../../styles/MyPageStyle";
import UserCard from "./UserCard";
import MyPost from "./MyPost";

function MyPage() {
  const navigate = useNavigate();
  const { isLogin } = useCurrentUser();

  useEffect(() => {
    if (!isLogin) navigate("/");
  }, [isLogin, navigate]);

  return (
    <MyPageContainer>
      <UserCard>sadf</UserCard>
      <MyPost />
    </MyPageContainer>
  );
}

export default MyPage;
