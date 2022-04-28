import styled from "styled-components";

export const WordTrainingContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const WordSuggestion = styled.h3``;

export const WordMeaning = styled.p``;

export const ProgressBox = styled.div``;

export const ProgressBar = styled.div``;

export const ShowAnswerBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #445656;
  border-radius: 30px;
  color: #445656;
  background-color: none;
  padding: 6px 12px;
  text-align: center;
`;

export const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Btn = styled.button`
  border: none;
  background: none;
  color: #c48f5a;
  font-size: 20px;
`;

export const PrevBtn = styled(Btn)``;
export const NextBtn = styled(Btn)``;
