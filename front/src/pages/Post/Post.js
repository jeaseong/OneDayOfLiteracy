import React, { useState, useEffect, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { get } from "../../utils/api";
import {
  PostContainer,
  PostHeader,
  PostTitle,
  PostWriter,
  PostBody,
  PostContent,
  PostImageBox,
  PostImage,
  PostFooter,
  Tag,
} from "../../styles/PostStyle";

function Post() {
  const [post, setPost] = useState([]);
  const navigate = useNavigate();
  const postId = useParams();
  const getPostData = useCallback(async () => {
    try {
      const result = await get("posts/", postId.postId);
      console.log(result.data);
      //   result 에 data있는지 확인하기
      setPost(result?.data);
    } catch (error) {
      // 안내메세지 보여주기

      throw new Error(error);
    }
  }, []);
  useEffect(() => {
    getPostData();
  }, []);
  return (
    <PostContainer>
      <PostTitle>{post.title}</PostTitle>
      <PostHeader>
        <PostWriter>{!post.author ? "익명 문하생" : post.author}</PostWriter>
        <PostWriter>{post.createdAt?.slice(0, 10)}</PostWriter>
      </PostHeader>
      <PostBody>
        <PostImageBox>
          {post.imageUrls?.map((image, index) => {
            return <PostImage key={index} src={image} />;
          })}
        </PostImageBox>
        <PostContent>{post.content}</PostContent>
      </PostBody>
      <PostFooter>
        {post.tags?.map((tag, index) => {
          return <Tag key={index}>#{tag}</Tag>;
        })}
      </PostFooter>
    </PostContainer>
  );
}
export default Post;
