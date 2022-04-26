import React from "react";
import {
  StepContainer,
  StepImg,
  StepTitle,
  StepTagContainer,
  StepTag,
  StepDescription,
} from "../../styles/TrainingStyle";

export default function TrainingStep({
  stepImg,
  stepTitle,
  stepTag,
  stepDescription,
}) {
  return (
    <StepContainer>
      <StepImg src={stepImg} alt="훈련 대표 이미지" />
      <StepTitle>{stepTitle}</StepTitle>
      <StepTagContainer>
        {stepTag.map((tag, i) => (
          <StepTag key={i}>{tag}</StepTag>
        ))}
      </StepTagContainer>
      <StepDescription>{stepDescription}</StepDescription>
    </StepContainer>
  );
}
