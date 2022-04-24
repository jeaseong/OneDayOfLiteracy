import React from "react";

import { QuestionText } from "./QuestionText";
import { AnswerButtons } from "./AnswerButtons";

export const TestSheet = ({
  test,
  onSubmit,
  selectedAnswer,
  handleClickAnswer,
}) => {
  return (
    <div>
      {test && (
        <>
          <QuestionText
            id={test.id}
            question={test.question}
            content={test.content}
          />
          <AnswerButtons
            testId={test.id}
            choices={test.choices}
            handleClickAnswer={handleClickAnswer}
            selectedAnswer={selectedAnswer}
          />
        </>
      )}
    </div>
  );
};
