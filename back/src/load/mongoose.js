import { Test } from "../db";

export default async () => {
    const data =
    [
      {
        num: 1,
        question: "문맥상 괄호 안에 가장 적합한 단어를 고르시오.",
        questionType: "객관식",
        content:
          "인터넷 기사나 운동 경기 방송을 보면 일정한 시간 간격으로 연속 촬영한 사진이나 동영상을 이용하여 운동선수나 공의 움직임을 (   ) 한다.",
        choices: {
          1: "분별하기도",
          2: "분석하기도",
          3: "구분하기도",
          4: "고려하기도",
        },
        answer: '2'
      },
      {
        num: 2,
        question: "다음 중 '금일'의 의미는?",
        questionType: "객관식",
        content: "",
        choices: { 1: "오늘", 2: "내일", 3: "금요일" },
        answer: '1'
      }
    ];

    const insertOne = async (v) => {
        try { 
            const question = v.question;
            
            const testDoc = await Test.findByQuestion({ question });
            if(testDoc) {
                // testDoc이 이미 있다. => 생성하면 안되고 넘어간다.
                return false;
            }
            
            const newTest = { ...v, choices: JSON.stringify(v.choices) } 
            await Test.create({ newTest });
            return false;

        } catch(error) {
            const question = v.question;
            console.log(question)
            console.log(error);
            return true;
        }
    }

    // 반복문 돌면서 객체 하나씩 DB에 있는지 확인하고, 없으면 저장
    let isError = false;
    for (let v of data) {
        isError = await insertOne(v);
        if(isError) break;
    }

    return isError;
}