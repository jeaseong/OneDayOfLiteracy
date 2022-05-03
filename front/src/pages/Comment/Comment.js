import React, { useState } from "react";
import CommentInput from "./CommentInput";
import CommentSingle from "./CommentSingle";
import CommentReply from "./CommentReply";
import { useGetCommentList } from "../../queries/commentQuery";
import {
  CommentContainer,
  UserCommentList,
  UserComment,
} from "../../styles/Comment/CommentStyle";
export default function Comment() {
  const { data, status, fetchNextPage, isFetchingNextPage } =
    useGetCommentList();
  return (
    <CommentContainer>
      <CommentInput />
      <UserCommentList>
        <CommentSingle />
        {/* {data?.pages.map((page, i) => (
          <React.Fragment key={i}>
            {page.comments.map((comment, k) => (
              <>
                <CommentSingle comment={comment} />
                <CommentReply />
              </>
            ))}
          </React.Fragment>
        ))} */}
      </UserCommentList>
    </CommentContainer>
  );
}
