import React from "react";
import TestAnswerBtn from "./TestAnswerBtn";
import { TestContent, TestQuestion } from "./TestStyle";

export default function TestPresentation({
  test,
  selectedAnswer,
  MyselectedAnswer,
}) {
  return (
    <>
      <TestQuestion>
        Q{test.num}. {test.question}
      </TestQuestion>
      <TestContent>{test.content}</TestContent>
      <TestAnswerBtn
        testId={test.num}
        choices={test.choices}
        selectedAnswer={selectedAnswer}
        MyselectedAnswer={MyselectedAnswer}
      />
    </>
  );
}