import React from "react";
import { ContainerHome, WomanBook } from "./TestStyle";
import { TestContainer } from "./TestContainer";
import { womanBook } from "../../utils/imgImport";

export const TestHome = () => {
  return (
    <ContainerHome>
      <WomanBook src={womanBook} alt="책을 들고있는 여자" />
      <TestContainer />
    </ContainerHome>
  );
};
