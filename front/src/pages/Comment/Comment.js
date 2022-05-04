import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import CommentInput from "pages/Comment/CommentInput";
import CommentSingle from "pages/Comment/CommentSingle";
import CommentReply from "pages/Comment/CommentReply";
import { useGetCommentList } from "queries/commentQuery";
import { CommentContainer, UserCommentList } from "styles/Comment/CommentStyle";
export default function Comment() {
  const { data, status, fetchNextPage, isFetchingNextPage } =
    useGetCommentList();

  return (
    <CommentContainer>
      <CommentInput />
      <UserCommentList>
        <CommentSingle />
        <CommentReply />
        {/* {data?.pages.map((page, i) => (
          <React.Fragment key={i}>
            {page.comments.map((comment, k) => (
              <>
                <CommentSingle comment={comment} />
                {comment.reply.length > 0 && <CommentReply reComment={comment.reply} />}
                
              </>
            ))}
          </React.Fragment>
        ))} */}
      </UserCommentList>
    </CommentContainer>
  );
}
