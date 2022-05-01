import React, { useState, useRef, forwardRef } from "react";
import { PostingCategoryBox, PostingMessage } from "../../styles/PostingStyle";
import "../../styles/markdown.css";

const PostingCategory = forwardRef(
  ({ isCategoryEmpty, setIsCategoryEmpty }, ref) => {
    return (
      <>
        <PostingCategoryBox
          ref={ref}
          isCategoryEmpty={isCategoryEmpty}
          type={"option"}
          placeholder={"카테고리"}
          onChange={(e) => setIsCategoryEmpty(() => e.target.value)}
        >
          <option value={""}>Category</option>
          <option value={"자기소개"}>자기소개</option>
          <option value={"시"}>시</option>
          <option value={"소설"}>소설</option>
          <option value={"에세이"}>에세이</option>
          <option value={"etc"}>etc</option>
        </PostingCategoryBox>
        {isCategoryEmpty === "" && (
          <PostingMessage>카테고리를 선택해주세요.</PostingMessage>
        )}
      </>
    );
  }
);
export default PostingCategory;
