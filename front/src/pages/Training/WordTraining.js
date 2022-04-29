import React, { useState } from "react";
import {
  WordTrainingContainer,
  WordSuggestion,
  WordMeaning,
  ProgressBox,
  ProgressBar,
  Progress,
  ProgressPercent,
  WordMeaningBox,
  ShowAnswerBtn,
  ButtonBox,
  PrevBtn,
  NextBtn,
  Hilight,
} from "../../styles/WordTrainingStyle";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { dum } from "./wordDumy";
import "../../index.css";

export default function WordTraining() {
  const [progress, setProgress] = useState(0);
  const [hopeAnswer, setHopeAnswer] = useState(false);

  const handleClick = (direction) => {
    setProgress((cur) => cur + direction);
    setHopeAnswer(false);
  };
  return (
    <WordTrainingContainer>
      <WordSuggestion>제시어: {dum[progress].word}</WordSuggestion>
      <WordMeaningBox>
        <WordMeaning>{hopeAnswer && dum[progress].meaning}</WordMeaning>
      </WordMeaningBox>
      <ShowAnswerBtn
        onClick={() => {
          setHopeAnswer((cur) => !cur);
        }}
      >
        정답보기
      </ShowAnswerBtn>
      <ProgressBox>
        <ProgressBar>
          <Progress
            width={`${Math.ceil(((progress + 1) / dum.length) * 100)}%`}
          />
        </ProgressBar>
        <ProgressPercent>
          {Math.ceil(((progress + 1) / dum.length) * 100)}%
        </ProgressPercent>
      </ProgressBox>
      <ButtonBox>
        <PrevBtn disabled={progress === 0} onClick={() => handleClick(-1)}>
          <ArrowBackIosIcon fontSize="large" />
        </PrevBtn>
        <NextBtn
          disabled={progress === dum.length - 1}
          onClick={() => handleClick(1)}
        >
          <ArrowForwardIosIcon fontSize="large" />
        </NextBtn>
      </ButtonBox>
    </WordTrainingContainer>
  );
}
