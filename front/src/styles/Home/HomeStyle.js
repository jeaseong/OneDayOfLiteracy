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
  background-color: #f5efea;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContentsContainer = styled.div`
  max-width: 1024px;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  // box-shadow: 0 0 8px #dcd0c8;
  @media only screen and (max-width: 400px) {
    width: 100%;
    min-height: 60vh;
    margin-bottom: 30%;
    padding: 5%;
  }
`;

export const HomeTitle = styled.h1`
  height: 8vh;
  font-size: 36px;
  margin: 20px 0;
  @media only screen and (max-width: 400px) {
    font-size: 1.6rem;
  }
`;

export const HomeContents = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1024px;
  @media only screen and (max-width: 400px) {
    flex-direction: column;
  }
`;

export const TextContent = styled.div`
  font-size: 1.4rem;
  line-height: 2rem;
  width: 32%;
  background-color: white;
  padding: 2rem;
  border-radius: 2rem;
`;

export const TextEmphasize = styled.span`
  color: #c48f5a;
`;

export const TextParagraph = styled.p`
  font-size: 1.2rem;
  line-height: 2rem;
  margin-bottom: 1.4rem;
  word-break: keep-all;
  font-weight: lighter;
`;

export const TextTitle = styled.h1`
  font-size: 1.5rem;
  line-height: 2.5rem;
  margin-bottom: 1.6rem;
  word-break: keep-all;
`;

export const GraphBox = styled.div`
  width: 60%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 400px) {
    width: 100%;
  }
`;

export const CountryButton = styled.button`
  width: 28px;
  height: 21px;
  margin: 1rem 0.5rem 0 0;
  padding: 0;
  // border-radius: 5px;
  box-shadow: 2px 2px 2px #503d3f;
  transition-duration: 0.5s;
  &:hover {
    cursor: pointer;
  }
  &:active {
    margin-top: 14px;
    margin-left: 1px;
    box-shadow: none;
  }
`;
export const Buttons = styled.div`
  display: flex;
  justify-content: center;
`;
