import React from "react";
import PostingForm from "./PostingForm";
import PostingHeader from "./PostingHeader";
import PostingContents from "./PostingContents";
import PostingTag from "./PostingTags";
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

function Posting() {
  return (
    <PostContainer>
      <form>
        <PostBody>
          <PostingHeader></PostingHeader>
          <PostingContents></PostingContents>
          <PostingTag></PostingTag>
        </PostBody>
      </form>
    </PostContainer>
  );
}
export default Posting;
