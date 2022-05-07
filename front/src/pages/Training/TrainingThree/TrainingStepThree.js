import React, { useState, useEffect } from "react";
import TrainingGuide from "pages/Training/TrainingGuide";
import Slide from "components/Slide/Slide";
import TrainingTransription from "./TrainingTransription";
import { TranscriptionDescription } from "./TranscriptionDescription";
import { TAG_NAME } from "utils/constants";
import { useTranscriptionQuery } from "queries/transcriptionQuery";
import {
  TrainingSubjectContainer,
  TrainingSubjectWrap,
  TrainingStepTitle,
  ButtonWrap,
  FetchTranscriptionBtn,
} from "styles/Training/TrainingStyle";
import { get } from "utils/api";
export default function TrainingStepThree() {
  const { isFetching, data } = useTranscriptionQuery();
  const [subject, setSubject] = useState({});
  const [isOpenTranscription, setIsOpenTranscription] = useState(false);
  useEffect(() => {
    const fetchApi = async () => {
      const res = await get(`subjects/?level=3`);
      setSubject(res.data);
    };
    fetchApi();
  }, []);
  const openTranscription = () => {
    setIsOpenTranscription((cur) => !cur);
  };
  return (
    <TrainingGuide>
      <TrainingSubjectContainer>
        <TrainingSubjectWrap>
          <TrainingStepTitle>3단계</TrainingStepTitle>
          <Slide elements={TranscriptionDescription} />
        </TrainingSubjectWrap>
      </TrainingSubjectContainer>
      <ButtonWrap>
        <FetchTranscriptionBtn onClick={openTranscription}>
          {isOpenTranscription ? "닫기" : "필사 불러오기"}
        </FetchTranscriptionBtn>
      </ButtonWrap>

      <TrainingTransription
        title="필사"
        tags={TAG_NAME.STEP_THREE}
        subjectId={subject.subjectId}
        category={subject.category}
        content={subject.content}
      />
    </TrainingGuide>
  );
}
