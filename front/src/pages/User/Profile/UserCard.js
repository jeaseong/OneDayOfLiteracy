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
import { useGetProfileUser } from "../../../queries/userQuery";
import {
  CustomSnackbar,
  setAlertData,
} from "../../../components/CustomSnackbar";
import { useParams } from "react-router-dom";

/**
 * 프로필 페이지의 유저 카드 컴포넌트입니다.
 * @param {boolean} isProfileOwner
 * @param {object} editStateStore 편집 상태와 편집상태를 수정하는 state
 * @param {JSX.Element} children 프로필 정보 또는 프로필 수정 컴포넌트를 받아옵니다.
 * @returns {JSX.Element}
 * @constructor
 */
function UserCard({ isProfileOwner, editStateStore, children }) {
  const params = useParams();
  const { isEdit, setIsEdit } = editStateStore;
  const [showAlert, setShowAlert] = useState(false);
  const userProfile = useGetProfileUser(params.userId);
  const { _id, profileUrl } = userProfile.data;

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
