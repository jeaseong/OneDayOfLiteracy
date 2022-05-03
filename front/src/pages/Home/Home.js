import Slide from "../../components/Slide/Slide";
import { Img } from "../../styles/Components/ComponentStyle";
import {
  HomeContainer,
  Homepage,
  ContentsContainer,
  Dot,
  DotsBox,
  Dots,
  HomeTitle,
  HomeContents,
  TextContent,
  GraphBox,
} from "../../styles/HomeStyle";
import { img } from "../../utils/imgImport";
import { useRef, useEffect, useState } from "react";
const BANNERS = [
  <Img url={img.banner1} alt={"banner1"} />,
  <Img url={img.banner2} alt={"banner2"} />,
  <Img url={img.banner3} alt={"banner3"} />,
];

const bannerHeight = 403;
function Home() {
  const fullpageRef = useRef();
  const [scrollIndex, setScrollIndex] = useState(1);
  console.log(fullpageRef);
  useEffect(() => {
    const fullPageRefCurrent = fullpageRef.current;
    const wheelHandler = (e) => {
      e.preventDefault();
      const { deltaY } = e;
      const { scrollTop } = fullpageRef.current;
      const pageHeight = window.innerHeight;

      if (deltaY > 0) {
        // 스크롤 내릴때
        if (scrollTop >= 0 && scrollTop < bannerHeight) {
          // 0 -> 1
          fullpageRef.current.scrollTo({
            top: bannerHeight,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(1);
        } else if (
          scrollTop >= bannerHeight &&
          scrollTop < pageHeight + bannerHeight
        ) {
          // 1 -> 2
          fullpageRef.current.scrollTo({
            top: scrollTop + pageHeight,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(2);
        } else if (
          scrollTop >= pageHeight + bannerHeight &&
          scrollTop < pageHeight * 2 + bannerHeight
        ) {
          // 2 -> 3
          fullpageRef.current.scrollTo({
            top: scrollTop + pageHeight,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(3);
        }
      } else {
        // 스크롤 올릴때
        if (
          scrollTop >= bannerHeight &&
          scrollTop < pageHeight + bannerHeight
        ) {
          // 1 -> 0
          fullpageRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(1);
        } else if (
          scrollTop >= pageHeight + bannerHeight &&
          scrollTop < pageHeight * 2 + bannerHeight
        ) {
          // 2 -> 1
          fullpageRef.current.scrollTo({
            top: bannerHeight,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(1);
        } else if (scrollTop >= pageHeight * 2 + bannerHeight) {
          // 3 -> 2
          fullpageRef.current.scrollTo({
            top: pageHeight + bannerHeight,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(2);
        }
      }
    };
    fullPageRefCurrent?.addEventListener("wheel", wheelHandler);
    return () => {
      fullPageRefCurrent?.removeEventListener("wheel", wheelHandler);
    };
  }, []);
  return (
    <HomeContainer ref={fullpageRef}>
      <Slide elements={BANNERS} />
      <DotsBox>
        <Dots>
          <Dot num={1} scrollIndex={scrollIndex}></Dot>
          <Dot num={2} scrollIndex={scrollIndex}></Dot>
          <Dot num={3} scrollIndex={scrollIndex}></Dot>
        </Dots>
      </DotsBox>
      <Homepage bgcolor={"#f7f6cf"}>
        <ContentsContainer>
          <HomeTitle>당신의 문해력 건강하십니까?</HomeTitle>
          <HomeContents>
            <TextContent>우리나라 Pisa 점수 데이터</TextContent>
            <GraphBox></GraphBox>
          </HomeContents>
        </ContentsContainer>
      </Homepage>
      <Homepage bgcolor={"#b6d8f2"}>
        <ContentsContainer>
          <HomeTitle>당신의 문해력 건강하십니까?</HomeTitle>
          <HomeContents>
            <TextContent>우리나라 Pisa 점수 데이터</TextContent>
            <GraphBox></GraphBox>
          </HomeContents>
        </ContentsContainer>
      </Homepage>
      <Homepage bgcolor={"#f4cfdf"}>
        <ContentsContainer>
          <HomeTitle>당신의 문해력 건강하십니까?</HomeTitle>
          <HomeContents>
            <TextContent>우리나라 Pisa 점수 데이터</TextContent>
            <GraphBox></GraphBox>
          </HomeContents>
        </ContentsContainer>
      </Homepage>
    </HomeContainer>
  );
}

export default Home;
