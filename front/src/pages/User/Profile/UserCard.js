import { useState } from "react";
import {
  CardBox,
  CardContainer,
  CardHeader,
  ProfileImg,
  ChangeButton,
  ProfileImgBox,
  ProfileChangeBox,
} from "../../../styles/User/ProfileStyle";
import { ALERT_TYPE, FAIL_MESSAGE, LABEL } from "../../../utils/constants";
import FileUpload from "../../../components/FileUpload";
import {
  CustomSnackbar,
  setAlertData,
} from "../../../components/CustomSnackbar";
import { useParams } from "react-router-dom";
import { useQueryClient } from "react-query";
import { useGetProfileUser } from "../../../queries/userQuery";
import Loading from "../../../components/Loading";
import ErrorPage from "../../../components/ErrorPage";

/**
 * 프로필 페이지의 유저 카드 컴포넌트입니다.
 * @param {object} editStateStore 편집 상태와 편집상태를 수정하는 state
 * @param {JSX.Element} children 프로필 정보 또는 프로필 수정 컴포넌트를 받아옵니다.
 * @returns {JSX.Element}
 * @constructor
 */
function UserCard({ editStateStore, children }) {
  const params = useParams();
  const queryClient = useQueryClient();
  const { userState } = queryClient.getQueryData("userState");
  const { isEdit, setIsEdit } = editStateStore;
  const [showAlert, setShowAlert] = useState(false);
  const userProfile = useGetProfileUser(params.userId);

  if (userProfile.isFetching) return <Loading />;
  if (userProfile.error) return <ErrorPage />;

  // 프로필의 주인인가?
  const checkProfileOwner = () => {
    if (!userState) return false;
    return userState._id === params.userId;
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
    type: "user",
    id: userProfile.data._id,
    prevImage: userProfile.data.profileUrl,
    showAlert,
    setShowAlert,
  };

  const ModifyUserButton = !isEdit ? (
    <ChangeButton onClick={() => setIsEdit((cur) => !cur)}>
      {LABEL.CHANGE_PROFILE}
    </ChangeButton>
  ) : (
    <FileUpload {...profileImageData} />
  );

  return (
    <CardContainer>
      <CardBox>
        <CardHeader>
          <ProfileImgBox>
            <ProfileImg src={userProfile.data.profileUrl} alt="profileImage" />
          </ProfileImgBox>
          {isProfileOwner && (
            <ProfileChangeBox>{ModifyUserButton}</ProfileChangeBox>
          )}
        </CardHeader>
        {children}
      </CardBox>
      <CustomSnackbar {...changeFailImage} />
    </CardContainer>
  );
}

export default UserCard;
