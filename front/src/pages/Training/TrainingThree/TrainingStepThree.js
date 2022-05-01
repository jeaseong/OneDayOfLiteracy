import React, { useState } from "react";
import TrainingGuide from "../TrainingGuide";
import Posting from "../../Post/Posting";
import Slide from "../../../components/Slide/Slide";
import { TranscriptionTraining } from "./TranscriptionTraining";
import { tagName } from "../../../utils/tagName";

import {
  TrainingSubjectContainer,
  TrainingSubjectWrap,
  TrainingStepTitle,
} from "../../../styles/TrainingStyle";

export default function TrainingStepThree() {
  const tags = [...tagName.step3];
  return (
    <TrainingGuide>
      <TrainingSubjectContainer>
        <TrainingSubjectWrap>
          <TrainingStepTitle>3단계</TrainingStepTitle>
          <Slide elements={TranscriptionTraining} />
        </TrainingSubjectWrap>
      </TrainingSubjectContainer>
      <Posting trainingTag={tags} />
    </TrainingGuide>
  );
}
