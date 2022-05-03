import styled from "styled-components";

export const FlexBox = styled.div`
  display: flex;
`;

export const FlexBoxCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeadingTwo = styled.h2`
  color: #c48f5a;
`;

export const InputBox = styled.input`
  border: solid 2px #c99c6e;
  width: 50%;
  border-radius: 8px;
  height: 30px;
  margin: 1.7rem 0 0 0;
  padding: 10px;
  font-size: 1.3rem;
`;

export const Button = styled.button`
  width: 52.5%;
  height: 30px;
  background-color: #c48f5a;
  margin: 1.7rem 0 0 0;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-size: 1.2rem;
  box-shadow: 3px 3px 3px gray;
  transition-duration: 0.3s;

  &:active {
    box-shadow: none;
  }

  &:disabled {
    cursor: default;
    opacity: 0.5;
    background: var(--button-bg-color, gray);
  }
`;

export const LinkButton = styled.button`
  display: inline-block;
  appearance: none;
  background-color: transparent;
  border: none;
  color: #c48f5a;
  font-size: 1.1rem;
  margin: 1rem 0 0 0;
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }

  &:active {
    font-weight: bold;
  }
`;

export const InputFile = styled.input`
  display: none;
`;
