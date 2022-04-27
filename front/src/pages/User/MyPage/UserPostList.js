import {
  MyPostContainer,
  TempPostCard,
} from "../../../styles/User/MyPageStyle";
import { useUserPostList } from "../../../queries/postQuery";
import { useParams } from "react-router-dom";

function UserPostList() {
  const params = useParams();
  const { userPosts } = useUserPostList(params.userId);

  return (
    <MyPostContainer>
      <TempPostCard>asdf</TempPostCard>
      <TempPostCard>12341234</TempPostCard>
      <TempPostCard>asdfasg</TempPostCard>
    </MyPostContainer>
  );
}

export default UserPostList;
