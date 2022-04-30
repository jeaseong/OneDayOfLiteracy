import React from "react";
import {
  TrainingGuideContainer,
  TrainingGuideContent,
} from "../../styles/TrainingStyle";

export default function TrainingGuide({ children }) {
  return (
    <TrainingGuideContainer>
      <TrainingGuideContent>{children}</TrainingGuideContent>
      {/* <Post></Post> */}
    </TrainingGuideContainer>
  );
}
