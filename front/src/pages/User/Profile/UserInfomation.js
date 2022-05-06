import { useParams } from "react-router-dom";
import { useQueryClient } from "react-query";
import {
  CardContent,
  CardIntroduce,
  ProfileIntroduce,
  UserLevelImg,
  ProfileNickName,
  ProfileTitleBox,
} from "styles/User/UserInfoStyle";

import { img } from "utils/imgImport";

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
  const { nickname, level, introduce } = userProfile;

  return (
    <CardContent>
      <CardIntroduce>
        <ProfileTitleBox>
          <UserLevelImg src={img.level[level]} alt="level" />
          <ProfileNickName>{nickname}</ProfileNickName>
        </ProfileTitleBox>
        <ProfileIntroduce>{introduce}</ProfileIntroduce>
      </CardIntroduce>
    </CardContent>
  );
}

export default UserInfomation;
