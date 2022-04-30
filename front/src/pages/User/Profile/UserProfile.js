import { useState } from "react";
import { MyPageContainer } from "../../../styles/User/ProfileStyle";
import UserCard from "./UserCard";
import UserPostList from "./UserPostList";
import UserInfomation from "./UserInfomation";
import UserEditForm from "./UserEditForm";
import { useGetProfileUser } from "../../../queries/userQuery";
import { useParams } from "react-router-dom";
import ErrorPage from "../../../components/ErrorPage";
import { useGetUserPostList } from "../../../queries/postQuery";
import Loading from "../../../components/Loading";

/**
 * 사용자의 프로필 컴포넌트입니다.
 * @returns {JSX.Element}
 * @constructor
 */
function UserProfile() {
  const params = useParams();
  const [isEdit, setIsEdit] = useState(false);
  const { error, isFetching } = useGetProfileUser(params.userId);
  const userPostsData = useGetUserPostList(params.userId);

  const editStateStore = { isEdit, setIsEdit };

  const CardContent = isEdit ? (
    <UserEditForm editStateStore={editStateStore} />
  ) : (
    <UserInfomation />
  );

  if (isFetching || userPostsData.isFetching) return <Loading />;
  if (error || userPostsData.error) return <ErrorPage />;

  return (
    <MyPageContainer>
      <UserCard editStateStore={editStateStore}>{CardContent}</UserCard>
      <UserPostList />
    </MyPageContainer>
  );
}

export default UserProfile;
