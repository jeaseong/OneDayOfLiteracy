import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useGetCommentList } from "queries/commentQuery";
import CommentInput from "pages/Comment/CommentInput";
import CommentSingle from "pages/Comment/CommentSingle";
import CommentReply from "pages/Comment/CommentReply";
import { CommentContainer, UserCommentList } from "styles/Comment/CommentStyle";
import Loading from "components/Loading";
import ErrorPage from "components/ErrorPage";
export default function Comment({ postId }) {
  const { data, status, fetchNextPage, isFetchingNextPage } =
    useGetCommentList(postId);
  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView) fetchNextPage();
  }, [inView]);

  if (status === "loading") return <Loading />;
  if (status === "error") return <ErrorPage />;

  return (
    <>
      <CommentContainer>
        <CommentInput />
        <UserCommentList>
          {data?.pages?.map((page, i) => (
            <React.Fragment key={i}>
              {page.comments?.map((comment, k) => (
                <>
                  <CommentSingle comment={comment} />
                  {comment.childComments.length > 0 && (
                    <CommentReply reComment={comment.reply} />
                  )}
                </>
              ))}
            </React.Fragment>
          ))}
        </UserCommentList>
      </CommentContainer>
      {isFetchingNextPage ? <Loading /> : <div ref={ref}></div>}
    </>
  );
}
