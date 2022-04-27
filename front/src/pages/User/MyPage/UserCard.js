import { useState } from "react";
import {
  CardBox,
  CardContainer,
  CardHeader,
  ProfileImg,
  ChangeButton,
  ProfileImgBox,
  ProfileChangeBox,
} from "../../../styles/User/MyPageStyle";
import { ALERT_TYPE, FAIL_MESSAGE, LABEL } from "../../../utils/constants";
import FileUpload from "../../../components/FileUpload";
import { useCurrentUser } from "../../../queries/userQuery";
import {
  CustomSnackbar,
  setAlertData,
} from "../../../components/CustomSnackbar";

function UserCard({ editStateStore, children }) {
  const { userState } = useCurrentUser();
  const [showAlert, setShowAlert] = useState(false);
  const { _id, profileUrl } = userState;
  const { isEdit, setIsEdit } = editStateStore;

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
          <ProfileChangeBox>{ModifyUserButton}</ProfileChangeBox>
        </CardHeader>
        {children}
      </CardBox>
      <CustomSnackbar {...changeFailImage} />
    </CardContainer>
  );
}

export default UserCard;
