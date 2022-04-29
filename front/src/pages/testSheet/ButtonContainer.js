import React from "react";
import { useNavigate } from "react-router-dom";
import { testQuestion } from "./Utils";

export const ButtonContainer = ({ nextTest, id, onSubmit, selectedAnswer }) => {
  const navigate = useNavigate();
  return (
    <div>
      {testQuestion.length !== id ? (
        <button disabled={!selectedAnswer} onClick={() => nextTest(id + 1)}>
          next
        </button>
      ) : (
        <button
          disabled={false}
          onClick={() => {
            navigate("/");
          }}
        >
          결과보기
        </button>
      )}
    </div>
  );
};
