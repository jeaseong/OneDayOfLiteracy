import React, { useState, useEffect } from "react";
import CommentSingle from "./CommentSingle";
import {
  CommentBox,
  UserThumbnail,
  Profile,
  CommentContent,
  UserName,
  Comment,
  ReplyCommentBtn,
} from "../../styles/Comment/CommentStyle";
export default function CommentRePly({ comment }) {
  const [isOpenReply, setIsOpenReply] = useState(false);
  //대댓글 열기
  const onClickOpenReply = () => {
    setIsOpenReply((cur) => !cur);
  };

  // 댓글의 아이디가 parentId인 것을 렌더링
  return (
    <CommentBox>
      <UserThumbnail>
        <Profile />
      </UserThumbnail>
      <CommentContent>
        <UserName>박재성</UserName>
        <Comment>이거 댓글이 너무 멋집니다!</Comment>
        <ReplyCommentBtn>답글</ReplyCommentBtn>
      </CommentContent>
    </CommentBox>
  );
}
