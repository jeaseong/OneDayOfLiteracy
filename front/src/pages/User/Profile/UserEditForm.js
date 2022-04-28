import { useState } from "react";
import {
  EditContainer,
  EditBox,
  EditIntroduceBox,
  EditInput,
  EditIntroduceInput,
  ConfirmButton,
  ConfirmButtonBox,
  EditInputBox,
} from "../../../styles/User/ProfileStyle";
import {
  LABEL,
  GUIDE_MESSAGE,
  FAIL_MESSAGE,
  ALERT_TYPE,
} from "../../../utils/constants";
import { validation } from "../../../utils/validation";
import { useChangeProfile, useCurrentUser } from "../../../queries/userQuery";
import {
  CustomSnackbar,
  setAlertData,
} from "../../../components/CustomSnackbar";

function UserEditForm({ editStateStore }) {
  const { setIsEdit } = editStateStore;
  const { userState } = useCurrentUser();
  const [showAlert, setShowAlert] = useState(false);
  const mutation = useChangeProfile(userState._id, setShowAlert);
  const [editInfo, setEditInfo] = useState({
    nickname: userState.nickname,
    password: "",
    confirmPassword: "",
    introduce: userState.introduce,
  });

  // Alert
  const changeFailUserProfile = setAlertData(
    showAlert,
    setShowAlert,
    FAIL_MESSAGE.CHANGE_PROFILE,
    ALERT_TYPE.SUCCESS
  );

  // 유효성 검사
  const { nickname, password, confirmPassword, introduce } = editInfo;
  const { isCheckNickName, isPassRule, isSamePassword } = validation(
    "editUser",
    editInfo
  );
  const userInputGuide = {
    nickname: !isCheckNickName && nickname.length > 0,
    password: !isPassRule && password.length > 0,
    confirmPassword: !isSamePassword && confirmPassword.length > 0,
  };
  const isActive = isCheckNickName && isPassRule && isSamePassword;

  // 유저 입력 onChange 및 onSUbmit
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const profileData = { nickname, password, introduce };
    mutation.mutate(profileData);
  };

  const handleOnChange = (e) => {
    setEditInfo((cur) => ({ ...cur, [e.target.name]: e.target.value }));
  };

  return (
    <EditContainer>
      <EditBox>
        <EditInputBox types={userInputGuide.nickname}>
          <EditInput
            name="nickname"
            type="text"
            placeholder="Nickname*"
            value={editInfo.nickname}
            onChange={handleOnChange}
          />
          {userInputGuide.nickname && <p>{GUIDE_MESSAGE.NICKNAME}</p>}
        </EditInputBox>
        <EditInputBox types={userInputGuide.password}>
          <EditInput
            name="password"
            type="password"
            placeholder="Password*"
            onChange={handleOnChange}
          />
          {userInputGuide.password && <p>{GUIDE_MESSAGE.PASSWORD}</p>}
        </EditInputBox>
        <EditInputBox types={userInputGuide.confirmPassword}>
          <EditInput
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password*"
            onChange={handleOnChange}
          />
          {userInputGuide.confirmPassword && (
            <p>{GUIDE_MESSAGE.CONFIRM_PASSWORD}</p>
          )}
        </EditInputBox>
        <ConfirmButtonBox types={userInputGuide.confirmPassword}>
          <ConfirmButton
            type="submit"
            onClick={handleOnSubmit}
            disabled={!isActive}
          >
            {LABEL.CONFIRM}
          </ConfirmButton>
          <ConfirmButton onClick={() => setIsEdit((cur) => !cur)}>
            {LABEL.CANCLE}
          </ConfirmButton>
        </ConfirmButtonBox>
      </EditBox>
      <EditIntroduceBox>
        <EditIntroduceInput
          name="introduce"
          placeholder="Introduce"
          value={editInfo.introduce}
          onChange={handleOnChange}
        />
      </EditIntroduceBox>
      <CustomSnackbar {...changeFailUserProfile} />
    </EditContainer>
  );
}

export default UserEditForm;
