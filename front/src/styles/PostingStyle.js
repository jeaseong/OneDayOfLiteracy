import styled, { css } from "styled-components";

export const PostingBody = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PostingTitle = styled.input`
  padding: 20px;
  border: none;
  border-radius: 10px;
  margin: 10px;
  width: 50%;
  font-size: 30px;
  background-color: #dcd0c8;
  display: block;
  ${(props) => (props.isTitleEmpty ? focusInput : "outline : none")};
  @media only screen and (max-width: 500px) {
    font-size: 20px;
  }
`;

const focusInput = css`
  outline: 3px solid #c48f5a;
  transition: 0.2s ease-in-out;
`;

export const PostingCategoryBox = styled.select`
  padding: 10px;
  border-radius: 5px;
  border: none;
  ${(props) => (props.isCategoryEmpty === "" ? focusInput : "outline : none")};
  margin: 10px;
  width: 30%;
  @media only screen and (max-width: 400px) {
    font-size: 13px;
  }
`;

export const PostingContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: auto;
  padding: 10px;
  @media only screen and (max-width: 400px) {
    padding: 0;
  }
`;

export const PostingArea = styled.textarea`
  width: 100%;
  min-height: 30vh;
  border: none;
  margin-right: 20px;
  border-radius: 5px;
  padding: 20px;
  line-height: 1.7;
  overflow: hidden;
  resize: none;
  ${(props) => (props.isContentEmpty ? focusInput : "outline : none")};
  @media only screen and (max-width: 400px) {
    margin-right: 0;
  }
`;

export const PostingTags = styled.input`
  padding: 10px;
  border: none;
  border-radius: 5px;
  margin: 10px;
  width: auto;
  display: inline-flex;
  background-color: #dcd0c8;
  outline: none;
  cursor: text;

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
  margin-top: 20px;
  &:hover {
    cursor: pointer;
  }
  &:active {
    opacity: 0.7;
    transition: 0.1s ease-in-out;
  }
`;

export const PostingTitleBox = styled.div`
  display: flex;
  align-items: center;
`;

export const PostingMessage = styled.span`
  font-size: 14px;
  color: #d1985f;
  margin-left: 10px;
  @media only screen and (max-width: 400px) {
    display: none;
  }
`;
