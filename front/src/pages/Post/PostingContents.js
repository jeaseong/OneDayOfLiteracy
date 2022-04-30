import React, { useState, useRef, forwardRef } from "react";
import { post } from "../../utils/api";
import ReactMarkdown from "react-markdown";
import {
  PostingCategory,
  PostingContent,
  PostingArea,
  PostingMessage,
} from "../../styles/PostingStyle";
import "../../styles/markdown.css";

const PostingContents = forwardRef(
  (
    { isContentEmpty, isCategoryEmpty, setIsCategoryEmpty, setIsContentEmpty },
    ref
  ) => {
    const [markdown, setMarkdown] = useState("");
    const handleMarkdown = (e) => {
      e.preventDefault();
      setIsContentEmpty(() => !e.target.value);
      setMarkdown(e.target.value);
    };
    return (
      <>
        <PostingCategory
          ref={ref.categoryRef}
          isCategoryEmpty={isCategoryEmpty}
          type={"option"}
          placeholder={"카테고리"}
          onChange={(e) => setIsCategoryEmpty(e.target.value)}
        >
          <option value={""}>Category</option>
          <option value={"자기소개"}>자기소개</option>
          <option value={"시"}>시</option>
          <option value={"소설"}>소설</option>
          <option value={"에세이"}>에세이</option>
          <option value={"etc"}>etc</option>
        </PostingCategory>
        {isCategoryEmpty === "" && (
          <PostingMessage>카테고리를 선택해주세요.</PostingMessage>
        )}
        <PostingContent>
          <PostingArea
            placeholder="내용을 입력해주세요"
            isContentEmpty={isContentEmpty}
            ref={ref.contentRef}
            onChange={handleMarkdown}
          ></PostingArea>
          <ReactMarkdown
            children={markdown}
            className={"markdown"}
          ></ReactMarkdown>
        </PostingContent>
        {isContentEmpty && (
          <PostingMessage>내용을 입력해주세요.</PostingMessage>
        )}
      </>
    );
  }
);
export default PostingContents;
