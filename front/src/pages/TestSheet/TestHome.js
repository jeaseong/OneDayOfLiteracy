import React from "react";
import styled from "styled-components";
import { TestSheetContainer } from "./TestSheetContainer";

const Container = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid red;
`;
export const TestHome = () => {
  return (
    <Container>
      <TestSheetContainer />
    </Container>
  );
};
