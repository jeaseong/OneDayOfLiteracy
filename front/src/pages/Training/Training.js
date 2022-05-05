import React from "react";
import { useTrainingGuide } from "queries/trainingGuideQuery";
import TrainingStep from "./TrainingStep";
import CardSkeleton from "components/CardSkeleton";
import { TrainingContainer } from "styles/Training/TrainingStyle";
import { dumy } from "./dumyData";

export default function Training() {
  // const { data, isfetching } = useTrainingGuide();
  const isfetching = false;
  return (
    <TrainingContainer>
      {isfetching
        ? new Array(4).fill("").map((_, i) => <CardSkeleton key={i} />)
        : dumy.map((d, i) => (
            <TrainingStep
              key={i}
              step={i + 1}
              img={d.stepImg}
              title={d.stepTitle}
              tag={d.stepTag}
              des={d.stepDescription}
            />
          ))}
    </TrainingContainer>
  );
}
