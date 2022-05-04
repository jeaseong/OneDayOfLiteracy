import React, { useState, useEffect } from "react";
import TrainingGuide from "../TrainingGuide";
import Slide from "../../../components/Slide/Slide";
import TrainingPost from "../TrainingPost/TrainingPost";
import { TranscriptionDescription } from "./TranscriptionDescription";
import { TAG_NAME } from "../../../utils/constants";

import {
  TrainingSubjectContainer,
  TrainingSubjectWrap,
  TrainingStepTitle,
} from "../../../styles/Training/TrainingStyle";
import { get } from "../../../utils/api";
export default function TrainingStepThree() {
  const [subject, setSubject] = useState({});
  useEffect(() => {
    const fetchApi = async () => {
      const res = await get(`subjects/level=3`);
      setSubject(res.data);
    };
    fetchApi();
  }, []);
  return (
    <TrainingGuide>
      <TrainingSubjectContainer>
        <TrainingSubjectWrap>
          <TrainingStepTitle>3단계</TrainingStepTitle>
          <Slide elements={TranscriptionDescription} />
        </TrainingSubjectWrap>
      </TrainingSubjectContainer>

      <TrainingPost
        title="필사"
        tags={TAG_NAME.STEP_THREE}
        subjectId={subject.subjectId}
        category={subject.category}
      />
    </TrainingGuide>
  );
}
