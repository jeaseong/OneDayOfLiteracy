import styled from "styled-components";
import {
  FlexBox,
  FlexBoxCenter,
  HeadingTwo,
} from "styles/Components/CommonStyle";
export const CardContent = styled.div`
  width: 70%;
  height: 100%;
`;

export const CardIntroduce = styled.div`
  word-break: break-all;
  width: 100%;
  height: 60%;
`;

export const CardLikeCountBox = styled(FlexBoxCenter)`
  height: 80%;
`;

export const CardLikePost = styled(FlexBox)`
  flex-direction: column;
  align-items: center;
  width: 50%;
  height: 100%;
`;

export const CardMyInfo = styled(FlexBox)`
  display: flex;
  word-break: break-all;
  width: 100%;
  height: calc(40% - 20px);
`;

export const ProfileIntroduce = styled.p`
  font-size: 1.4rem;
`;

export const ProfileNickName = styled(HeadingTwo)`
  color: black;
  font-size: 2rem;
`;

export const ProfilePostCount = styled(HeadingTwo)`
  margin-top: 6px;
  text-align: center;
`;

export const ProfileTitleBox = styled(FlexBox)`
  align-items: center;
  margin-top: 20px;
`;
