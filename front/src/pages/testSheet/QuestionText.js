import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 2em;
  background-color: #f5f5f5;
  box-shadow: 0 3px 3px -3px rgba(0, 0, 0, 0.2);
`;

const Title = styled.span`
  font-size: 1.2em;
  font-weight: bold;
`;

export const QuestionText = ({ id, question, content }) => {
  return (
    <Container>
      <Title>
        {id}. {question}
      </Title>
      <div>{content}</div>
    </Container>
  );
};
