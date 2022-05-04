import styled from "styled-components";
import { HeadingTwo } from "../Components/CommonStyle";

export const MainContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 1024px;
  padding: 0 20px;
  margin: 0 auto;
`;

export const MainHeadingTwo = styled(HeadingTwo)`
  margin: 20px 0;
`;
