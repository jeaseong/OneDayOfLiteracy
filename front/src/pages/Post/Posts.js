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
  const fetchURI = location.search.substring(1);
  const { data, status, fetchNextPage } = useGetPostList(fetchURI);

  useEffect(() => {
    if (inView) fetchNextPage();
  }, [inView]);

  return (
    <>
      {status === "loading" ? (
        <Loading />
      ) : status === "error" ? (
        <ErrorPage />
      ) : (
        <PostsContainer>
          {data?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.posts.map((post, index) => (
                <PostCard key={index} post={post}></PostCard>
              ))}
            </React.Fragment>
          ))}
          <div ref={ref}></div>
        </PostsContainer>
      )}
    </>
  );
}
export default Posts;
