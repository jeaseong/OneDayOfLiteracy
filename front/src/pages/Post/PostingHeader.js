import React, { useState } from "react";
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

function PostingHeader() {
  return (
    <PostingTitle
      type={"text"}
      placeholder={"제목을 입력하세요"}
    ></PostingTitle>
  );
}
export default PostingHeader;
