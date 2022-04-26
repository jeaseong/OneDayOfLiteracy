import {
  CardBox,
  CardContainer,
  CardContent,
  CardHeader,
  ProfileImg,
  ChangeButton,
  ProfileImgBox,
  ProfileChangeBox,
  CardIntroduce,
  ProfileHeading,
  CardMyInfo,
  CardLikePost,
  ProfileNickName,
  ProfileIntroduce,
  CardLikeCountBox,
} from "../../../styles/MyPageStyle";

function UserCard() {
  return (
    <CardContainer>
      <CardBox>
        <CardHeader>
          <ProfileImgBox>
            <ProfileImg
              src={"https://source.unsplash.com/random"}
              alt={"profile"}
            />
          </ProfileImgBox>
          <ProfileChangeBox>
            <ChangeButton>프로필 수정</ChangeButton>
          </ProfileChangeBox>
        </CardHeader>
        <CardContent>
          <CardIntroduce>
            <ProfileNickName>테스트유저</ProfileNickName> &nbsp;
            <ProfileIntroduce>
              소개글입니다.소개글입니다.소개글입니다.소개글입니다.소개글입니다.소개글입니다.
            </ProfileIntroduce>
          </CardIntroduce>
          <CardMyInfo>
            <CardLikePost>
              <ProfileHeading>내가 작성한 게시글</ProfileHeading>
              <CardLikeCountBox>
                <ProfileHeading>3</ProfileHeading>
              </CardLikeCountBox>
            </CardLikePost>
            <CardLikePost>
              <ProfileHeading>내가 좋아한 게시글</ProfileHeading>
              <CardLikeCountBox>
                <ProfileHeading>3</ProfileHeading>
              </CardLikeCountBox>
            </CardLikePost>
            <CardLikePost>
              <ProfileHeading>내 글을 좋아한 사람들</ProfileHeading>
              <CardLikeCountBox>
                <ProfileHeading>3</ProfileHeading>
              </CardLikeCountBox>
            </CardLikePost>
          </CardMyInfo>
        </CardContent>
      </CardBox>
    </CardContainer>
  );
}

export default UserCard;
