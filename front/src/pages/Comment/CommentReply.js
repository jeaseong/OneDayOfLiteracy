import React, { useState, useEffect } from "react";
import {
  ReCommentBox,
  CommentBox,
  UserThumbnail,
  Profile,
  CommentContent,
  UserName,
  Comment,
  ReplyCommentBtn,
} from "../../styles/Comment/CommentStyle";
export default function CommentRePly({ reComment = [1, 2, 3] }) {
  const [isOpenReply, setIsOpenReply] = useState(false);
  //대댓글 열기
  const onClickOpenReplyList = () => {
    setIsOpenReply((cur) => !cur);
  };

  // 댓글의 아이디가 parentId인 것을 렌더링
  return (
    <ReCommentBox>
      {reComment.length > 0 && (
        <ReplyCommentBtn onClick={onClickOpenReplyList}>
          {isOpenReply ? "▲" : "▼"} 답글 {reComment.length}개 보기
        </ReplyCommentBtn>
      )}
      {isOpenReply &&
        reComment?.map((comment, index) => (
          // key를 어떻게 할지...
          <CommentBox key={index}>
            <UserThumbnail>
              <Profile />
            </UserThumbnail>
            <CommentContent>
              <UserName>{comment.author}</UserName>
              <Comment>{comment.content}</Comment>
            </CommentContent>
          </CommentBox>
        ))}
    </ReCommentBox>
  );
}
