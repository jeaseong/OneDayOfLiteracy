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
import { LABEL } from "../../../utils/constants";

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
          <HeadingTwo>{LABEL.USER_POST}</HeadingTwo>
          <CardLikeCountBox>
            <ProfilePostCount>3</ProfilePostCount>
          </CardLikeCountBox>
        </CardLikePost>
        <CardLikePost>
          <HeadingTwo>{LABEL.USER_LIKE_POST}</HeadingTwo>
          <CardLikeCountBox>
            <ProfilePostCount>3</ProfilePostCount>
          </CardLikeCountBox>
        </CardLikePost>
        <CardLikePost>
          <HeadingTwo>{LABEL.USER_LIKE_COUNT}</HeadingTwo>
          <CardLikeCountBox>
            <ProfilePostCount>3</ProfilePostCount>
          </CardLikeCountBox>
        </CardLikePost>
      </CardMyInfo>
    </CardContent>
  );
}

export default UserInfomation;
