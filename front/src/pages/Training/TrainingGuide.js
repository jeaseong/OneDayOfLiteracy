import React from "react";
import { useNavigate } from "react-router-dom";
import {
  TrainingGuideContainer,
  TrainingGuideContent,
  BackBtn,
} from "../../styles/TrainingStyle";
import { FlexBoxCenter } from "../../styles/CommonStyle";

export default function TrainingGuide({ children }) {
  const navigate = useNavigate();
  return (
    <TrainingGuideContainer>
      <TrainingGuideContent>{children}</TrainingGuideContent>
      <FlexBoxCenter>
        <BackBtn onClick={() => navigate("/main")}>목록으로</BackBtn>
      </FlexBoxCenter>
    </TrainingGuideContainer>
  );
}
