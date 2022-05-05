import React, { useState, useEffect, useRef } from "react";
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
  const inputRef = useRef();
  const params = useParams();
  const queryClient = useQueryClient();
  const postComment = usePostComment();
  const [curComment, setCurComment] = useState("");
  const { userState } = queryClient.getQueryData("userState");

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const onChangeWriteComment = (e) => {
    setCurComment((cur) => e.target.value);
  };
  const onSubmiComment = (e) => {
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
          onChange={onChangeWriteComment}
          ref={inputRef}
          required
        />
        <FocusInput />
      </InputBox>
      <CommentBtn type="submit" onSubmit={onSubmiComment}>
        댓글
      </CommentBtn>
    </WriteComment>
  );
}
