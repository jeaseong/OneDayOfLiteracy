import styled from "styled-components";

export const WordTrainingContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

export const WordSuggestion = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const WordMeaningBox = styled.div`
  min-width: 300px;
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #445656;
  margin-bottom: 20px;
  padding: 10px;
`;

export const WordMeaning = styled.p`
  font-size: 18px;
`;

export const ShowAnswerBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #445656;
  background-color: none;
  border: 2px solid #445656;
  border-radius: 30px;
  padding: 6px 12px;
  margin-bottom: 20px;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
  cursor: pointer;
`;

export const ProgressBox = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const ProgressBar = styled.div`
  width: 200px;
  margin-right: 6px;
  border: 1px solid #c48f5a;
  border-radius: 10px;
  display: flex;
  align-items: center;
`;

export const Progress = styled.div`
  width: ${(props) => props.width};
  height: 98%;
  border-radius: 10px;
  background-color: #c48f5a;
  transition: width 0.2s;
`;

export const ProgressPercent = styled.p`
  color: #c48f5a;
`;

export const ButtonBox = styled.div`
  min-width: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Btn = styled.button`
  border: none;
  background: none;
  color: #c48f5a;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:disabled {
    color: #c4c4c4;
  }
  &:hover {
    transform: scale(1.2);
  }
`;

export const PrevBtn = styled(Btn)``;
export const NextBtn = styled(Btn)``;

export const Hilight = styled.p`
  color: #c48f5a;
`;
