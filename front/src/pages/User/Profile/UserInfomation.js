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
import { useParams, Link } from "react-router-dom";
import { useQueryClient } from "react-query";

/**
 * 프로필 정보 컴포넌트입니다.
 * @returns {JSX.Element}
 * @constructor
 */
function UserInfomation() {
  const params = useParams();
  const queryClient = useQueryClient();
  const userProfile = queryClient.getQueryData(["user", params.userId]);

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
            <Link to={window.location.pathname}>
              <ProfilePostCount>{userProfile.posts}</ProfilePostCount>
            </Link>
          </CardLikeCountBox>
        </CardLikePost>
        <CardLikePost>
          <HeadingTwo>{LABEL.USER_LIKE_POST}</HeadingTwo>
          <CardLikeCountBox>
            <Link to={window.location.pathname + "?likes"}>
              <ProfilePostCount>
                {userProfile.postLikes.length}
              </ProfilePostCount>
            </Link>
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
