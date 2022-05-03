import { useState } from "react";
import { MyPageContainer } from "../../../styles/User/ProfileStyle";
import UserCard from "./UserCard";
import UserPostList from "./UserPostList";
import UserInfomation from "./UserInfomation";
import UserEditForm from "./UserEditForm";
import { useGetProfileUser } from "../../../queries/userQuery";
import { useParams } from "react-router-dom";
import { useQueryClient } from "react-query";
import Loading from "../../../components/Loading";
import ErrorPage from "../../../components/ErrorPage";

/**
 * 사용자의 프로필 컴포넌트입니다.
 * @returns {JSX.Element}
 * @constructor
 */
function UserProfile() {
  const params = useParams();
  const queryClient = useQueryClient();
  const { userState } = queryClient.getQueryData("userState");
  const { error, isFetching } = useGetProfileUser(params.userId);
  const [isEdit, setIsEdit] = useState(false);
  const editStateStore = { isEdit, setIsEdit };

  // 프로필의 주인인가?
  const checkProfileOwner = () => {
    if (!userState) return false;
    return userState._id === params.userId;
  };
  const isProfileOwner = checkProfileOwner();

  const CardContent = isEdit ? (
    <UserEditForm editStateStore={editStateStore} />
  ) : (
    <UserInfomation />
  );

  if (isFetching) return <Loading />;
  if (error) return <ErrorPage />;

  return (
    <MyPageContainer>
      <UserCard isProfileOwner={isProfileOwner} editStateStore={editStateStore}>
        {CardContent}
      </UserCard>
      <UserPostList isProfileOwner={isProfileOwner} />
    </MyPageContainer>
  );
}

export default UserProfile;
