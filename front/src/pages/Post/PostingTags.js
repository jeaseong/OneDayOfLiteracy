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
const PostingTag = forwardRef(({ handleTagEnter, onChangeTag, tag }, ref) => {
  return (
    <div className="hashWrap">
      <div className="tagsWrapper"></div>
      <PostingTags
        className="tagsInput"
        type={"text"}
        placeholder={"태그를 입력하세요"}
        value={tag}
        onChange={onChangeTag}
        onKeyUp={handleTagEnter}
        ref={ref}
      ></PostingTags>
    </div>
  );
});
export default PostingTag;
