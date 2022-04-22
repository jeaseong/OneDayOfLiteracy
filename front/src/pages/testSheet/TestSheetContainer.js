import React, { useContext, useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";

import { testQuestion } from "./Utils";
import { TestSheet } from "./TestSheet";
import { TestContext } from "../../context/TestContext";
import { ButtonContainer } from "./ButtonContainer";

import * as Api from "../../api";

export const TestSheetContainer = () => {
  const { test, answer, testDispatch, answerDispatch } =
    useContext(TestContext);
  // const { data, isLoading } = useQuery(
  //   "test",
  //   async () => await Api.get("test")
  // );
  const [isTesting, setIsTesting] = useState(false);
  const [curAnswer, setCurAnswer] = useState({
    questionId: null,
    answerId: null,
  });

  const onSubmit = async () => {
    console.log(answer);
    // await axios.post("", answer);
    // 결과 페이지로 다이렉트하기
  };
  const startTest = async () => {
    // const res = await axios.get("");
    testDispatch({ type: "setTest", payload: testQuestion[0] });
  };
  const selectAnswer = (id) => {
    answerDispatch({ type: "setAnswer", payload: id });
  };
  const nextTest = (nextId) => {
    const nextTestQuestion = testQuestion.find((t) => nextId === t.id);
    testDispatch({ type: "setTest", payload: nextTestQuestion });
    setAnswer();
  };
  const setAnswer = () => {
    selectAnswer(curAnswer);
    setCurAnswer((cur) => {
      return {
        questionId: null,
        answerId: null,
      };
    });
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
          test={test}
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
            startTest();
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
