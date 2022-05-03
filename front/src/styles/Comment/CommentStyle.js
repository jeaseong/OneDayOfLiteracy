import styled from "styled-components";
import { img } from "../../utils/imgImport";

export const CommentContainer = styled.section``;

export const WriteComment = styled.form``;

export const InputComment = styled.input``;

export const CommentBtn = styled.button``;

export const UserCommentList = styled.div``;

export const UserComment = styled.div``;

// CommentSingle

export const CommentBox = styled.div`
  width: 100%;
  display: flex;
`;

export const UserThumbnail = styled.div`
  // 고정요소로 등록
  flex: none;
  margin-right: 14px;
`;

export const Profile = styled.img.attrs({
  src: img.banner1,
  alt: "user thumbnail",
})`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export const CommentContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const UserName = styled.span`
  margin-bottom: 5px;
`;

export const Comment = styled.p`
  margin-bottom: 10px;
`;

export const ReplyCommentBtn = styled.button`
  width: 30px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: #c4c4c4;
  transition: all 0.1s ease-in-out;
  &:hover {
    color: black;
  }
`;
