import React, { useState, forwardRef } from "react";
import { post } from "../../utils/api";
import ReactMarkdown from "react-markdown";
import { PostContainer, PostHeader, PostBody } from "../../styles/PostStyle";
import {
  PostingTitle,
  PostingCategory,
  PostingTags,
  PostingBody,
  PostingContent,
  PostingArea,
} from "../../styles/PostingStyle";
import "../../styles/markdown.css";

const PostingHeader = forwardRef(({ isTitleEmpty, setIsTitleEmpty }, ref) => {
  //   console.log(ref);
  return (
    <>
      <PostingTitle
        onChange={(e) => setIsTitleEmpty(() => !e.target.value)}
        className={isTitleEmpty && "focusInput"}
        type={"text"}
        placeholder={"제목을 입력하세요"}
        ref={ref}
      />
      {isTitleEmpty && <span>제목을 입력해주세요.</span>}
    </>
  );
});
export default PostingHeader;
