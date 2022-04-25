import React from "react";
import { QustionsContainer, Question } from "./TestStyle";

export default function TestQuestion({ id, question }) {
  return (
    <QustionsContainer>
      <Question>
        Q{id}. {question}
      </Question>
    </QustionsContainer>
  );
}
