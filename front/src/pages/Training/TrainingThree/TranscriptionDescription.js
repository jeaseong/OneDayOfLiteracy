import React from "react";

import { TrainingStepIntroduction } from "../../../styles/TrainingStyle";
import { TRANSCRIPTION_INTRODUCTION } from "../../../utils/constants";
import { createMarkup } from "../../../utils/setInnerHTML";

function TranscriptionDescriptionOne() {
  return (
    <TrainingStepIntroduction
      dangerouslySetInnerHTML={createMarkup(
        TRANSCRIPTION_INTRODUCTION.STEP_ONE
      )}
    />
  );
}

function TrainingStepIntroductionTwo() {
  return (
    <TrainingStepIntroduction
      dangerouslySetInnerHTML={createMarkup(
        TRANSCRIPTION_INTRODUCTION.STEP_TWO
      )}
    />
  );
}

function TrainingStepIntroductionThree() {
  return (
    <TrainingStepIntroduction
      dangerouslySetInnerHTML={createMarkup(
        TRANSCRIPTION_INTRODUCTION.STEP_THREE
      )}
    />
  );
}

export const TranscriptionDescription = [
  <TranscriptionDescriptionOne />,
  <TrainingStepIntroductionTwo />,
  <TrainingStepIntroductionThree />,
];
