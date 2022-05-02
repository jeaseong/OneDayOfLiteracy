import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { MyPostContainer } from "../../../styles/User/ProfileStyle";
import { useGetPostList } from "../../../queries/postQuery";
import { img } from "../../../utils/imgImport";
import Loading from "../../../components/Loading";
import ErrorPage from "../../../components/ErrorPage";
import PostCard from "../../Post/PostCard";

function UserPostList() {
  const params = useParams();
  const [ref, inView] = useInView();
  const fetchURI = `posts/users/${params.userId}?`;
  const { data, status, fetchNextPage, isFetchingNextPage } =
    useGetPostList(fetchURI);

  useEffect(() => {
    if (inView) fetchNextPage();
  }, [inView]);

  if (status === "loading") return <Loading />;
  if (status === "error") return <ErrorPage />;

  return (
    <>
      <MyPostContainer>
        <img src={img.notPost} alt="notPost" />
        {data.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.posts.map((post, index) => (
              <PostCard key={index} post={post} />
            ))}
          </React.Fragment>
        ))}
      </MyPostContainer>
      {isFetchingNextPage ? <Loading /> : <div ref={ref}></div>}
    </>
  );
}

export default UserPostList;
