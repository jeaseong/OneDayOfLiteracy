import React, { useState } from "react";
import { useUpdateComment } from "queries/commentQuery";
import {
  WriteComment,
  InputBox,
  InputComment,
  CommentBtn,
} from "styles/Comment/CommentStyle";

export default function CommentEditForm({
  prev,
  commentId,
  postId,
  setIsEdit,
}) {
  const [curComment, setCurComment] = useState(prev);
  const updateComment = useUpdateComment(postId);

  const onSubmitComment = (e) => {
    e.preventDefault();
    try {
      updateComment.mutate({ commentId, curComment });
      setIsEdit(false);
    } catch (e) {
      console.log("에러처리를 어떻게 하지");
    }
  };
  return (
    <WriteComment onSubmit={onSubmitComment}>
      <InputBox>
        <InputComment
          type="text"
          value={curComment}
          onChange={(e) => setCurComment((cur) => e.target.value)}
          required
        />
      </InputBox>
      <CommentBtn type="submit" onSubmit={onSubmitComment}>
        저장
      </CommentBtn>
    </WriteComment>
  );
}
