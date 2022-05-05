import styled from "styled-components";

export const HomeContainer = styled.section`
  width: 100%;
  background-color: #ffffff;
  height: 100vh;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const FullBanner = styled.div`
  height: calc(100vh - 100px);
  overflow: hidden;
  background-color: #ffffff;
  box-sizing: border-box;
`;

export const HomeWrap = styled.div``;

export const Dot = styled.div`
  width: ${(props) => (props.scrollIndex === props.num ? "12px" : "5px")};
  height: ${(props) => (props.scrollIndex === props.num ? "12px" : "5px")};
  border-radius: 60%;
  background-color: ${(props) =>
    props.scrollIndex === props.num ? "#c48f5a" : "#c2a07f"};
  transition-duration: 1000;
  transition: background-color 0.5s;
`;

export const DotsBox = styled.div`
  position: fixed;
  top: 50%;
  right: 7vw;
`;

export const Dots = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 20px;
  height: 80px;
`;

export const Homepage = styled.div`
  // background-color: ${(props) => props.bgcolor};
  background-color: #f5efea;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContentsContainer = styled.div`
  max-width: 1024px;
  min-height: 50vh;
  background-color: #dcd0c8;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 7%;
  padding: 5%;
  box-shadow: 0 0 8px #dcd0c8;
  @media only screen and (max-width: 400px) {
    min-height: 60vh;
    margin-bottom: 30%;
    padding: 5%;
  }
`;

export const HomeTitle = styled.h1`
  height: 8vh;
  font-size: 36px;
  // color: #c48f5a;
  margin: 20px 0;
`;

export const HomeContents = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 70vw;
  @media only screen and (max-width: 400px) {
    flex-direction: column;
  }
`;

export const TextContent = styled.div`
  font-size: 20px;
`;

export const GraphBox = styled.div`
  // border: 1px solid black;
  width: 45vw;
  height: 35vh;
`;
