import { useState } from "react";
import {
  EditContainer,
  EditBox,
  EditIntroduceBox,
  EditInput,
  EditIntroduceInput,
  ConfirmButton,
  ConfirmButtonBox,
} from "../../../styles/User/MyPageStyle";
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
        <EditInput
          name="nickname"
          type="text"
          placeholder="Nickname*"
          value={editInfo.nickname}
          onChange={handleOnChange}
        />
        {userInputGuide.nickname && <p>닉네임은 2글자 이상이어야 합니다.</p>}
        <EditInput
          name="password"
          type="password"
          placeholder="Password*"
          onChange={handleOnChange}
        />
        {userInputGuide.password && (
          <p>비밀번호는 영문 + 숫자 + 8자리 이상입니다.</p>
        )}
        <EditInput
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password*"
          onChange={handleOnChange}
        />
        {userInputGuide.confirmPassword && <p>비밀번호가 일치하지 않습니다.</p>}
        <ConfirmButtonBox>
          <ConfirmButton disabled={!isActive}>확인</ConfirmButton>
          <ConfirmButton onClick={() => setIsEdit((cur) => !cur)}>
            취소
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
