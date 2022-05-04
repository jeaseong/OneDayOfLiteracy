import React, { useState } from "react";
import CommentInput from "./CommentInput";
import {
  CommentBox,
  UserThumbnail,
  Profile,
  CommentContent,
  UserName,
  Comment,
  ReplyCommentBtn,
} from "styles/Comment/CommentStyle";

export default function CommentSingle({ comment }) {
  const [isOpenReply, setIsOpenReply] = useState(false);

  const onClickOpenReplyInput = () => {
    setIsOpenReply((cur) => !cur);
  };
  return (
    <CommentBox>
      <UserThumbnail>
        <Profile />
      </UserThumbnail>
      <CommentContent>
        <UserName>박재성</UserName>
        <Comment>이거 댓글이 너무 멋집니다!</Comment>
        <ReplyCommentBtn onClick={onClickOpenReplyInput}>답글</ReplyCommentBtn>
        {isOpenReply && <CommentInput parentId={1} />}
      </CommentContent>
    </CommentBox>
  );
}
