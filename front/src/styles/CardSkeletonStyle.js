import styled, { keyframes } from "styled-components";

const loading = keyframes`
  0% {
    transform: translateX(0);
  }
  50%,
  100% {
    transform: translateX(460px);
  }
`;

export const Skeletonontainer = styled.div`
  width: 200px;
  height: 260px;
  padding: 12px;
  border-radius: 12px;
`;
export const SkeletonImg = styled.div`
  width: 100%;
  height: 100px;
  background-color: #eaeaea;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 30px;
    height: 100%;
    background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);
    animation: ${loading} 2s infinite linear;
  }
`;
export const SkeletonText = styled.div`
  width: 50%;
  height: 30px;
  background-color: #eaeaea;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 30px;
    height: 100%;
    background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);
    animation: ${loading} 2s infinite linear;
  }
`;
