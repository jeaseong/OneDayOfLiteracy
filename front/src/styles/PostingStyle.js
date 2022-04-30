import styled from "styled-components";

export const PostingBody = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PostingTitle = styled.input`
  padding: 20px;
  border: none;
  border-radius: 5px;
  outline: none;
  margin: 10px;
  width: 50%;
  font-size: 30px;
  background-color: #eaf3f5;
  display: block;
`;

export const PostingCategory = styled.select`
  padding: 10px;
  border-radius: 5px;
  border: none;
  outline: none;
  margin: 10px;
  width: 30%;
`;

export const PostingContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
`;

export const PostingArea = styled.textarea`
  width: 100%;
  height: 30vh;
  border: none;
  margin-right: 20px;
  border-radius: 5px;
  padding: 10px;
  outline: none;
`;

export const PostingTags = styled.input`
  padding: 10px;
  border: none;
  border-radius: 5px;
  margin: 10px;
  width: auto;
  display: inline-flex;
  background-color: #eaf3f5;
  outline: none;
  cursor: text;
  //   line-height: 2rem;
  margin-bottom: 0.75rem;
  min-width: 8rem;
`;

export const PostingButton = styled.button`
  background-color: #445656;
  width: 90px;
  height: 40px;
  border-radius: 30px;
  padding: 8px 16px;
  font-size: 16px;
  color: #f9f9f9;
  border: none;
  position: absolute;
  left: 45%;
  &:hover {
    cursor: pointer;
  }
  &:active {
    opacity: 0.7;
    transition: 0.1s ease-in-out;
  }
`;
