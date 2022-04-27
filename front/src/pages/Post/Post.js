import React, { useState, useEffect, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { get } from "../../utils/api";
import PostCard from "./PostCard";
import { PostContainer } from "../../styles/PostStyle";

function Post() {
  const [post, setPost] = useState([]);
  const navigate = useNavigate();
  const postId = useParams();
  const getPostData = useCallback(async () => {
    const result = await get("posts", postId.id);
    console.log("aaaaaaaaaaaaaaaaaaaaa", postId);
    setPost(result.data);
  }, []);
  useEffect(() => {
    getPostData();
  }, []);
  return <PostContainer>hello</PostContainer>;
}
export default Post;
