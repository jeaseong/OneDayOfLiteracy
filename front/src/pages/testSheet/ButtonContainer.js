import React, { useContext } from "react";
import { testQuestion } from "./Utils";
import { TestContext } from "../../context/TestContext";

export const ButtonContainer = ({ nextTest, id }) => {
  const { test, testDispatch } = useContext(TestContext);
  return (
    <div>
      <button onClick={() => nextTest(id + 1)}>next</button>
    </div>
  );
};
