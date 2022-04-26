import React from "react";
import { useTrainingGuide } from "../../queries/trainingGuideQuery";
import TrainingStep from "./TrainingStep";
import CardSkeleton from "../../components/CardSkeleton";
import { TrainingContainer } from "../../styles/TrainingStyle";

export default function Training() {
  const { data, isfetching } = useTrainingGuide();
  return (
    <TrainingContainer>
      {isfetching
        ? new Array(4).fill("").map((_, i) => <CardSkeleton key={i} />)
        : data.map((d, i) => (
            <TrainingStep
              stepImg={d.stepImg}
              stepTitle={d.stepTitle}
              stepTag={d.stepTag}
              stepDescription={d.stepDescription}
            />
          ))}
    </TrainingContainer>
  );
}
