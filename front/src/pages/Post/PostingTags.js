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
function PostingTag() {
  return (
    <PostingTags type={"text"} placeholder={"태그를 입력하세요"}></PostingTags>
  );
}
export default PostingTag;
