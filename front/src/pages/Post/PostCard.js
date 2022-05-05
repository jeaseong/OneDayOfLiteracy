import React from "react";
import { Link } from "react-router-dom";
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
  LikeButton,
} from "../../styles/Posts/PostStyle";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { usePostLikeAdd, usePostDislike } from "../../queries/postQuery";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const defaultImage =
  "https://images.unsplash.com/photo-1532362996300-fbce5a30bd6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80";

function PostCard({ userInfo, isDisabled, post }) {
  const postAddLike = usePostLikeAdd(post._id, userInfo._id);
  const postDislike = usePostDislike(post._id, userInfo._id);
  const isPostLike = userInfo.postLikes.includes(post._id);

  const handlePostLikeOnClick = () => postAddLike.mutate();
  const handlePostDisLikeOnClick = () => postDislike.mutate();

  const postLikeList = isPostLike ? (
    <LikeButton disabled={!isDisabled} onClick={handlePostDisLikeOnClick}>
      <ThumbUpIcon />
    </LikeButton>
  ) : (
    <LikeButton disabled={!isDisabled} onClick={handlePostLikeOnClick}>
      <ThumbUpIcon color="disabled" />
    </LikeButton>
  );

  return (
    <Posts>
      <PostsImage
        alt="게시글 사진"
        src={post.imageUrls?.length ? post.imageUrls[0] : defaultImage}
      />
      <PostsSummary>
        <PostsHeader>
          <Link to={`/posts/${post._id}`}>
            <PostsTitle>{post.title}</PostsTitle>
          </Link>
          <PostsWriter>
            <Link to={`/user/${post.userId}`}>
              {!post.author ? "익명 문하생" : post.author}
            </Link>
          </PostsWriter>
        </PostsHeader>
        <ReactMarkdown
          children={post.content.slice(0, 90)}
          remarkPlugins={[remarkGfm]}
        ></ReactMarkdown>
        {post.tags?.map((tag, index) => (
          <Link to={`/posts?tag=${tag}`} key={index}>
            <Tag>#{tag}</Tag>
          </Link>
        ))}
        <PostsLike>{postLikeList}</PostsLike> {post.likeCount}
      </PostsSummary>
    </Posts>
  );
}

export default PostCard;
