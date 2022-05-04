import React from "react";
import { MainContainer, MainHeadingTwo } from "../../styles/Main/MainStyle";
import { LABEL } from "../../utils/constants";
import Ranking from "./Ranking";
import Training from "../Training/Training";

export default function Main() {
  return (
    <MainContainer>
      <MainHeadingTwo>{LABEL.RANKING}</MainHeadingTwo>
      <Ranking />
      <MainHeadingTwo>{LABEL.TRAINING}</MainHeadingTwo>
      <Training />
    </MainContainer>
  );
}
