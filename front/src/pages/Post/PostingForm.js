import React from "react";
import { post } from "../../utils/api";
import ReactMarkdown from "react-markdown";
import { PostContainer, PostHeader, PostBody } from "../../styles/PostStyle";
import {
  PostingTitle,
  PostingTags,
  PostingBody,
  PostingContent,
} from "../../styles/PostingStyle";

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
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await post("post", {});
    } catch (error) {
      throw new Error(error);
    }
  };
  return (
    <PostContainer>
      <form onSubmit={handleSubmit}>
        <PostHeader>
          <PostingTitle type={"text"} placeholder={"제목"}></PostingTitle>
        </PostHeader>
        <PostingBody>
          <PostingContent>
            <ReactMarkdown children={md}></ReactMarkdown>
          </PostingContent>
          <PostingContent></PostingContent>
        </PostingBody>
        <PostingTags type={"text"} placeholder={"태그"}></PostingTags>
      </form>
    </PostContainer>
  );
}
export default PostingForm;
