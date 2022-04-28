import styled from "styled-components";

export const PostingBody = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PostingTitle = styled.input`
  padding: 20px;
  border: none;
  border-radius: 5px;
  margin: 10px;
  width: 50%;
  font-size: 30px;
  background-color: #eaf3f5;
`;

export const PostingCategory = styled.select`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #c48f5a;
  margin: 10px;
  width: 50%;
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
`;

export const PostingTags = styled.input`
  padding: 10px;
  border: none;
  border-radius: 5px;
  margin: 10px;
  width: 50%;
`;
