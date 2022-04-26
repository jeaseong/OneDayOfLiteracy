import React from "react";
import {
  Post,
  PostImage,
  PostSummary,
  PostHeader,
  PostContent,
  Tag,
} from "../../styles/PostStyle";

function PostCard() {
  return (
    <Post>
      <PostImage
        alt="게시글 사진"
        src="https://images.unsplash.com/photo-1593191798143-7f98dc35a98a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
      />
      <PostSummary>
        <PostHeader>게시글 제목</PostHeader>
        <PostContent>
          게시글 요약 내용게시글 요약 내용게시글 요약 내용게시글 요약 내용게시글
          요약 내용게시글 요약 내용
        </PostContent>
        <Tag>#Step1</Tag>
        <Tag>#Step1</Tag>
        <Tag>#Step1</Tag>
      </PostSummary>
    </Post>
  );
}
export default PostCard;
