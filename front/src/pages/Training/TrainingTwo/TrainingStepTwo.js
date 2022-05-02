import React from "react";
import TrainingGuide from "../TrainingGuide";

import {
  TrainingSubjectContainer,
  TrainingSubjectWrap,
  TrainingStepTitle,
  TrainingStepIntroduction,
  Hilight,
} from "../../../styles/TrainingStyle";

import Text from "../../../components/Text";

export default function TrainingStepTwo() {
  return (
    <TrainingGuide>
      <TrainingSubjectContainer>
        <TrainingSubjectWrap>
          <TrainingSubjectWrap>
            <TrainingStepTitle>2단계</TrainingStepTitle>
            <TrainingStepIntroduction>
              <Text>1단계를 진행하신 여러분! 많이 어려우셨나요?</Text>
              <Text>
                본격적인 문해력 훈련에 앞서, 문하생에게 가벼운
                <Hilight> 제시어</Hilight>를 드리고자 합니다.
              </Text>
              <Text>
                본인이 보고 느낀 것을 <Hilight>그대로</Hilight> 작성하는 것이
                중요합니다. 외모를 묘사할 수도, 성격을 표현할 수도 있습니다.
              </Text>
              <Text>
                <Hilight>본인</Hilight>을 소개하는 글을 작성해보세요!
              </Text>
              <Text>
                취업을 위한 자기소개가 아닙니다. 내가 본 나에 대해 최대한
                적어보세요!
              </Text>
            </TrainingStepIntroduction>
          </TrainingSubjectWrap>
        </TrainingSubjectWrap>
      </TrainingSubjectContainer>
      {/* <Post></Post> */}
    </TrainingGuide>
  );
}
