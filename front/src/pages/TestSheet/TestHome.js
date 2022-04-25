import React from "react";
import { ContainerHome, WomanBook } from "./TestStyle";
import TestContainer from "./TestContainer";
import { img } from "../../utils/imgImport";

export default function TestHome() {
  return (
    <ContainerHome>
      <WomanBook src={img.womanBook} alt="책을 들고있는 여자" />
      <TestContainer />
    </ContainerHome>
  );
}
