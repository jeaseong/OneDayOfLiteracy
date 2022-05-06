import styled from "styled-components";
import { FlexBox, HeadingTwo } from "styles/Components/CommonStyle";

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardIntroduce = styled.div`
  word-break: break-all;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const UserLevelImg = styled.img`
  margin-right: 5px;
`;

export const CardLikeCountBox = styled.span`
  cursor: pointer;
`;

export const CardLikePost = styled(FlexBox)`
  flex-direction: column;
  align-items: center;
`;

export const CardMyInfo = styled(FlexBox)``;

export const ProfileIntroduce = styled.p`
  font-size: 16px;
  @media only screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const ProfileNickName = styled(HeadingTwo)`
  color: inherit;
  font-size: 20px;

  @media only screen and (min-width: 768px) {
    font-size: 28px;
  }
`;

export const ProfilePostCount = styled(HeadingTwo)`
  margin-top: 6px;
  text-align: center;
`;

export const ProfileTitleBox = styled(FlexBox)`
  align-items: center;
  box-sizing: border-box;

  margin-bottom: 10px;
`;

export const ProfileExp = styled.progress`
  width: 100px;
`;

export const ProfilecurExp = styled.p`
  width: 100px;
`;
