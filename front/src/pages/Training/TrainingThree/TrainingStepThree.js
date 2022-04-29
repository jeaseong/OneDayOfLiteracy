import React, { useState } from "react";
import TrainingGuide from "../TrainingGuide";
import Slide from "../../../components/Slide/Slide";
import { TranscriptionTraining } from "./TranscriptionTraining";

import {
  TrainingSubjectContainer,
  TrainingSubjectWrap,
  TrainingStepTitle,
} from "../../../styles/TrainingStyle";

export default function TrainingStepThree() {
  return (
    <TrainingGuide>
      <TrainingSubjectContainer>
        <TrainingSubjectWrap>
          <TrainingStepTitle>3단계</TrainingStepTitle>
          <Slide elements={TranscriptionTraining} />
        </TrainingSubjectWrap>
      </TrainingSubjectContainer>
    </TrainingGuide>
  );
}
