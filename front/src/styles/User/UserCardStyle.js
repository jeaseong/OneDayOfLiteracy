import styled from "styled-components";
import { Button, FlexBoxCenter } from "styles/Components/CommonStyle";

export const CardContainer = styled.section`
  flex-direction: column;
  width: 100%;
  height: 250px;
  padding: 10px;
  border-bottom: solid 1px rgba(0, 0, 0, 0.2);
`;
export const CardBox = styled.div``;

export const CardHeader = styled(FlexBoxCenter)``;

export const ProfileImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  /* box-shadow: 5px 5px 10px grey; */
`;

export const ChangeButton = styled(Button)`
  margin: 10px auto;
`;

export const ProfileChangeBox = styled(FlexBoxCenter)`
  width: 100%;
  height: 20%;
`;
