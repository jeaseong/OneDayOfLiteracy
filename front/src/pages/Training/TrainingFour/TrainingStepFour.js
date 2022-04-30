import React from "react";
import TrainingGuide from "../TrainingGuide";
import {
  TrainingSubjectContainer,
  TrainingStepTitle,
  TrainingSubjectWrap,
  TrainingStepIntroduction,
  Hilight,
} from "../../../styles/TrainingStyle";
import Text from "../../../components/Text";
export default function TrainingStepFour() {
  return (
    <TrainingGuide>
      <TrainingSubjectContainer>
        <TrainingSubjectWrap>
          <TrainingStepTitle>4단계</TrainingStepTitle>
          <TrainingStepIntroduction>
            <Text>
              <Hilight>필사</Hilight>는 재밌으셨나요?
            </Text>
            <Text>지루함을 느끼셨거나, '음?' 하셨다면 매우 정상입니다!</Text>
            <Text>꾸준히 필사을 하면,</Text>
            <Text>
              필사 만큼 <Hilight>재밌는</Hilight> 일은 없을겁니다!
            </Text>
            <br />
            <Text>
              이제 혼자 보는 글이 아닌 <Hilight>타인</Hilight>을 위한 글,
            </Text>
            <Text>
              <Hilight>편지</Hilight>를 써볼 예정 아닌가 그냥 자유 글이나 할까.
            </Text>
          </TrainingStepIntroduction>
        </TrainingSubjectWrap>
      </TrainingSubjectContainer>
    </TrainingGuide>
  );
}
