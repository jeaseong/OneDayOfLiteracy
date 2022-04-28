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
import { useCurrentUser, useProfileUser } from "../../../queries/userQuery";
import {
  CustomSnackbar,
  setAlertData,
} from "../../../components/CustomSnackbar";
import { useParams } from "react-router-dom";
import Loading from "../../../components/Loading";

function UserCard({ editStateStore, children }) {
  const params = useParams();
  const { userState } = useCurrentUser();
  const { userProfile, isFetching } = useProfileUser(params.userId);
  const [showAlert, setShowAlert] = useState(false);
  const { isEdit, setIsEdit } = editStateStore;

  if (isFetching) return <Loading />;
  const { _id, profileUrl } = userProfile;

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
    id: _id,
    prevImage: profileUrl,
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
            <ProfileImg src={profileUrl} alt="profileImage" />
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
