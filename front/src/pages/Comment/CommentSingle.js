import React, { useState } from "react";
import CommentInput from "pages/Comment/CommentInput";
import CommentEditFrom from "pages/Comment/CommentEditForm";
import { useQueryClient } from "react-query";
import { useDeleteComment } from "queries/commentQuery";
import {
  CommentBox,
  UserThumbnail,
  Profile,
  CommentContent,
  UserName,
  Comment,
  ReplyCommentBtn,
  CommentEditContainer,
  CommentEditBtn,
} from "styles/Comment/CommentStyle";

export default function CommentSingle({ comment }) {
  const [isOpenReply, setIsOpenReply] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const queryClient = useQueryClient();
  const { userState } = queryClient.getQueryData("userState");
  const deleteComment = useDeleteComment();

  const onClickOpenReplyInput = () => {
    setIsOpenReply((cur) => !cur);
  };
  const deleteSubmitComment = () => {
    deleteComment.mutate(comment);
  };
  return (
    <CommentBox>
      <UserThumbnail>
        <Profile />
      </UserThumbnail>
      <CommentContent>
        {!isEdit ? (
          <>
            <UserName>{comment.author}</UserName>
            <Comment>{comment.content}</Comment>
          </>
        ) : (
          <CommentEditFrom
            prev={comment.content}
            commentId={comment._id}
            postId={comment.postId}
          />
        )}

        <CommentEditContainer>
          <ReplyCommentBtn onClick={onClickOpenReplyInput}>
            답글
          </ReplyCommentBtn>
          {userState.id === comment.userId && (
            <>
              <CommentEditBtn onClick={() => setIsEdit((cur) => !cur)}>
                {isEdit ? "취소" : "수정"}
              </CommentEditBtn>
              <CommentEditBtn onClick={deleteSubmitComment}>
                삭제
              </CommentEditBtn>
            </>
          )}
        </CommentEditContainer>
        {isOpenReply && <CommentInput parentId={1} />}
      </CommentContent>
    </CommentBox>
  );
}
