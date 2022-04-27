import React from "react";
import { useLocation } from "react-router-dom";
import { TrainingGuideContainer } from "../../styles/TrainingStyle";

export default function TrainingGuide() {
  const location = useLocation();
  const { step } = location.state;
  return <TrainingGuideContainer></TrainingGuideContainer>;
}
