import React, { useState, forwardRef } from "react";
import ReactMarkdown from "react-markdown";
import {
  PostingContent,
  PostingArea,
  PostingMessage,
} from "../../styles/PostingStyle";
import "../../styles/markdown.css";

const PostingContents = forwardRef(({}, ref) => {
  const [markdown, setMarkdown] = useState("");
  const handleChangeMarkdown = (e) => {
    e.preventDefault();
    setMarkdown(e.target.value);
    ref.current.style.height = "inherit";
    ref.current.style.height = ref.current?.scrollHeight + "px";
  };
  const isContentEmpty = ref.current?.value.length === 0;

  return (
    <>
      <PostingContent>
        <PostingArea
          placeholder="내용을 입력해주세요"
          ref={ref}
          onChange={handleChangeMarkdown}
          isContentEmpty={isContentEmpty}
        ></PostingArea>
        <ReactMarkdown
          children={markdown}
          className={"markdown"}
        ></ReactMarkdown>
      </PostingContent>
      {isContentEmpty && <PostingMessage>내용을 입력해주세요.</PostingMessage>}
    </>
  );
});
export default PostingContents;
