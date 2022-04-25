import React, { useState } from "react";
import { useQuery } from "react-query";
import TestPresentation from "./TestPresentation";
import TestProcessBtn from "./TestProcessBtn";
import { NextBtn } from "./TestStyle";
import { useTestSheet } from "../../queries/TestQuery";

export default function TestContainer() {
  // const { data, isLoading } = useQuery(
  //   "test",
  //   async () => await Api.get("test")
  // );
  const initAnswer = {
    questionId: null,
    answerId: null,
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
        <TestPresentation
          test={data[step]}
          onSubmit={onSubmit}
          nextTest={nextTest}
          selectedAnswer={selectedAnswer}
          handleClickAnswer={handleClickAnswer}
        />
      )}
      {!isTesting && (
        <NextBtn
          onClick={() => {
            setIsTesting((cur) => true);
          }}
        >
          테스트 시작하기!
        </NextBtn>
      )}
      {isTesting && test && (
        <TestProcessBtn
          selectedAnswer={selectedAnswer}
          onSubmit={onSubmit}
          nextTest={nextTest}
          id={test.id}
        />
      )}
    </div>
  );
}
