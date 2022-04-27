import { useState } from "react";
import { MyPageContainer } from "../../../styles/User/MyPageStyle";
import UserCard from "./UserCard";
import UserPostList from "./UserPostList";
import UserInfomation from "./UserInfomation";
import UserEditForm from "./UserEditForm";

/**
 * 사용자의 마이 페이지 컴포넌트입니다.
 * @returns {JSX.Element}
 * @constructor
 */
function UserProfile() {
  const [isEdit, setIsEdit] = useState(false);
  const editStateStore = { isEdit, setIsEdit };

  const CardContent = isEdit ? (
    <UserEditForm editStateStore={editStateStore} />
  ) : (
    <UserInfomation />
  );

  return (
    <MyPageContainer>
      <UserCard editStateStore={editStateStore}>{CardContent}</UserCard>
      <UserPostList />
    </MyPageContainer>
  );
}

export default UserProfile;
