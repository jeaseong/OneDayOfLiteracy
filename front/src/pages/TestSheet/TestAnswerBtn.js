import React from "react";
import { AnswerBtn, AnswerText, AnswerBtnContainer } from "./TestStyle";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function TestAnswerBtn({
  testId,
  choices,
  selectedAnswer,
  MyselectedAnswer,
}) {
  return (
    <AnswerBtnContainer>
      {choices.map((option, index) => (
        <AnswerBtn
          onClick={() => {
            MyselectedAnswer(testId, option.id);
          }}
        >
          <AnswerText>
            {index + 1}. {option.choice}
          </AnswerText>
          {selectedAnswer === option.id && (
            <FavoriteIcon style={{ color: "#C48F5A" }} />
          )}
        </AnswerBtn>
      ))}
    </AnswerBtnContainer>
  );
}
