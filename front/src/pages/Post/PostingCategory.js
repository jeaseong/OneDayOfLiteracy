import React, { useState, forwardRef } from "react";
import {
  PostingCategoryBox,
  PostingMessage,
} from "../../styles/Posts/PostingStyle";
import "../../styles/Posts/markdown.css";

const PostingCategory = forwardRef(({}, ref) => {
  const isCategoryEmpty = ref.current?.value.length === 0;

  return (
    <>
      <PostingCategoryBox
        ref={ref}
        isCategoryEmpty={isCategoryEmpty}
        type={"option"}
        placeholder={"카테고리"}
        // onChange={(e) => setIsCategoryEmpty(() => !e.target.value)}
      >
        <option value={""}>Category</option>
        <option value={"시"}>시</option>
        <option value={"소설"}>소설</option>
        <option value={"산문"}>산문</option>
        <option value={"etc"}>etc</option>
      </PostingCategoryBox>
      {isCategoryEmpty && (
        <PostingMessage>카테고리를 선택해주세요.</PostingMessage>
      )}
    </>
  );
});
export default PostingCategory;
