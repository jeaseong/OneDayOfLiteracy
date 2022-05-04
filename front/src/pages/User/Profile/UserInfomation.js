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
import { HeadingTwo } from "../../../styles/Components/CommonStyle";
import { LABEL } from "../../../utils/constants";
import { useParams, Link } from "react-router-dom";
import { useQueryClient } from "react-query";
import { checkUserExpPercent } from "../../../utils/userLevel";
import { useUserLevelUp } from "../../../queries/levelQuery";

/**
 * 프로필 정보 컴포넌트입니다.
 * @returns {JSX.Element}
 * @constructor
 */
function UserInfomation() {
  const params = useParams();
  const userId = params.userId;
  const queryClient = useQueryClient();
  const userProfile = queryClient.getQueryData(["user", userId]);
  const { nickname, level, introduce, point, posts, postLikes } = userProfile;
  const { maxExp, expPercent } = checkUserExpPercent(level, point);
  const handleLevelUp = useUserLevelUp(userId, maxExp);

  if (point >= maxExp) handleLevelUp.mutate();
  console.log(localStorage.getItem("userToken"));

  return (
    <CardContent>
      <CardIntroduce>
        <ProfileNickName>
          {nickname} {level}
        </ProfileNickName>
        &nbsp;
        <ProfileIntroduce>{introduce}</ProfileIntroduce>
      </CardIntroduce>
      <CardMyInfo>
        <CardLikePost>
          <HeadingTwo>{LABEL.USER_EXP}</HeadingTwo>
          <CardLikeCountBox>
            <ProfilePostCount>
              {point} / {maxExp}
              <progress value={expPercent} max="100" />
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

export default UserInfomation;
