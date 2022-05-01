import styled from "styled-components";

export const OverFlow = styled.div`
  overflow: hidden;
`;

export const SlideContainer = styled.div`
  width: ${(props) => props.w};
  transform: ${(props) => props.transform};
  transition: ${(props) => props.transition};
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SlideInner = styled.div`
  width: 100%;
  float: left;
`;
export const SlideItem = styled.div`
  width: 100vw;
  @media only screen and (min-width: 1024px) {
    width: 1024px;
  }
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
  margin-top: 20px;
`;
export const PrevBtn = styled(Btn)``;
export const NextBtn = styled(Btn)``;
