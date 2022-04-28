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

function PostingContents() {
  const [markdown, setMarkdown] = useState("");
  const handleMarkdown = (e) => {
    e.preventDefault();
    setMarkdown(e.target.value);
  };
  return (
    <>
      <PostingCategory type={"option"} placeholder={"카테고리"}>
        <option value={"none"}>Category</option>
        <option value={"자기소개"}>자기소개</option>
        <option value={"시"}>시</option>
        <option value={"소설"}>소설</option>
        <option value={"에세이"}>에세이</option>
      </PostingCategory>
      <PostingContent>
        <PostingArea onChange={handleMarkdown}></PostingArea>
        <ReactMarkdown
          children={markdown}
          className={"markdown"}
        ></ReactMarkdown>
      </PostingContent>
    </>
  );
}
export default PostingContents;
