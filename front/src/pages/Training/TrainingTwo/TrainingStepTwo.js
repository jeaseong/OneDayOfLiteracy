import React from "react";
import TrainingGuide from "../TrainingGuide";
import {
  TrainingSubjectContainer,
  TrainingSubjectWrap,
  TrainingStepTitle,
  TrainingStepIntroduction,
} from "../../../styles/TrainingStyle";
import TrainingPost from "../TrainingPost/TrainingPost";
import { TAG_NAME, TRAINING_INTRODUNCTION } from "../../../utils/constants";
import { createMarkup } from "../../../utils/setInnerHTML";

export default function TrainingStepTwo() {
  return (
    <TrainingGuide>
      <TrainingSubjectContainer>
        <TrainingSubjectWrap>
          <TrainingSubjectWrap>
            <TrainingStepTitle>2단계</TrainingStepTitle>
            <TrainingStepIntroduction
              dangerouslySetInnerHTML={createMarkup(
                TRAINING_INTRODUNCTION.STEP_TWO
              )}
            />
          </TrainingSubjectWrap>
        </TrainingSubjectWrap>
      </TrainingSubjectContainer>
      <TrainingPost title="자기소개" />
    </TrainingGuide>
  );
}
