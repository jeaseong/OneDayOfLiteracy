import styled, { keyframes } from "styled-components";
import { img } from "utils/imgImport";

const inputAnimation = keyframes`
 0%{
  width: 0;
 }
 100% {
    width: 100%;
 }
  
`;

export const CommentContainer = styled.section`
  padding: 0 20px;
  margin: 0 auto;
`;

export const WriteComment = styled.form`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;
export const InputBox = styled.div`
  width: 70%;
  position: relative;
`;

export const InputComment = styled.input`
  width: 100%;
  border: 0;
  border-bottom: 2px solid gray;
  outline: 0;
  font-size: 1.3rem;
  margin: 10px 0 10px 7px;
  padding: 7px 0;
  background: transparent;
  transition: all 0.5s;
  &:focus {
    animation: ${inputAnimation} 0.5s ease-in-out;
  }
`;

export const FocusInput = styled.div``;

export const CommentBtn = styled.button`
  padding: 10px;
  background-color: transparent;
  border: none;
`;

export const UserCommentList = styled.div``;

export const UserComment = styled.div``;

// CommentSingle

export const ReCommentBox = styled.div`
  margin-left: 56px;
`;

export const CommentBox = styled.div`
  display: flex;
  margin: 10px 0;
  padding: 5px;
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
  width: auto;
  border: none;
  background-color: transparent;
  cursor: pointer;
  text-align: left;
  color: #c4c4c4;
  transition: all 0.1s ease-in-out;
  &:hover {
    color: black;
  }
`;
