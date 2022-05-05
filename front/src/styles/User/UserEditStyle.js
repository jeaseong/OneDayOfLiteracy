import styled from "styled-components";
import { Button, FlexBox, InputBox } from "styles/Components/CommonStyle";
import { CardContent } from "styles/User/UserInfoStyle";

export const EditContainer = styled(CardContent)`
  display: flex;
  height: 100%;
`;

export const EditBox = styled.div`
  width: 50%;
  height: 100%;
`;

export const EditIntroduceBox = styled.div`
  width: 50%;
`;
export const EditInput = styled(InputBox)`
  width: 90%;
  height: 20px;
  margin: 0 auto;
`;

export const EditInputBox = styled.div`
  margin-bottom: ${(props) => (props.types || props.kakao ? 0 : "16px")};

  &:first-child {
    margin-top: 1.1rem;
  }
`;

export const EditIntroduceInput = styled.textarea`
  width: 90%;
  height: 85%;
  padding: 10px;
  margin: 1.1rem 0 0 0;
  border: solid 2px #c99c6e;
  border-radius: 8px;
  font-size: 1.3rem;
`;

export const ConfirmButtonBox = styled(FlexBox)`
  justify-content: center;
  margin-top: ${(props) => (props.types || props.kakao ? "5px" : "21px")};
`;

export const ConfirmButton = styled(Button)`
  margin: 10px 7px;
  width: 20%;
`;
