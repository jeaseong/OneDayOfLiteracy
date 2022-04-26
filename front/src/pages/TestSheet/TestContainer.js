import React, { useState } from "react";
import { useQueryClient } from "react-query";
import TestPresentation from "./TestPresentation";
import TestProcessBtn from "./TestProcessBtn";
import { NextBtn } from "./TestStyle";
import { useTestQuery } from "../../queries/TestQuery";

import { post } from "../../utils/api";

export default function TestContainer() {
  const queryClient = useQueryClient();
  const initAnswer = {
    questionId: null,
    answerId: null,
  };
  const { data } = useTestQuery();
  const [step, setStep] = useState(0);
  const [isProceedingTest, setIsProceedingTest] = useState(false);
  const [curAnswer, setCurAnswer] = useState(initAnswer);
  const [totalMySelectedAnswer, setTotalMySelectedAnswer] = useState([]);

  const MyselectedAnswer = (questionId, answerId) => {
    setCurAnswer((cur) => {
      return { questionId, answerId };
    });
  };
  const selectedAnswer = curAnswer.answerId;

  const setNextQuestion = () => {
    setStep((cur) => cur + 1);
    setCurAnswer(null);
    setTotalMySelectedAnswer((cur) => [...cur, curAnswer]);
  };

  const onSubmit = async () => {
    try {
      await post("", totalMySelectedAnswer);
      queryClient.removeQueries("test");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      {isProceedingTest && (
        <TestPresentation
          test={data[step]}
          selectedAnswer={selectedAnswer}
          MyselectedAnswer={MyselectedAnswer}
        />
      )}
      {!isProceedingTest && (
        <NextBtn
          onClick={() => {
            setIsProceedingTest(true);
          }}
        >
          테스트 시작하기!
        </NextBtn>
      )}
      {isProceedingTest && data && (
        <TestProcessBtn
          step={step}
          selectedAnswer={selectedAnswer}
          onSubmit={onSubmit}
          setNextQuestion={setNextQuestion}
        />
      )}
    </div>
  );
}
