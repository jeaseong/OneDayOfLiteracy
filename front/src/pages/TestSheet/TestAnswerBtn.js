import React from "react";
import { AnswerBtn, AnswerText, AnswerBtnContainer } from "./TestStyle";
import CheckIcon from "@mui/icons-material/Check";

export const TestAnswerBtn = ({
  testId,
  choices,
  handleClickAnswer,
  selectedAnswer,
}) => {
  return (
    <AnswerBtnContainer>
      {choices.map((option, index) => (
        <AnswerBtn
          onClick={() => {
            handleClickAnswer(testId, option.id);
          }}
        >
          <AnswerText>
            {index + 1}. {option.choice}
          </AnswerText>
          {selectedAnswer === option.id && <CheckIcon />}
        </AnswerBtn>
      ))}
    </AnswerBtnContainer>
  );
};
