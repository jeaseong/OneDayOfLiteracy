import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { get } from "../../utils/api";
import {
  TestResultContainer,
  TestResultWrap,
  TestResultUserName,
  TestResultUserScore,
  TestResultUserRecommand,
  TestResultNavBtn,
  Hilight,
} from "../../styles/TestResultStyle";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useGetCurrentUser } from "../../queries/userQuery";
import { RECOMMENDED } from "../../utils/testResult";

export default function TestResult() {
  const navigate = useNavigate();
  const [myScore, setMyScore] = useState(0);
  const { userState } = useGetCurrentUser();

  const recommendStep = (score) => {
    if (score >= 90) return RECOMMENDED[2];
    else if (score >= 70) return RECOMMENDED[1];
    else return RECOMMENDED[0];
  };

  const handleClickNavBtn = (score) => {
    if (score >= 90) return 3;
    else return 1;
  };

  useEffect(() => {
    const fetchAPI = async () => {
      const res = await get("results/", userState._id);
      setMyScore(res.data[res.data.length - 1].result);
    };
    fetchAPI();
  }, []);

  return (
    <TestResultContainer>
      <TestResultWrap>
        <TestResultUserName>
          <Hilight>{userState.nickname} </Hilight>님의 점수는
        </TestResultUserName>
        <TestResultUserScore>
          <Hilight>{myScore || "0"}/100</Hilight> 입니다!
        </TestResultUserScore>
        <TestResultUserRecommand>
          {recommendStep(myScore)}
        </TestResultUserRecommand>
        <TestResultNavBtn
          onClick={() => {
            navigate(`/training/${handleClickNavBtn(myScore)}`);
          }}
        >
          <>서비스 바로가기</>
          <ArrowForwardIcon />
        </TestResultNavBtn>
      </TestResultWrap>
    </TestResultContainer>
  );
}
