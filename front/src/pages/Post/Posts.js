import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import PostCard from "./PostCard";
import { PostsContainer } from "../../styles/PostStyle";
import { useGetPostList } from "../../queries/postQuery";
import Loading from "../../components/Loading";
import ErrorPage from "../../components/ErrorPage";

function Posts() {
  const location = useLocation();
  const { ref, inView } = useInView();
  const fetchURI = `posts?${location.search}&`;
  const { data, status, fetchNextPage, isFetchingNextPage } =
    useGetPostList(fetchURI);

  useEffect(() => {
    if (inView) fetchNextPage();
  }, [inView]);

  if (status === "loading") return <Loading />;
  if (status === "error") return <ErrorPage />;

  return (
    <>
      <PostsContainer>
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.posts.map((post, index) => (
              <PostCard key={index} post={post}></PostCard>
            ))}
          </React.Fragment>
        ))}
      </PostsContainer>
      {isFetchingNextPage ? <Loading /> : <div ref={ref}></div>}
    </>
  );
}
export default Posts;
