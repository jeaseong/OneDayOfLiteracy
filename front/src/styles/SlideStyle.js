import styled from "styled-components";

export const OverFlow = styled.div`
  overflow: hidden;
`;

export const SlideContainer = styled.div`
  width: ${(props) => props.width};
  transform: ${(props) => props.transform};
  transition: ${(props) => props.transition};
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SlideInner = styled.div`
  width: 100vw;
  float: left;
`;
export const SlideItem = styled.div`
  width: 100%;
`;

export const Btn = styled.button`
  border: none;
  background: none;
  color: #c48f5a;
  font-size: 20px;
`;

export const BottonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const PrevBtn = styled(Btn)``;
export const NextBtn = styled(Btn)``;
