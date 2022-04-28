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
import { useProfileUser } from "../../../queries/userQuery";
import { useParams } from "react-router-dom";
import { useUserPostList } from "../../../queries/postQuery";
import Loading from "../../../components/Loading";

function UserInfomation() {
  const params = useParams();
  const { userProfile } = useProfileUser(params.userId);
  const { userPosts, isFetching } = useUserPostList(params.userId);

  if (isFetching) return <Loading />;

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
