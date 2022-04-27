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
        console.log(posts);
      } catch (error) {
        throw new Error(error);
      }
    };
    getPosts();
  }, []);
  return (
    <PostContainer>
      {posts?.map((post, index) => {
        return <PostCard key={index} post={post} />;
      })}
    </PostContainer>
  );
}
export default Posts;
