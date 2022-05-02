import React from "react";
import WordTraining from "./WordTraining";
import TrainingGuide from "../TrainingGuide";
import {
  TrainingSubjectContainer,
  TrainingStepTitle,
  TrainingSubjectWrap,
  TrainingStepIntroduction,
} from "../../../styles/TrainingStyle";
import { TRAINING_INTRODUNCTION } from "../../../utils/constants";
import { createMarkup } from "../../../utils/setInnerHTML";
function TrainingStepOne() {
  return (
    <TrainingGuide>
      <TrainingSubjectContainer>
        <TrainingSubjectWrap>
          <TrainingStepTitle>1단계</TrainingStepTitle>
          <TrainingStepIntroduction
            dangerouslySetInnerHTML={createMarkup(
              TRAINING_INTRODUNCTION.STEP_ONE
            )}
          />
        </TrainingSubjectWrap>
      </TrainingSubjectContainer>
      <WordTraining />
    </TrainingGuide>
  );
}

export default TrainingStepOne;
