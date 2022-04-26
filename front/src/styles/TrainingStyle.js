import styled from "styled-components";

// Training.js
export const TrainingContainer = styled.section`
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  @media screen and (min-width: 768px) {
    flex-wrap: nowrap;
  }
`;

// TrainingStep.js
export const StepContainer = styled.article`
  flex: 50%;
  padding: 10px;
  background: #ffffff;
  border-radius: 12px;
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
