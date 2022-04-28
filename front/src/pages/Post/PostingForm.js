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

const md = `## A paragraph with *emphasis* and **strong importance**.

> 👍 A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |
`;

function PostingForm() {
  const [markdown, setMarkdown] = useState("");
  const [posting, setPosting] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await post("post", {});
    } catch (error) {
      throw new Error(error);
    }
  };

  const handleMarkdown = (e) => {
    e.preventDefault();
    setMarkdown(e.target.value);
  };

  return (
    <PostContainer>
      <form onSubmit={handleSubmit}>
        <PostingBody>
          <PostingTitle type={"text"} placeholder={"제목"}></PostingTitle>
          <PostingCategory type={"option"} placeholder={"카테고리"}>
            <option value={"none"}>없음</option>
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
          <PostingTags type={"text"} placeholder={"태그"}></PostingTags>
        </PostingBody>
      </form>
    </PostContainer>
  );
}
export default PostingForm;
