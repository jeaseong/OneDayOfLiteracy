import React, { useState, forwardRef } from "react";
import {
  PostingTitle,
  PostingTitleBox,
  PostingMessage,
} from "../../styles/PostingStyle";
import "../../styles/markdown.css";

const PostingHeader = forwardRef(({ isTitleEmpty, setIsTitleEmpty }, ref) => {
  return (
    <PostingTitleBox>
      <PostingTitle
        onChange={(e) => setIsTitleEmpty(() => !e.target.value)}
        isTitleEmpty={isTitleEmpty}
        type={"text"}
        placeholder={"제목을 입력하세요"}
        ref={ref}
      />
      {isTitleEmpty && <PostingMessage>제목을 입력해주세요.</PostingMessage>}
    </PostingTitleBox>
  );
});
export default PostingHeader;
