import {
  CardContent,
  CardIntroduce,
  CardLikeCountBox,
  CardLikePost,
  CardMyInfo,
  ProfileIntroduce,
  ProfileNickName,
  ProfilePostCount,
} from "../../../styles/User/ProfileStyle";
import { HeadingTwo } from "../../../styles/CommonStyle";
import { LABEL } from "../../../utils/constants";
import { useGetProfileUser } from "../../../queries/userQuery";
import { useGetUserPostList } from "../../../queries/postQuery";
import { useParams } from "react-router-dom";

/**
 * 프로필 정보 컴포넌트입니다.
 * @returns {JSX.Element}
 * @constructor
 */
function UserInfomation() {
  const params = useParams();
  const { userProfile } = useGetProfileUser(params.userId);
  const { userPosts } = useGetUserPostList(params.userId);

  return (
    <CardContent>
      <CardIntroduce>
        <ProfileNickName>{userProfile.nickname}</ProfileNickName> &nbsp;
        <ProfileIntroduce>{userProfile.introduce}</ProfileIntroduce>
      </CardIntroduce>
      <CardMyInfo>
        <CardLikePost>
          <HeadingTwo>{LABEL.USER_POST}</HeadingTwo>
          <CardLikeCountBox>
            <ProfilePostCount>{userPosts.length}</ProfilePostCount>
          </CardLikeCountBox>
        </CardLikePost>
        <CardLikePost>
          <HeadingTwo>{LABEL.USER_LIKE_POST}</HeadingTwo>
          <CardLikeCountBox>
            <ProfilePostCount>{userProfile.postLikes.length}</ProfilePostCount>
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
