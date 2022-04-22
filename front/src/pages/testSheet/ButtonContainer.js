import React, { useContext } from "react";
import { testQuestion } from "./Utils";
import { TestContext } from "../../context/TestContext";

export const ButtonContainer = ({ nextTest, id, onSubmit }) => {
  const { test, testDispatch } = useContext(TestContext);
  return (
    <div>
      {testQuestion.length + 1 !== id ? (
        <button onClick={() => nextTest(id + 1)}>next</button>
      ) : (
        <button onClick={onSubmit}>결과보기</button>
      )}
    </div>
  );
};
