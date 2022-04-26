import React from "react";
import PostCard from "./PostCard";
import { PostContainer } from "../../styles/PostStyle";

function PostList() {
  return (
    <PostContainer>
      <PostCard></PostCard>
      <PostCard></PostCard>
      <PostCard></PostCard>
      <PostCard></PostCard>
    </PostContainer>
  );
}
export default PostList;
