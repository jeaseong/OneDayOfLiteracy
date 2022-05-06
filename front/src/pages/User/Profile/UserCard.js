import { useState } from "react";
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
import EditIcon from "@mui/icons-material/Edit";

import { CustomSnackbar, setAlertData } from "components/CustomSnackbar";
import Loading from "components/Loading";
import ErrorPage from "components/ErrorPage";
import { ALERT_TYPE, FAIL_MESSAGE } from "utils/constants";
import FileUpload from "components/FileUpload";

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
  const { isEdit, setIsEdit } = editStateStore;
  const [showAlert, setShowAlert] = useState(false);
  const userProfile = useGetProfileUser(userId);

  if (userProfile.isFetching) return <Loading />;
  if (userProfile.error) return <ErrorPage />;

  // 프로필의 주인인가?
  const checkProfileOwner = () => {
    if (!userState) return false;
    return userState._id === userId;
  };
  const isProfileOwner = checkProfileOwner();

  // Alert
  const changeFailImage = setAlertData(
    showAlert,
    setShowAlert,
    FAIL_MESSAGE.IMAGE,
    ALERT_TYPE.ERROR
  );

  // 프로필 이미지 업로드
  const profileImageData = {
    type: "users",
    id: userProfile.data._id,
    prevImage: userProfile.data.profileUrl,
    showAlert,
    setShowAlert,
  };

  const ModifyUserButton = !isEdit ? (
    <EditIcon onClick={() => setIsEdit((cur) => !cur)} fontSize="medium" />
  ) : (
    <FileUpload {...profileImageData} />
  );

  return (
    <CardContainer>
      <CardBox>
        <UserProfileContainer>
          <CardHeader>
            <ProfileImg src={userProfile.data.profileUrl} alt="profileImage" />
          </CardHeader>
          <EditContainer>
            {children}
            {isProfileOwner && (
              <ProfileChangeBox>{ModifyUserButton}</ProfileChangeBox>
            )}
          </EditContainer>
        </UserProfileContainer>

        <UserPostInfo />
      </CardBox>
      <CustomSnackbar {...changeFailImage} />
    </CardContainer>
  );
}

export default UserCard;
