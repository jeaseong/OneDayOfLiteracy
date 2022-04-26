import {
  CardBox,
  CardContainer,
  CardHeader,
  ProfileImg,
  ChangeButton,
  ProfileImgBox,
  ProfileChangeBox,
} from "../../../styles/User/MyPageStyle";

function UserCard({ editStateStore, children }) {
  const { isEdit, setIsEdit } = editStateStore;

  const ModifyUserButton = !isEdit ? (
    <ChangeButton onClick={() => setIsEdit((cur) => !cur)}>
      프로필 수정
    </ChangeButton>
  ) : (
    <ChangeButton>이미지 변경</ChangeButton>
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
