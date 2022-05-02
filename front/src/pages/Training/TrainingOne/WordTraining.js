import React, { useState, useEffect } from "react";
import {
  WordTrainingContainer,
  WordSuggestion,
  WordMeaning,
  ProgressBox,
  ProgressBar,
  Progress,
  AnswerInput,
  AnswerForm,
  AnswerBtn,
  ProgressPercent,
  WordMeaningBox,
  ConfirmBox,
  ButtonBox,
  PrevBtn,
  NextBtn,
} from "../../../styles/WordTrainingStyle";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { get } from "../../../utils/api";
import { dum } from "./wordDumy";

export default function WordTraining() {
  const [progress, setProgress] = useState(0);
  const [isRight, setIsRight] = useState(false);
  const [myAnswer, setMyAnswer] = useState("");

  // useEffect(() => {
  //   const fetchAPI = async () => {
  //     const res = await get("");
  //     setProgress(parseInt(res.data));
  //   };
  //   fetchAPI();
  // }, []);

  const handleClick = (direction) => {
    setProgress((cur) => cur + direction);
    setIsRight(false);
  };

  const displayAnswer = (word) => {
    const curWord = dum[progress].word;
    if (isRight) return curWord;
    return new Array(curWord.replace(/(\s*)/g, "").length)
      .fill("O")
      .map((o, i) => o);
  };

  const handleSubmitAnswer = (e) => {
    e.preventDefault();
  };

  const handleChangeAnswer = (e) => {
    setMyAnswer((cur) => e.target.value);
  };

  return (
    <WordTrainingContainer>
      <WordMeaningBox>
        <WordMeaning>의미: {dum[progress].meaning}</WordMeaning>
      </WordMeaningBox>
      <WordSuggestion>힌트: {displayAnswer()}</WordSuggestion>
      <AnswerForm onSubmit={(e) => handleSubmitAnswer(e)}>
        <AnswerInput onChange={(e) => handleChangeAnswer(e)} />
        <AnswerBtn onSubmit={(e) => handleSubmitAnswer(e)}>확인</AnswerBtn>
        <ConfirmBox></ConfirmBox>
      </AnswerForm>
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
