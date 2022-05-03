import React from "react";
import {
  CommentBox,
  UserThumbnail,
  Profile,
  CommentContent,
  UserName,
  Comment,
  ReplyCommentBtn,
} from "../../styles/Comment/CommentStyle";

export default function CommentSingle({ comment }) {
  return (
    <CommentBox>
      <UserThumbnail>
        <Profile />
      </UserThumbnail>
      <CommentContent>
        <UserName>박재성</UserName>
        <Comment>이거 댓글이 너무 멋집니다!</Comment>
        <ReplyCommentBtn>답글</ReplyCommentBtn>
      </CommentContent>
    </CommentBox>
  );
}
