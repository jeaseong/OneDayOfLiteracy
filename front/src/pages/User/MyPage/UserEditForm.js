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
} from "../../../styles/User/MyPageStyle";
import { LABEL, GUIDE_MESSAGE } from "../../../utils/constants";
import { validation } from "../../../utils/validation";
import { useCurrentUser } from "../../../queries/userQuery";

function UserEditForm({ editStateStore }) {
  const { setIsEdit } = editStateStore;
  const { userState } = useCurrentUser();
  const [editInfo, setEditInfo] = useState({
    nickname: userState.nickname,
    password: "",
    confirmPassword: "",
    introduce: "테스트",
  });
  const { nickname, password, confirmPassword } = editInfo;
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

  const handleOnChange = (e) => {
    setEditInfo((cur) => ({ ...cur, [e.target.name]: e.target.value }));
  };

  return (
    <EditContainer>
      <EditBox>
        <EditInputBox type={userInputGuide.nickname}>
          <EditInput
            name="nickname"
            type="text"
            placeholder="Nickname*"
            value={editInfo.nickname}
            onChange={handleOnChange}
          />
          {userInputGuide.nickname && <p>{GUIDE_MESSAGE.NICKNAME}</p>}
        </EditInputBox>
        <EditInputBox type={userInputGuide.password}>
          <EditInput
            name="password"
            type="password"
            placeholder="Password*"
            onChange={handleOnChange}
          />
          {userInputGuide.password && <p>{GUIDE_MESSAGE.PASSWORD}</p>}
        </EditInputBox>
        <EditInputBox type={userInputGuide.confirmPassword}>
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
        <ConfirmButtonBox type={userInputGuide.confirmPassword}>
          <ConfirmButton disabled={!isActive}>{LABEL.CONFIRM}</ConfirmButton>
          <ConfirmButton onClick={() => setIsEdit((cur) => !cur)}>
            {LABEL.CANCLE}
          </ConfirmButton>
        </ConfirmButtonBox>
      </EditBox>
      <EditIntroduceBox>
        <EditIntroduceInput placeholder="Introduce" />
      </EditIntroduceBox>
    </EditContainer>
  );
}

export default UserEditForm;
