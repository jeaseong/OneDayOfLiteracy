import { useParams, Link } from "react-router-dom";
import { useQueryClient } from "react-query";
import {
  CardContent,
  CardLikeCountBox,
  CardLikePost,
  CardMyInfo,
  ProfilePostCount,
  ProfilecurExp,
  ProfileExp,
} from "styles/User/UserInfoStyle";
import { HeadingTwo } from "styles/Components/CommonStyle";
import { LABEL } from "utils/constants";

/**
 * 프로필 정보 컴포넌트입니다.
 * @returns {JSX.Element}
 * @constructor
 */
function UserPostInfo() {
  const params = useParams();
  const userId = params.userId;
  const queryClient = useQueryClient();

  const userProfile = queryClient.getQueryData(["user", userId]);
  const { posts, postLikes, curExp, maxExp } = userProfile;

  return (
    <CardContent>
      <CardMyInfo>
        <CardLikePost>
          <HeadingTwo>{LABEL.USER_EXP}</HeadingTwo>
          <CardLikeCountBox>
            <ProfilePostCount>
              <ProfilecurExp>
                {curExp} / {maxExp}
              </ProfilecurExp>
              {/* <ProfileExp value={curExp} max={maxExp} /> */}
            </ProfilePostCount>
          </CardLikeCountBox>
        </CardLikePost>
        <CardLikePost>
          <HeadingTwo>{LABEL.USER_POST}</HeadingTwo>
          <CardLikeCountBox>
            <Link to={window.location.pathname}>
              <ProfilePostCount>{posts}</ProfilePostCount>
            </Link>
          </CardLikeCountBox>
        </CardLikePost>
        <CardLikePost>
          <HeadingTwo>{LABEL.USER_LIKE_POST}</HeadingTwo>
          <CardLikeCountBox>
            <Link to={window.location.pathname + "?likes"}>
              <ProfilePostCount>{postLikes.length}</ProfilePostCount>
            </Link>
          </CardLikeCountBox>
        </CardLikePost>
      </CardMyInfo>
    </CardContent>
  );
}

export default UserPostInfo;
