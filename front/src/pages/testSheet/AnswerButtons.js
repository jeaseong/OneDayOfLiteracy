import React from "react";
import styled from "styled-components";
import CheckIcon from "@mui/icons-material/Check";

const Button = styled.button`
  display: flex;
  width: 100%;
  justify-content: space-between;
  font-size: 1em;
  border-color: transparent;
  background-color: transparent;
  outline: none;
`;

const AnswerText = styled.div`
  flex-grow: 1;
  text-align: left;
`;

export const AnswerButtons = ({
  testId,
  choices,
  handleClickAnswer,
  selectedAnswer,
}) => {
  return (
    <div>
      {choices.map((option, index) => (
        <Button
          onClick={() => {
            handleClickAnswer(testId, option.id);
          }}
        >
          <AnswerText>
            {index + 1}. {option.choice}
          </AnswerText>
          {selectedAnswer === option.id && <CheckIcon />}
        </Button>
      ))}
    </div>
  );
};
