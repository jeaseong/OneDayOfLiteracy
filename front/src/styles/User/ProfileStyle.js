import styled from "styled-components";
import {
  Button,
  FlexBox,
  FlexBoxCenter,
  HeadingTwo,
} from "styles/Components/CommonStyle";

export const MyPageContainer = styled(FlexBox)`
  flex-direction: column;
  max-width: 1024px;
  margin: 0 auto;
`;

export const MyPostContainer = styled(FlexBox)`
  width: 100%;
  height: 100%;
  margin: 25px 0;
`;

export const CardContainer = styled(FlexBoxCenter)`
  flex-direction: column;
  height: 250px;
  padding-bottom: 15px;
  border-bottom: solid 1px rgba(0, 0, 0, 0.2);
`;

export const CardBox = styled(FlexBox)`
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const CardHeader = styled(FlexBoxCenter)`
  flex-direction: column;
  width: 30%;
  height: 100%;
`;

export const CardContent = styled.div`
  width: 100%;
  height: 100%;
`;

export const CardIntroduce = styled.div`
  word-break: break-all;
  width: 100%;
  height: 60%;
`;

export const CardMyInfo = styled(FlexBox)`
  display: flex;
  word-break: break-all;
  width: 100%;
  height: calc(40% - 20px);
`;

export const CardLikePost = styled(FlexBox)`
  flex-direction: column;
  align-items: center;
  width: 50%;
  height: 100%;
`;

export const CardLikeCountBox = styled(FlexBoxCenter)`
  height: 80%;
`;

export const ProfilePostCount = styled(HeadingTwo)`
  margin-top: 6px;
  text-align: center;
`;

export const ProfileNickName = styled(HeadingTwo)`
  color: black;
  font-size: 2rem;
`;

export const ProfileIntroduce = styled.p`
  font-size: 1.4rem;
`;

export const ProfileImgBox = styled(FlexBoxCenter)`
  width: 80%;
  height: 80%;
`;

export const ProfileImg = styled.img`
  width: 80%;
  height: 100%;
  border-radius: 75%;
  box-shadow: 5px 5px 10px grey;
`;

export const ProfileChangeBox = styled(FlexBoxCenter)`
  width: 100%;
  height: 20%;
`;

export const ChangeButton = styled(Button)`
  margin: 10px auto;
`;

export const NotFoundPostImg = styled.img`
  width: 47%;
  margin: 0 auto;
`;

export const ProfileTitleBox = styled(FlexBox)`
  align-items: center;
  margin-top: 20px;
`;
