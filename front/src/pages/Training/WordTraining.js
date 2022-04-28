import React, { useState } from "react";
import {
  WordTrainingContainer,
  WordSuggestion,
  WordMeaning,
  ProgressBox,
  ProgressBar,
  ShowAnswerBtn,
  ButtonBox,
  PrevBtn,
  NextBtn,
} from "../../styles/WordTrainingStyle";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { dum } from "./wordDumy";

export default function WordTraining() {
  const [progress, setProgress] = useState(0);
  const [hopeAnswer, setHopeAnswer] = useState(false);
  return (
    <WordTrainingContainer>
      <WordSuggestion>제시어: {dum[progress].word}</WordSuggestion>
      <WordMeaning>{dum[progress].meaning}</WordMeaning>
      <ShowAnswerBtn>정답보기</ShowAnswerBtn>
      <ProgressBox>
        <ProgressBar />
      </ProgressBox>
      <ButtonBox>
        <PrevBtn>
          <ArrowBackIosIcon />
        </PrevBtn>
        <NextBtn>
          <ArrowForwardIosIcon />
        </NextBtn>
      </ButtonBox>
    </WordTrainingContainer>
  );
}
