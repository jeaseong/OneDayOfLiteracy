import React from "react";
import {
  Post,
  PostImage,
  PostSummary,
  PostHeader,
  PostContent,
  Tag,
} from "../../styles/PostStyle";

function PostCard({ userId, title, content, tags, image }) {
  return (
    <Post>
      <PostImage alt="게시글 사진" src={image} />
      <PostSummary>
        <PostHeader>{title}</PostHeader>
        <PostContent>{content}</PostContent>
        {tags?.map((tag) => {
          return <Tag>#{tag}</Tag>;
        })}
      </PostSummary>
    </Post>
  );
}
export default PostCard;
