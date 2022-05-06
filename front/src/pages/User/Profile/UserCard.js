import { useParams } from "react-router-dom";
import { useQueryClient } from "react-query";
import { useGetProfileUser } from "queries/userQuery";
import UserPostInfo from "pages/User/Profile/UserPostInfo";
import {
  CardBox,
  CardContainer,
  UserProfileContainer,
  CardHeader,
  ProfileImg,
  EditContainer,
  ProfileChangeBox,
} from "styles/User/UserCardStyle";
import Loading from "components/Loading";
import ErrorPage from "components/ErrorPage";

/**
 * 프로필 페이지의 유저 카드 컴포넌트입니다.
 * @param {object} editStateStore 편집 상태와 편집상태를 수정하는 state
 * @param {JSX.Element} children 프로필 정보 또는 프로필 수정 컴포넌트를 받아옵니다.
 * @returns {JSX.Element}
 * @constructor
 */
function UserCard({ editStateStore, children }) {
  const params = useParams();
  const userId = params.userId;
  const queryClient = useQueryClient();
  const { userState } = queryClient.getQueryData("userState");
  const userProfile = useGetProfileUser(userId);

  if (userProfile.isFetching) return <Loading />;
  if (userProfile.error) return <ErrorPage />;

  // 프로필의 주인인가?
  const checkProfileOwner = () => {
    if (!userState) return false;
    return userState._id === userId;
  };
  const isProfileOwner = checkProfileOwner();

  return (
    <CardContainer>
      <CardBox>
        <UserProfileContainer>
          <CardHeader>
            <ProfileImg src={userProfile.data.profileUrl} alt="profileImage" />
          </CardHeader>
          <EditContainer>
            {children}
            {isProfileOwner && <ProfileChangeBox>수정버튼</ProfileChangeBox>}
          </EditContainer>
        </UserProfileContainer>
        <UserPostInfo />
      </CardBox>
    </CardContainer>
  );
}

export default UserCard;
