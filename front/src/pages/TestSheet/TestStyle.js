import styled from "styled-components";

export const ContainerHome = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 0 20px;
  margin: 0 auto;
  margin: 100px 0;
`;

export const WomanBook = styled.img`
  width: 300px;
  height: 400px;
  margin-bottom: 30px;
`;

export const QustionsContainer = styled.div``;

export const Question = styled.h2`
  font-weight: bold;
  font-size: 15px;
  color: #c48f5a;
  margin-bottom: 10px;
`;
export const Content = styled.p`
  font-weight: 400;
  line-height: 20px;
  margin-bottom: 10px;
`;
export const AnswerBtnContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;
export const AnswerBtn = styled.button`
  background: #ffffff;
  border: 1px solid #c48f5a;
  box-sizing: border-box;
  box-shadow: 0px 0px 10px rgba(195, 202, 254, 0.6);
  border-radius: 3px;
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

export const AnswerText = styled.p`
  line-height: 20px;
  text-align: left;
`;

export const ProcessContainer = styled.section`
  text-align: center;
`;

export const NextBtn = styled.button`
  width: 140px;
  height: 34px;
  background: #c48f5a;
  border: 1px solid #c48f5a;
  box-sizing: border-box;
  border-radius: 30px;
  color: #ffffff;
  text-align: center;
`;
