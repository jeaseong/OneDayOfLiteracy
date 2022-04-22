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

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("", answer);
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
  };
  const handleClickAnswer = (answerId) => {
    selectAnswer({
      questionId: test.id,
      answerId: answerId,
    });
  };
  return (
    <div>
      {isTesting && (
        <TestSheet
          test={test}
          onSubmit={onSubmit}
          nextTest={nextTest}
          // selectedAnswer={selectedAnswer}
          selectAnswer={selectAnswer}
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
        <ButtonContainer nextTest={nextTest} id={test.id} />
      )}
    </div>
  );
};
