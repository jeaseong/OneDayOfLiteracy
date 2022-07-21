import React from "react";
import TestAnswerBtn from "pages/TestSheet/TestAnswerBtn";
import { 
  TestContent,
  TestQuestion,
  AnswerBtn,
  AnswerText,
  AnswerBtnContainer,
} from "styles/Test/TestStyle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { createMarkup } from "utils/setInnerHTML";

export default function TestPresentation({
  test,
  selectedAnswer,
  MyselectedAnswer,
}) {
  const {num, choices} = test
  return (
    <>
      <TestQuestion>
        Q{num}. {test.question}
      </TestQuestion>
      <TestContent
        dangerouslySetInnerHTML={createMarkup(test.content)}
      ></TestContent>
      <AnswerBtnContainer>
      {choices &&
        Object.entries(choices).map((option, index) => (
          <AnswerBtn
            key={index}
            onClick={() => {
              MyselectedAnswer(num, option[0]);
            }}
          >
            <AnswerText>
              {index + 1}. {option[1]}
            </AnswerText>
            {selectedAnswer === option[0] && (
              <FavoriteIcon style={{ color: "#C48F5A" }} />
            )}
          </AnswerBtn>
        ))}
    </AnswerBtnContainer>
      {/* <TestAnswerBtn
        testId={test.num}
        choices={test.choices}
        selectedAnswer={selectedAnswer}
        MyselectedAnswer={MyselectedAnswer}
      /> */}
    </>
  );
}
