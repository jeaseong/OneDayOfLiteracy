import { useGetPostList } from "../../queries/postQuery";
import Loading from "../../components/Loading";
import PostCard from "../Post/PostCard";
import { useQueryClient } from "react-query";
import { PopularityPostContainer } from "../../styles/Main/MainStyle";
import { LABEL } from "../../utils/constants";
import { Link } from "react-router-dom";

function PopularityPost() {
  const queryClient = useQueryClient();
  const { userState, isLogin } = queryClient.getQueryData("userState");

  const fetchURI = `posts?&sort[field]=likeCount&sort[type]=asc&`;
  const { data, isFetching } = useGetPostList(fetchURI);

  if (isFetching) return <Loading />;

  return (
    <>
      <Link to={`/${fetchURI}`}>{LABEL.GET_MORE}</Link>
      <PopularityPostContainer>
        {data.pages[0].posts.map((post) => (
          <PostCard
            key={post._id}
            userInfo={userState}
            isDisabled={isLogin}
            post={post}
          />
        ))}
      </PopularityPostContainer>
    </>
  );
}

export default PopularityPost;
