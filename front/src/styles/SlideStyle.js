import styled from "styled-components";

export const OverFlow = styled.div`
  overflow: hidden;
`;

export const SlideContainer = styled.div`
  width: ${(props) => props.width};
  transform: ${(props) => props.transform};
  transition: ${(props) => props.transition};
  /* transform 0.5s; */
`;
export const SlideInner = styled.div`
  width: 100vw;
  float: left;
`;
export const SlideItem = styled.div`
  width: 100%;
`;

export const PrevBtn = styled.button``;
export const NextBtn = styled.button``;
