import React from "react";
import { QustionsContainer, Question } from "./TestStyle";

export const TestQuestion = ({ id, question }) => {
  return (
    <QustionsContainer>
      <Question>
        Q{id}. {question}
      </Question>
    </QustionsContainer>
  );
};
