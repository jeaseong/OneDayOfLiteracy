import {
  CardContent,
  CardIntroduce,
  CardLikeCountBox,
  CardLikePost,
  CardMyInfo,
  ProfileHeading,
  ProfileIntroduce,
  ProfileNickName,
  ProfilePostCount,
} from "../../../styles/MyPageStyle";

function UserInfomation() {
  return (
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
            <ProfilePostCount>3</ProfilePostCount>
          </CardLikeCountBox>
        </CardLikePost>
        <CardLikePost>
          <ProfileHeading>내가 좋아한 게시글</ProfileHeading>
          <CardLikeCountBox>
            <ProfilePostCount>3</ProfilePostCount>
          </CardLikeCountBox>
        </CardLikePost>
        <CardLikePost>
          <ProfileHeading>내 글을 좋아한 사람들</ProfileHeading>
          <CardLikeCountBox>
            <ProfilePostCount>3</ProfilePostCount>
          </CardLikeCountBox>
        </CardLikePost>
      </CardMyInfo>
    </CardContent>
  );
}

export default UserInfomation;
