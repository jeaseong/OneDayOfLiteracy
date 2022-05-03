import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { get } from "../../utils/api";
import { TEST_RESULT } from "../../utils/constants";
import {
  TestResultContainer,
  TestResultWrap,
  TestResultUserName,
  TestResultUserScore,
  TestResultUserRecommand,
  TestResultNavBtn,
} from "../../styles/TestResultStyle";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useGetCurrentUser } from "../../queries/userQuery";

export default function TestResult() {
  const navigate = useNavigate();
  const [myScore, setMyScore] = useState(0);
  const { userState } = useGetCurrentUser();

  const recommendStep = (score) => {
    if (score >= 90) return TEST_RESULT.LEVEL_THREE;
    else if (score >= 70) return TEST_RESULT.LEVEL_TWO;
    return TEST_RESULT.LEVEL_ONE;
  };

  const handleClickNavBtn = (score) => {
    if (score >= 90) return 3;
    return 1;
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
          <mark>{userState.nickname} </mark>님의 점수는
        </TestResultUserName>
        <TestResultUserScore>
          <mark>{myScore || "0"}/100</mark> 입니다!
        </TestResultUserScore>
        <TestResultUserRecommand>
          {recommendStep(myScore)}
        </TestResultUserRecommand>
        <TestResultNavBtn
          onClick={() => {
            navigate(`/training/${handleClickNavBtn(myScore)}`);
          }}
        >
          서비스 바로가기
          <ArrowForwardIcon />
        </TestResultNavBtn>
      </TestResultWrap>
    </TestResultContainer>
  );
}
