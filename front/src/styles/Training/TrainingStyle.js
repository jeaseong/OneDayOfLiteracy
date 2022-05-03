import styled from "styled-components";
import { FlexBoxCenter } from "../Components/CommonStyle";

// Training.js
export const TrainingContainer = styled.section`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  @media screen and (min-width: 768px) {
    flex-wrap: nowrap;
  }
  @media screen and (min-width: 1024px) {
    max-width: 1024px;
  }
`;

// TrainingStep.js
export const StepContainer = styled.article`
  flex: 50%;
  padding: 10px;
  background: #ffffff;
  border-radius: 12px;
  cursor: pointer;
`;

export const StepImg = styled.img`
  width: 100%;
  height: 200px;
  margin-bottom: 10px;
`;
export const StepTitle = styled.h2`
  margin-bottom: 5px;
  font-size: 18px;
`;
export const StepTagContainer = styled.ul`
  width: 100%;
  display: flex;
  list-style: none;
  margin-bottom: 5px;
`;

export const StepTag = styled.li`
  font-size: 8px;
  border: 1px solid #c48f5a;
  border-radius: 30px;
  margin-right: 5px;
  padding: 2px 10px;
  color: #c48f5a;
  &:last-child {
    margin-right: 0;
  }
`;

export const StepDescription = styled.p`
  width: 100%;
  text-align: left;
`;

//TrainingGuide

export const TrainingGuideContainer = styled.section``;

export const TrainingGuideContent = styled.div``;

export const BackBtn = styled.button`
  width: 140px;
  height: 34px;
  background: #c48f5a;
  border: 1px solid #c48f5a;
  box-sizing: border-box;
  border-radius: 30px;
  color: #ffffff;
  text-align: center;
  box-shadow: 3px 3px 3px gray;
  transition-duration: 0.3s;
  cursor: pointer;
  &:active {
    box-shadow: none;
  }
  &:disabled {
    cursor: default;
    opacity: 0.5;
    background: var(--button-bg-color, gray);
  }
`;

//TrainingGuide step1

export const TrainingSubjectContainer = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  height: 300px;
  background-color: #ffffff;
`;

export const TrainingSubjectWrap = styled.div`
  width: 100%;
  padding: 0 20px;
  margin: 0 auto;
`;

export const TrainingStepTitle = styled.h3`
  color: #c48f5a;
  font-size: 24px;
  margin-bottom: 10px;
  text-align: center;
`;

export const TrainingStepIntroduction = styled.p`
  text-align: center;
  line-height: 1.6;
  word-break: break-all;
  white-space: pre-wrap;
`;

// TrainingPost

export const TrainingPostTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const Center = styled(FlexBoxCenter)`
  margin-top: 10px;
`;
