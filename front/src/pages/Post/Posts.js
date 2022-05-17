import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import PostCard from "pages/Post/PostCard";
import { PostsContainer } from "styles/Posts/PostStyle";
import { useGetPostList } from "queries/postQuery";
import Loading from "components/Loading";
import ErrorPage from "components/ErrorPage";
import { useQueryClient } from "react-query";
import { useGetProfileOwner } from "queries/userQuery";
import PostFilter from "pages/Post/PostFilter";
import SearchContent from "components/Search/SearchContent";

function Posts() {
  const location = useLocation();
  const { ref, inView } = useInView();
  const queryClient = useQueryClient();

  const { userState, isLogin } = queryClient.getQueryData("userState");
  useGetProfileOwner(userState._id);
  const fetchURI = `posts?${location.search.substring(1)}&`;
  const { data, status, fetchNextPage, isFetchingNextPage } =
    useGetPostList(fetchURI);

  useEffect(() => {
    if (inView) fetchNextPage();
  }, [inView]);

  if (status === "loading") return <Loading />;
  if (status === "error") return <ErrorPage />;

  return (
    <>
      <SearchContent />
      <PostFilter />
      <PostsContainer>
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.posts.map((post) => (
              <PostCard
                userInfo={userState}
                isDisabled={isLogin}
                key={post._id}
                post={post}
              ></PostCard>
            ))}
          </React.Fragment>
        ))}
      </PostsContainer>
      {isFetchingNextPage ? <Loading /> : <div ref={ref}></div>}
    </>
  );
}
export default Posts;
