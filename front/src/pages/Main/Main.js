import React from "react";
import Training from "pages/Training/Training";
import { MainContainer, MainHeadingTwo } from "styles/Main/MainStyle";

export default function Main() {
  return (
    <MainContainer>
      <MainHeadingTwo>트레이닝</MainHeadingTwo>
      <Training />
    </MainContainer>
  );
}
