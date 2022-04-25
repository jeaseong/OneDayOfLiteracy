import React from "react";
import { useNavigate } from "react-router-dom";
import { testQuestion } from "./util";
import { ProcessContainer, ProcessBtn } from "./TestStyle";

export default function TestProcessBtn({
  nextTest,
  id,
  onSubmit,
  selectedAnswer,
}) {
  const navigate = useNavigate();
  return (
    <ProcessContainer>
      {testQuestion.length !== id ? (
        <ProcessBtn disabled={!selectedAnswer} onClick={() => nextTest(id + 1)}>
          next
        </ProcessBtn>
      ) : (
        <ProcessBtn
          disabled={false}
          onClick={() => {
            navigate("/");
          }}
        >
          결과보기
        </ProcessBtn>
      )}
    </ProcessContainer>
  );
}
