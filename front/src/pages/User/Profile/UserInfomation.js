import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useQueryClient } from "react-query";
import { useUserLevelUp } from "queries/levelQuery";
import {
  CardContent,
  CardIntroduce,
  CardLikeCountBox,
  CardLikePost,
  CardMyInfo,
  LevelImg,
  ProfileIntroduce,
  ProfileNickName,
  ProfilePostCount,
  ProfileTitleBox,
} from "styles/User/ProfileStyle";
import { HeadingTwo } from "styles/Components/CommonStyle";
import { LABEL } from "utils/constants";
import { img } from "utils/imgImport";
import { checkUserExpPercent } from "utils/level";

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

  useEffect(() => {
    if (point >= maxExp) handleLevelUp.mutate();
  }, []);

  return (
    <CardContent>
      <CardIntroduce>
        <ProfileTitleBox>
          <LevelImg src={img.level[level]} alt="level" /> &nbsp;
          <ProfileNickName>{nickname}</ProfileNickName>
        </ProfileTitleBox>
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
