import React, { useContext, useState } from "react";

import { testQuestion } from "./Utils";
import { TestSheet } from "./TestSheet";
import { TestContext } from "../../context/TestContext";
import { ButtonContainer } from "./ButtonContainer";

import { useTestSheet } from "../../queries/TestQuery";

export const TestSheetContainer = () => {
  const { test, answer, testDispatch, answerDispatch } =
    useContext(TestContext);
  const initAnswer = {
    questionId: null,
  };
  const [isTesting, setIsTesting] = useState(false);
  const [curAnswer, setCurAnswer] = useState(initAnswer);
  const { data } = useTestSheet();
  const [step, setStep] = useState(0);

  const onSubmit = async () => {
    // await axios.post("", answer);
    // 결과 페이지로 다이렉트하기
  };
  const startTest = async () => {};
  const selectAnswer = (id) => {};
  const nextTest = () => {
    setStep((cur) => cur + 1);
    setAnswer();
  };
  const setAnswer = () => {
    selectAnswer(curAnswer);
    setCurAnswer((cur) => initAnswer);
  };
  const handleClickAnswer = (questionId, answerId) => {
    setCurAnswer((cur) => {
      return { questionId, answerId };
    });
  };
  const selectedAnswer = curAnswer.answerId;
  return (
    <div>
      {isTesting && (
        <TestSheet
          test={data[step]}
          onSubmit={onSubmit}
          nextTest={nextTest}
          selectedAnswer={selectedAnswer}
          handleClickAnswer={handleClickAnswer}
        />
      )}

      {!isTesting && <button>테스트 안볼래요</button>}
      {!isTesting && (
        <button
          onClick={() => {
            setIsTesting((cur) => true);
          }}
        >
          테스트 시작하기!
        </button>
      )}
      {isTesting && test && (
        <ButtonContainer
          selectedAnswer={selectedAnswer}
          onSubmit={onSubmit}
          nextTest={nextTest}
          id={test.id}
        />
      )}
    </div>
  );
};
