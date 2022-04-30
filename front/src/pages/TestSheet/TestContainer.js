import React, { useState } from "react";
import { useQueryClient } from "react-query";
import TestPresentation from "./TestPresentation";
import TestProcessBtn from "./TestProcessBtn";
import { NextBtn } from "../../styles/TestStyle";
import { useTestQuery } from "../../queries/testQuery";
import { post } from "../../utils/api";

export default function TestContainer() {
  const queryClient = useQueryClient();
  const { tests } = useTestQuery();

  const [step, setStep] = useState(0);
  const [isProceedingTest, setIsProceedingTest] = useState(false);
  const [curAnswer, setCurAnswer] = useState({});
  const [totalMySelectedAnswer, setTotalMySelectedAnswer] = useState({});

  const MyselectedAnswer = (_qustionId, answerId) => {
    setCurAnswer((cur) => {
      return {
        [_qustionId]: answerId,
      };
    });
  };
  const selectedAnswer = curAnswer[step + 1] || null;

  const setNextQuestion = () => {
    setStep((cur) => cur + 1);
    setCurAnswer({});
    setTotalMySelectedAnswer((cur) => {
      return {
        ...cur,
        [Object.keys(curAnswer)[0]]: Object.values(curAnswer)[0],
      };
    });
  };

  const onSubmit = async () => {
    try {
      await post("test/result", totalMySelectedAnswer);
      queryClient.removeQueries("tests");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      {isProceedingTest && tests && (
        <TestPresentation
          test={tests[step]}
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
      {isProceedingTest && tests && (
        <TestProcessBtn
          step={step + 1}
          totalQuestion={tests.length}
          selectedAnswer={selectedAnswer}
          onSubmit={onSubmit}
          setNextQuestion={setNextQuestion}
        />
      )}
    </div>
  );
}
