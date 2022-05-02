import React from "react";
import TrainingGuide from "../TrainingGuide";
import Posting from "../../Post/Posting";
import Slide from "../../../components/Slide/Slide";
import { TranscriptionDescription } from "./TranscriptionDescription";
import { TAG_NAME } from "../../../utils/constants";

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
          <Slide elements={TranscriptionDescription} />
        </TrainingSubjectWrap>
      </TrainingSubjectContainer>
      <Posting trainingTag={[...TAG_NAME.STEP_THREE]} />
    </TrainingGuide>
  );
}
