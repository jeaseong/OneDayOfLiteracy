import { useEffect, useState } from "react";
import { useCurrentUser } from "../../../queries/userQuery";
import { useNavigate } from "react-router-dom";
import { MyPageContainer } from "../../../styles/User/MyPageStyle";
import UserCard from "./UserCard";
import MyPost from "./MyPost";
import UserInfomation from "./UserInfomation";
import UserEditForm from "./UserEditForm";

/**
 * 사용자의 마이 페이지 컴포넌트입니다.
 * @returns {JSX.Element}
 * @constructor
 */
function MyPage() {
  const navigate = useNavigate();
  const { isLogin } = useCurrentUser();
  const [isEdit, setIsEdit] = useState(false);
  const editStateStore = { isEdit, setIsEdit };

  useEffect(() => {
    if (!isLogin) navigate("/");
  }, [isLogin, navigate]);

  const CardContent = !isEdit ? (
    <UserInfomation />
  ) : (
    <UserEditForm editStateStore={editStateStore} />
  );

  return (
    <MyPageContainer>
      <UserCard editStateStore={editStateStore}>{CardContent}</UserCard>
      <MyPost />
    </MyPageContainer>
  );
}

export default MyPage;
