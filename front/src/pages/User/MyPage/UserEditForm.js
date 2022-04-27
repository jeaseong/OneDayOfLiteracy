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
  const { isCheckNickName, isPassRule, isSamePassword } = validation(
    "editUser",
    editInfo
  );
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
        <EditInput
          name="password"
          type="password"
          placeholder="Password*"
          onChange={handleOnChange}
        />
        <EditInput
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password*"
          onChange={handleOnChange}
        />
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
