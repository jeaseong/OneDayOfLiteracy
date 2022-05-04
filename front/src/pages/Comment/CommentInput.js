import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQueryClient } from "react-query";
import { usePostComment } from "queries/commentQuery";
import {
  WriteComment,
  InputBox,
  InputComment,
  CommentBtn,
  Profile,
  FocusInput,
} from "styles/Comment/CommentStyle";
export default function CommentInput({ parentId = null }) {
  const params = useParams();
  const queryClient = useQueryClient();
  const postComment = usePostComment();
  const [curComment, setCurComment] = useState("");
  const { userState } = queryClient.getQueryData("userState");
  // postId를 얻어야하지 않겠어?
  const onChangeWriteComment = (e) => {
    setCurComment((cur) => e.target.value);
  };
  const onSubmiComment = async (e) => {
    e.preventDefault();
    const comment = {
      postId: params.postId,
      content: curComment,
      author: userState.nickname,
      userId: userState.id,
      parentId: parentId,
    };
    postComment.mutate(comment);
    setCurComment("");
  };
  return (
    <WriteComment onSubmit={onSubmiComment}>
      <Profile />
      <InputBox>
        <InputComment
          type="text"
          value={curComment}
          required
          onChange={onChangeWriteComment}
        />
        <FocusInput />
      </InputBox>
      <CommentBtn type="submit" onSubmit={onSubmiComment}>
        댓글
      </CommentBtn>
    </WriteComment>
  );
}
