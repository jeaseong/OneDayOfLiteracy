import React from "react";

import {
  TrainingStepIntroduction,
  Hilight,
} from "../../../styles/TrainingStyle";
import Text from "../../../components/Text";

function TranscriptionIntro() {
  return (
    <TrainingStepIntroduction>
      <Text>
        <Hilight>'나'</Hilight>를 있는 그대로 표현하기는 어떠셨나요?
      </Text>
      <Text>
        이제는 조금 어렵고 힘든 <Hilight>‘필사’</Hilight>을 진행하려고 합니다.
      </Text>
      <Text>
        필사는 단순히 글을 따라 쓰는 것이 아니라, 글을 <Hilight>음미</Hilight>
        하고 몸으로 <Hilight>체득</Hilight>하는 것입니다.
      </Text>
      <Text>
        글자 하나하나 써 내려가 보세요. 내가 보지 못 했던 부분이 보이고,
      </Text>
      <Text>
        읽지 못 했던 부분이 <Hilight>어느샌가</Hilight> 보이게 됩니다.
      </Text>
    </TrainingStepIntroduction>
  );
}
function TranscriptionDescription() {
  return (
    <TrainingStepIntroduction>
      <Text>필사를 잘 하려면</Text>
      <Text>계속 읽고, 읽고 읽고</Text>
      <Text>끊임없이 생각하며</Text>
      <Text>한 자, 한 자, 써 내려가면</Text>
      <Text>
        읽지 못 했던 부분이 <Hilight>어느샌가</Hilight> 보이게 됩니다.
      </Text>
    </TrainingStepIntroduction>
  );
}

function TranscriptionRecommand() {
  return (
    <TrainingStepIntroduction>
      <Text>칼럼</Text>
      <Text>소설</Text>
      <Text>수필</Text>
      <Text>연설문</Text>
      <Text>시</Text>
    </TrainingStepIntroduction>
  );
}
export const TranscriptionTraining = [
  <TranscriptionIntro />,
  <TranscriptionDescription />,
  <TranscriptionRecommand />,
];
