import React from "react";
import TrainingGuide from "../TrainingGuide";
import {
  TrainingSubjectContainer,
  TrainingStepTitle,
  TrainingSubjectWrap,
  TrainingStepIntroduction,
} from "../../../styles/TrainingStyle";
import Posting from "../../Post/Posting";
import { TAG_NAME, TRAINING_INTRODUNCTION } from "../../../utils/constants";
import { createMarkup } from "../../../utils/setInnerHTML";
export default function TrainingStepFour() {
  return (
    <TrainingGuide>
      <TrainingSubjectContainer>
        <TrainingSubjectWrap>
          <TrainingStepTitle>4단계</TrainingStepTitle>
          <TrainingStepIntroduction
            dangerouslySetInnerHTML={createMarkup(
              TRAINING_INTRODUNCTION.STEP_FOUR
            )}
          />
        </TrainingSubjectWrap>
      </TrainingSubjectContainer>
      <Posting trainingTag={[...TAG_NAME.STEP_FOUR]}></Posting>
    </TrainingGuide>
  );
}
