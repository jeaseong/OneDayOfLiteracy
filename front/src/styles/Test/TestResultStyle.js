import styled from "styled-components";
import { FlexBoxCenter } from "styles/Components/CommonStyle";

export const TestResultContainer = styled(FlexBoxCenter)`
  width: 100%;
  height: 30vh;
  flex-direction: column;
  text-align: center;
  line-height: 1.5;
`;

export const TestResultWrap = styled.div``;

export const TestResultUserName = styled.h2`
  text-align: left;
  margin-bottom: 10px;
`;

export const TestResultUserScore = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const TestResultUserRecommand = styled.p`
  word-break: break-all;
  white-space: pre-wrap;
  font-size: 16px;
  margin-bottom: 20px;
`;

export const TestResultNavBtn = styled.button`
  border: none;
  background: none;
  display: flex;
  align-items: center;
  margin: 0 auto;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #c48f5a;
    transform: scale(1.1);
  }
`;

export const Hilight = styled.mark`
  font-weight: bold;
  background: none;
  color: #c48f5a;
  font-size: 24px;
`;
