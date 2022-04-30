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

const PostingHeader = forwardRef(({ isTitleEmpty, handleSubmit }, ref) => {
  //   console.log(ref);
  return (
    <>
      <PostingTitle
        type={"text"}
        placeholder={"제목을 입력하세요"}
        ref={ref}
      ></PostingTitle>
    </>
  );
});
export default PostingHeader;
