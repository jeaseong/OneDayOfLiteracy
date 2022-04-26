import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { get } from "../../utils/api";
import PostCard from "./PostCard";
import { PostContainer } from "../../styles/PostStyle";

function Posts() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getPosts = async () => {
      try {
        const list = await get("posts");
        setPosts([...list.data]);
      } catch (error) {
        throw new Error(error);
      }
    };
    getPosts();
  }, []);
  return (
    <PostContainer>
      {posts?.map((post) => {
        return (
          <PostCard
            key={post.id}
            userId={post.userId}
            title={post.title}
            content={post.content}
            tags={post.tags}
            image={
              post.imageUrls
                ? post.imageUrls[0]
                : "https://images.unsplash.com/photo-1532362996300-fbce5a30bd6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
            }
            onClick={() => {
              navigate("posts/:postId");
            }}
          />
        );
      })}
    </PostContainer>
  );
}
export default Posts;
