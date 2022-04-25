import React, { useContext, useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { TestContext } from "../../context/TestContext";
import { testQuestion } from "./util";
import TestPresentation from "./TestPresentation";
import TestProcessBtn from "./TestProcessBtn";
import { ProcessBtn } from "./TestStyle";

export default function TestContainer() {
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
    //전체 테스트지를 test에 저장하고 curTest 변수를 만들어서 props로 넘기는 방식으로 해야하지 않을까?
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
        <TestPresentation
          test={test}
          onSubmit={onSubmit}
          nextTest={nextTest}
          selectedAnswer={selectedAnswer}
          handleClickAnswer={handleClickAnswer}
        />
      )}
      {!isTesting && (
        <ProcessBtn
          onClick={() => {
            startTest();
            setIsTesting((cur) => true);
          }}
        >
          테스트 시작하기!
        </ProcessBtn>
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
