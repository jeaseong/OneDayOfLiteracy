import React from "react";
import { useNavigate } from "react-router-dom";
import { ProcessContainer, NextBtn } from "./TestStyle";

export default function TestProcessBtn({
  step,
  totalQuestion,
  setNextQuestion,
  selectedAnswer,
  onSubmit,
}) {
  const navigate = useNavigate();
  return (
    <ProcessContainer>
      {totalQuestion !== step ? (
        <NextBtn
          disabled={!selectedAnswer}
          onClick={() => {
            setNextQuestion();
          }}
        >
          next
        </NextBtn>
      ) : (
        <NextBtn
          disabled={false}
          onClick={() => {
            onSubmit();
            navigate("/test/result");
          }}
        >
          결과보기!
        </NextBtn>
      )}
    </ProcessContainer>
  );
}
