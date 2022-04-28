import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Posts,
  PostsImage,
  PostsSummary,
  PostsHeader,
  PostsTitle,
  PostsWriter,
  PostsContent,
  Tag,
  PostsLike,
} from "../../styles/PostStyle";
import Icon from "@mui/material/Icon";

function PostCard({ userId, post }) {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate(`/posts/${post.id}`);
  };
  return (
    <Posts onClick={handleOnClick}>
      <PostsImage
        alt="게시글 사진"
        src={
          post.imageUrls
            ? post.imageUrls[0]
            : "https://images.unsplash.com/photo-1532362996300-fbce5a30bd6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
        }
      />
      <PostsSummary>
        <PostsHeader>
          <PostsTitle>{post.title}</PostsTitle>
          <PostsWriter>{post.userId.slice(0, 6)}</PostsWriter>
        </PostsHeader>
        <PostsContent>{post.content}</PostsContent>
        {post.tags?.map((tag, index) => {
          return <Tag key={index}>#{tag}</Tag>;
        })}
        <PostsLike>
          <Icon baseClassName="fas" className="fa-solid fa-heart" />
        </PostsLike>
      </PostsSummary>
    </Posts>
  );
}
export default PostCard;
