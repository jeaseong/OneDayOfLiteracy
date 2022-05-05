import styled from "styled-components";

export const ErrorContainer = styled.div`
  width: 100%;
  max-width: 55%;
  padding: 0 6%;
  margin: 5% auto;
  text-align: center;
  color: #312517;
`;

export const ErrorBox = styled.div`
  box-shadow: 0px 0 8px #312517;
  padding: 12% 7%;
`;

export const ErrorCode = styled.h2`
  color: #312517;
  display: inline;
  &:nth-child(2) {
    color: #c48f5a;
  }
`;
export const ErrorHeader = styled.div`
  color: #c48f5a;
  font-size: 100px;
`;

export const ErrorMessage = styled.h5`
  color: #c48f5a;
  font-size: 20px;
  margin-top: 30px;
`;
