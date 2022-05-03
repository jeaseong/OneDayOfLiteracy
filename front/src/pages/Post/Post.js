import React, { useState, useEffect, useCallback } from "react";
import { Link, useParams } from "react-router-dom";
import { get } from "../../utils/api";
import {
  PostContainer,
  PostHeader,
  PostTitle,
  PostWriter,
  PostBody,
  PostImageBox,
  PostImage,
  PostFooter,
  Tag,
  LikeButton,
} from "../../styles/Posts/PostStyle";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useQueryClient } from "react-query";
import { usePostDislike, usePostLikeAdd } from "../../queries/postQuery";

function Post() {
  const postId = useParams();
  const queryClient = useQueryClient();
  const [post, setPost] = useState([]);
  const { userState, isLogin } = queryClient.getQueryData("userState");
  const postAddLike = usePostLikeAdd(post._id, userState._id);
  const postDislike = usePostDislike(post._id, userState._id);
  const isPostLike = userState.postLikes.includes(post._id);

  const getPostData = useCallback(async () => {
    try {
      const result = await get("posts/", postId.postId);
      setPost(result?.data);
    } catch (error) {
      throw new Error(error);
    }
  }, []);

  useEffect(() => {
    getPostData();
  }, []);

  const postLikeList = isPostLike ? (
    <LikeButton disabled={!isLogin} onClick={() => postDislike.mutate()}>
      <ThumbUpIcon />
    </LikeButton>
  ) : (
    <LikeButton disabled={!isLogin} onClick={() => postAddLike.mutate()}>
      <ThumbUpIcon color="disabled" />
    </LikeButton>
  );

  return (
    <PostContainer>
      <PostTitle>{post.title}</PostTitle>
      <PostHeader>
        <Link to={`/user/${post.userId}`}>
          <PostWriter>{!post.author ? "익명 문하생" : post.author}</PostWriter>
        </Link>
        <PostWriter>{post.createdAt?.slice(0, 10)}</PostWriter>
      </PostHeader>
      <PostBody>
        <PostImageBox>
          {post.imageUrls?.map((image, index) => {
            return <PostImage key={index} src={image} />;
          })}
        </PostImageBox>
        <ReactMarkdown
          children={post.content}
          remarkPlugins={[remarkGfm]}
        ></ReactMarkdown>
      </PostBody>
      <PostFooter>
        {post.tags?.map((tag, index) => (
          <Link to={`/posts?content=${tag}`} key={index}>
            <Tag>#{tag}</Tag>
          </Link>
        ))}
      </PostFooter>
      {postLikeList}
    </PostContainer>
  );
}

export default Post;
