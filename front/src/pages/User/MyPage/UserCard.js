import {
  CardBox,
  CardContainer,
  CardHeader,
  ProfileImg,
  ChangeButton,
  ProfileImgBox,
  ProfileChangeBox,
} from "../../../styles/User/MyPageStyle";
import { LABEL } from "../../../utils/constants";

function UserCard({ editStateStore, children }) {
  const { isEdit, setIsEdit } = editStateStore;

  const ModifyUserButton = !isEdit ? (
    <ChangeButton onClick={() => setIsEdit((cur) => !cur)}>
      {LABEL.CHANGE_PROFILE}
    </ChangeButton>
  ) : (
    <ChangeButton>{LABEL.CHANGE_IMAGE}</ChangeButton>
  );

  return (
    <CardContainer>
      <CardBox>
        <CardHeader>
          <ProfileImgBox>
            <ProfileImg
              src={"https://source.unsplash.com/random"}
              alt="profileImage"
            />
          </ProfileImgBox>
          <ProfileChangeBox>{ModifyUserButton}</ProfileChangeBox>
        </CardHeader>
        {children}
      </CardBox>
    </CardContainer>
  );
}

export default UserCard;
