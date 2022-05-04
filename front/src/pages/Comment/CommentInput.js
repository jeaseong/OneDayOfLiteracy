import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQueryClient } from "react-query";
import {
  WriteComment,
  InputBox,
  InputComment,
  CommentBtn,
  Profile,
  FocusInput,
} from "styles/Comment/CommentStyle";
import { post } from "utils/api";
export default function CommentInput({ parentId = null }) {
  const postId = useParams();
  const queryClient = useQueryClient();
  const [curComment, setCurComment] = useState("");
  const { userState } = queryClient.getQueryData("userState");
  // postId를 얻어야하지 않겠어?
  const onChangeWriteComment = (e) => {
    setCurComment((cur) => e.target.value);
  };
  const onSubmiComment = async (e) => {
    e.preventDefault();
    const comment = {
      postId: postId,
      content: curComment,
      author: userState.nickname,
      userId: userState.id,
      parentId: parentId,
    };
    try {
      await post("comments", comment);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <WriteComment onSubmit={onSubmiComment}>
      <Profile />
      <InputBox>
        <InputComment
          type="text"
          value={curComment}
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
