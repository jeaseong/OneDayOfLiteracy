import React, { useState, useRef } from "react";
import { useWordsQuery } from "../../../queries/wordsQuery";
import { useNavigate } from "react-router-dom";
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
  ClearBtn,
} from "../../../styles/WordTrainingStyle";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { post } from "../../../utils/api";
import { dum } from "./wordDumy";

export default function WordTraining({ subject }) {
  const answerRef = useRef();
  const [progress, setProgress] = useState(0);
  const [curIndex, setCurIndex] = useState(progress);
  const [myAnswer, setMyAnswer] = useState("");
  const navigate = useNavigate();

  // const { words } = useWordsQuery();

  // next, prev 버튼
  const clickSetQuiz = (direction) => {
    setCurIndex((cur) => cur + direction);
    setMyAnswer((cur) => "");
    answerRef.current.innerHTML = "";
  };

  // 유저가 진행한 문제보다 뒤를 풀면 답이 나오게 출력, 아니라면 빈 칸으로 출력
  const displayAnswer = () => {
    const curWord = dum[curIndex].word;
    if (curIndex < progress) return curWord;
    return new Array(curWord.replace(/(\s*)/g, "").length)
      .fill("O")
      .map((o, i) => o);
  };

  //input value 업데이트
  const handleChangeAnswer = (e) => {
    setMyAnswer((cur) => e.target.value);
  };
  //공백을 제거해서 답변으로 적어도 인정.
  const handleSubmitAnswer = (e) => {
    e.preventDefault();
    if (myAnswer === dum[curIndex].word.replace(/(\s*)/g, "")) {
      answerRef.current.innerHTML = "<mark>정답입니다!<mark>";
      if (curIndex === progress) setProgress((cur) => cur + 1);
    } else answerRef.current.innerHTML = "틀렸습니다..";
  };

  const stopWordTraining = async () => {
    await post("word", progress);
    await post("", subject);
    navigate("/main");
  };

  return (
    <WordTrainingContainer>
      <WordMeaningBox>
        <WordMeaning>의미: {dum[curIndex].meaning}</WordMeaning>
      </WordMeaningBox>
      <WordSuggestion>힌트: {displayAnswer()}</WordSuggestion>
      <AnswerForm onSubmit={(e) => handleSubmitAnswer(e)}>
        <AnswerInput
          type="text"
          placeholder="정답을 입력해주세요.."
          value={myAnswer}
          onChange={(e) => handleChangeAnswer(e)}
        />
        <AnswerBtn
          color={myAnswer.length > 0 ? "#c48f5a" : "#c4c4c4"}
          onSubmit={(e) => handleSubmitAnswer(e)}
        >
          확인
        </AnswerBtn>
        <ConfirmBox ref={answerRef}></ConfirmBox>
      </AnswerForm>
      <ProgressBox>
        <ProgressBar>
          <Progress
            width={`${Math.ceil(((curIndex + 1) / dum.length) * 100)}%`}
          />
        </ProgressBar>
        <ProgressPercent>
          {Math.ceil(((curIndex + 1) / dum.length) * 100)}%
        </ProgressPercent>
      </ProgressBox>
      <ButtonBox>
        <PrevBtn disabled={curIndex === 0} onClick={() => clickSetQuiz(-1)}>
          <ArrowBackIosIcon fontSize="large" />
        </PrevBtn>
        <NextBtn
          onClick={() => clickSetQuiz(1)}
          disabled={curIndex === dum.length - 1 || progress <= curIndex}
        >
          <ArrowForwardIosIcon fontSize="large" />
        </NextBtn>
      </ButtonBox>
      <ClearBtn onClick={() => stopWordTraining()}>그만하기</ClearBtn>
    </WordTrainingContainer>
  );
}
