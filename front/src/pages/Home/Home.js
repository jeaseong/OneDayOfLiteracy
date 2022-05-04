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

import PisaKoreaLine from "./PisaKoreaLine";
import PisaGdpScatter from "./PisaGdpScatter";
import PisaGdpTrendLine from "./PisaGdpTrendLine";
import PisaTop15Bar from "./PisaTop15Bar";
import koreaReadingScore from "../../data/koreaReadingScore.json";
import pisaGdp from "../../data/pisaGdp.json";
import ransac from "../../data/ransac.json";
import pisaTop15 from "../../data/pisaTop15.json";

const BANNERS = [
  <Img url={img.banner1} alt={"banner1"} />,
  <Img url={img.banner2} alt={"banner2"} />,
  <Img url={img.banner3} alt={"banner3"} />,
];

const bannerHeight = 403;
function Home() {
  const fullpageRef = useRef();

  const [scrollIndex, setScrollIndex] = useState(1);

  let dotsLength = fullpageRef.current?.childNodes.length;

  const scroll = (top) => {
    fullpageRef.current.scrollTo({
      top: top,
      left: 0,
      behavior: "smooth",
    });
  };
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
          scroll(bannerHeight);
          setScrollIndex(1);
        } else if (
          scrollTop >= bannerHeight &&
          scrollTop < pageHeight + bannerHeight
        ) {
          // // 1 -> 2
          scroll(scrollTop + pageHeight);
          setScrollIndex(2);
        } else if (
          scrollTop >= pageHeight + bannerHeight &&
          scrollTop < pageHeight * 2 + bannerHeight
        ) {
          // 2 -> 3
          scroll(scrollTop + pageHeight);
          setScrollIndex(3);
        } else if (
          scrollTop >= pageHeight * 2 + bannerHeight &&
          scrollTop < pageHeight * 3 + bannerHeight
        ) {
          // 3 -> 4
          scroll(scrollTop + pageHeight);
          setScrollIndex(4);
        }
      } else {
        // 스크롤 올릴때
        if (
          scrollTop >= bannerHeight &&
          scrollTop < pageHeight + bannerHeight
        ) {
          // 1 -> 0
          scroll(0);
          setScrollIndex(1);
        } else if (
          scrollTop >= pageHeight + bannerHeight &&
          scrollTop < pageHeight * 2 + bannerHeight
        ) {
          // 2 -> 1
          scroll(bannerHeight);
          setScrollIndex(1);
        } else if (
          scrollTop >= pageHeight * 2 + bannerHeight &&
          scrollTop < pageHeight * 3 + bannerHeight
        ) {
          // 3 -> 2
          scroll(pageHeight + bannerHeight);
          setScrollIndex(2);
        } else if (scrollTop >= pageHeight * 3 + bannerHeight) {
          // 4 -> 3
          scroll(pageHeight * 2 + bannerHeight);
          setScrollIndex(3);
        }
      }
    };
    fullPageRefCurrent?.addEventListener("wheel", wheelHandler);
    return () => {
      fullPageRefCurrent?.removeEventListener("wheel", wheelHandler);
    };
  }, []);

  const dotsRendering = () => {
    const dots = [];
    for (let i = 1; i < dotsLength - 1; i++) {
      dots.push(<Dot num={i} scrollIndex={scrollIndex}></Dot>);
    }
    return dots;
  };

  return (
    <HomeContainer ref={fullpageRef}>
      <Slide elements={BANNERS} />
      <DotsBox>
        <Dots>{dotsRendering().map((dot) => dot)}</Dots>
      </DotsBox>
      <Homepage bgcolor={"#f7f6cf"}>
        <ContentsContainer>
          <HomeTitle>당신의 문해력 건강하십니까? 1</HomeTitle>
          <HomeContents>
            <TextContent>우리나라 Pisa 점수 데이터</TextContent>
            <GraphBox>
              <PisaKoreaLine data={koreaReadingScore}></PisaKoreaLine>
            </GraphBox>
          </HomeContents>
        </ContentsContainer>
      </Homepage>
      <Homepage bgcolor={"#b6d8f2"}>
        <ContentsContainer>
          <HomeTitle>2</HomeTitle>
          <HomeContents>
            <TextContent>Gdp와 Pisa</TextContent>
            <GraphBox>
              <PisaGdpScatter data={pisaGdp}></PisaGdpScatter>
            </GraphBox>
          </HomeContents>
        </ContentsContainer>
      </Homepage>
      <Homepage bgcolor={"#f4cfdf"}>
        <ContentsContainer>
          <HomeTitle>3</HomeTitle>
          <HomeContents>
            <TextContent>Gdp와 Pisa 추세선</TextContent>
            <GraphBox>
              <PisaGdpTrendLine data={ransac}></PisaGdpTrendLine>
            </GraphBox>
          </HomeContents>
        </ContentsContainer>
      </Homepage>
      <Homepage bgcolor={"#f4cfdf"}>
        <ContentsContainer>
          <HomeTitle>4</HomeTitle>
          <HomeContents>
            <TextContent>Pisa top 15</TextContent>
            <GraphBox>
              <PisaTop15Bar data={pisaTop15}></PisaTop15Bar>
            </GraphBox>
          </HomeContents>
        </ContentsContainer>
      </Homepage>
    </HomeContainer>
  );
}

export default Home;
