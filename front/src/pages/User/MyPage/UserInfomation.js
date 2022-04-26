import {
  CardContent,
  CardIntroduce,
  CardLikeCountBox,
  CardLikePost,
  CardMyInfo,
  ProfileIntroduce,
  ProfileNickName,
  ProfilePostCount,
} from "../../../styles/User/MyPageStyle";
import { HeadingTwo } from "../../../styles/CommonStyle";

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
          <HeadingTwo>내가 작성한 게시글</HeadingTwo>
          <CardLikeCountBox>
            <ProfilePostCount>3</ProfilePostCount>
          </CardLikeCountBox>
        </CardLikePost>
        <CardLikePost>
          <HeadingTwo>내가 좋아한 게시글</HeadingTwo>
          <CardLikeCountBox>
            <ProfilePostCount>3</ProfilePostCount>
          </CardLikeCountBox>
        </CardLikePost>
        <CardLikePost>
          <HeadingTwo>내 글을 좋아한 사람들</HeadingTwo>
          <CardLikeCountBox>
            <ProfilePostCount>3</ProfilePostCount>
          </CardLikeCountBox>
        </CardLikePost>
      </CardMyInfo>
    </CardContent>
  );
}

export default UserInfomation;
