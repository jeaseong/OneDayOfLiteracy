import React from "react";
import { useNavigate } from "react-router-dom";
import { testQuestion } from "./util";
import { ProcessContainer, NextBtn } from "./TestStyle";

export default function TestProcessBtn({
  step,
  setNextQuestion,
  onSubmit,
  selectedAnswer,
}) {
  const navigate = useNavigate();
  return (
    <ProcessContainer>
      {testQuestion.length !== step ? (
        <NextBtn disabled={!selectedAnswer} onClick={setNextQuestion()}>
          next
        </NextBtn>
      ) : (
        <NextBtn
          disabled={false}
          onClick={() => {
            onSubmit();
            navigate("/");
          }}
        >
          결과보기
        </NextBtn>
      )}
    </ProcessContainer>
  );
}
