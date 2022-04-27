import React from "react";
import { useNavigate } from "react-router-dom";

import {
  Post,
  PostImage,
  PostSummary,
  PostHeader,
  PostContent,
  Tag,
} from "../../styles/PostStyle";

function PostCard({ userId, post }) {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate(`/posts/${post.id}`);
  };
  return (
    <Post onClick={handleOnClick}>
      <PostImage
        alt="게시글 사진"
        src={
          post.imageUrls
            ? post.imageUrls[0]
            : "https://images.unsplash.com/photo-1532362996300-fbce5a30bd6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
        }
      />
      <PostSummary>
        <PostHeader>{post.title}</PostHeader>
        <PostContent>{post.content}</PostContent>
        {post.tags?.map((tag) => {
          return <Tag>#{tag}</Tag>;
        })}
      </PostSummary>
    </Post>
  );
}
export default PostCard;
