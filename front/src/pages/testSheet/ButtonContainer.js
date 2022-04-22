import React from "react";
import { testQuestion } from "./Utils";

export const ButtonContainer = ({ nextTest, id, onSubmit, selectedAnswer }) => {
  return (
    <div>
      {testQuestion.length !== id ? (
        <button disabled={!selectedAnswer} onClick={() => nextTest(id + 1)}>
          next
        </button>
      ) : (
        <button disabled={false} onClick={onSubmit}>
          결과보기
        </button>
      )}
    </div>
  );
};
