import React, { useState } from "react";
import { useQueryClient } from "react-query";
import { useUpdateComment } from "queries/commentQuery";
import {
  WriteComment,
  InputBox,
  InputComment,
  CommentBtn,
} from "styles/Comment/CommentStyle";

export default function CommentEditForm({ prev, commentId, postId }) {
  const [curComment, setCurComment] = useState(prev);
  const updateComment = useUpdateComment();

  const onSubmitComment = (e) => {
    e.preventDefault();
    updateComment.mutate(commentId, curComment, postId);
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
