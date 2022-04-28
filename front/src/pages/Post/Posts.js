import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { get } from "../../utils/api";
import PostCard from "./PostCard";
import { PostsContainer } from "../../styles/PostStyle";

function Posts() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getPosts = async () => {
      try {
        const result = await get("posts");
        console.log(result);
        console.log(result.data);
        setPosts([...result?.data]);
      } catch (error) {
        throw new Error(error);
      }
    };
    getPosts();
  }, []);
  return (
    <PostsContainer>
      {posts?.map((post, index) => {
        return <PostCard key={index} post={post} />;
      })}
    </PostsContainer>
  );
}
export default Posts;
