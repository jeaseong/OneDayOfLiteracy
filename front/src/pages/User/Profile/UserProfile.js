import { useEffect, useState } from "react";
import { MyPageContainer } from "styles/User/ProfileStyle";
import UserCard from "pages/User/Profile/UserCard";
import UserPostList from "pages/User/Profile/UserPostList";
import UserInfomation from "pages/User/Profile/UserInfomation";
import UserEditForm from "pages/User/Profile/UserEditForm";
import { useParams } from "react-router-dom";
import { useQueryClient } from "react-query";

/**
 * 사용자의 프로필 컴포넌트입니다.
 * @returns {JSX.Element}
 * @constructor
 */
function UserProfile() {
  const params = useParams();
  const queryClient = useQueryClient();
  const [isEdit, setIsEdit] = useState(false);
  const editStateStore = { isEdit, setIsEdit };

  useEffect(() => {
    queryClient.invalidateQueries(["user", params.userId]);
    queryClient.invalidateQueries(["posts", `likes/user/${params.userId}?`]);
  }, [params.userId, queryClient]);

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
