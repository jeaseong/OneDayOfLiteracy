import React from "react";
import styled from "styled-components";

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
  choices,
  handleClickAnswer,
  selectedAnswer,
}) => {
  const isSelected = (id) => id === selectedAnswer;
  return (
    <div>
      {choices.map((option, index) => (
        <Button onClick={() => handleClickAnswer(option.id)}>
          <AnswerText>
            {index + 1}. {option.choice}
          </AnswerText>
        </Button>
      ))}
    </div>
  );
};
