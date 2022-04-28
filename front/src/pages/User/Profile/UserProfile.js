import { useState } from "react";
import { MyPageContainer } from "../../../styles/User/ProfileStyle";
import UserCard from "./UserCard";
import UserPostList from "./UserPostList";
import UserInfomation from "./UserInfomation";
import UserEditForm from "./UserEditForm";
import { useProfileUser } from "../../../queries/userQuery";
import { useParams } from "react-router-dom";
import ErrorPage from "../../../components/ErrorPage";

/**
 * 사용자의 마이 페이지 컴포넌트입니다.
 * @returns {JSX.Element}
 * @constructor
 */
function UserProfile() {
  const params = useParams();
  const [isEdit, setIsEdit] = useState(false);
  const { error } = useProfileUser(params.userId);

  const editStateStore = { isEdit, setIsEdit };

  const CardContent = isEdit ? (
    <UserEditForm editStateStore={editStateStore} />
  ) : (
    <UserInfomation />
  );

  if (error) return <ErrorPage />;

  return (
    <MyPageContainer>
      <UserCard editStateStore={editStateStore}>{CardContent}</UserCard>
      <UserPostList />
    </MyPageContainer>
  );
}

export default UserProfile;
