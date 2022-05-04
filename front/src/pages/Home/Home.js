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
} from "../../styles/Home/HomeStyle";
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
  // const [dots, setDots] = useState([]);
  const dotsRef = useRef();
  const dotsLength = fullpageRef.current?.childNodes.length;
  const dotsIndex = Array.from({ length: dotsLength - 2 }, (_, i) => i + 1);

  // let dots = [];
  // dotsIndex.map((index) =>
  //   dots.push(
  //     `<Dot num=${index} scrollIndex=${scrollIndex} key=${index}></Dot>`
  //   )
  // );
  // const data = dots.join("");
  // console.log("data", data);

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
      } else if (
        scrollTop >= pageHeight * 3 + bannerHeight &&
        scrollTop < pageHeight * 4 + bannerHeight
      ) {
        // 4 -> 5
        scroll(scrollTop + pageHeight);
        setScrollIndex(5);
      } else if (
        scrollTop >= pageHeight * 4 + bannerHeight &&
        scrollTop < pageHeight * 5 + bannerHeight
      ) {
        // 5 -> 6
        scroll(scrollTop + pageHeight);
        setScrollIndex(6);
      } else if (
        scrollTop >= pageHeight * 5 + bannerHeight &&
        scrollTop < pageHeight * 6 + bannerHeight
      ) {
        // 6 -> 7
        scroll(scrollTop + pageHeight);
        setScrollIndex(7);
      }
    } else {
      // 스크롤 올릴때
      if (scrollTop >= bannerHeight && scrollTop < pageHeight + bannerHeight) {
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
      } else if (
        scrollTop >= pageHeight * 3 + bannerHeight &&
        scrollTop < pageHeight * 4 + bannerHeight
      ) {
        // 4 -> 3
        scroll(pageHeight * 2 + bannerHeight);
        setScrollIndex(3);
      } else if (
        scrollTop >= pageHeight * 4 + bannerHeight &&
        scrollTop < pageHeight * 5 + bannerHeight
      ) {
        // 5 -> 4
        scroll(pageHeight * 3 + bannerHeight);
        setScrollIndex(4);
      } else if (
        scrollTop >= pageHeight * 5 + bannerHeight &&
        scrollTop < pageHeight * 6 + bannerHeight
      ) {
        // 6 -> 5
        scroll(pageHeight * 4 + bannerHeight);
        setScrollIndex(5);
      } else if (
        scrollTop >= pageHeight * 6 + bannerHeight &&
        scrollTop < pageHeight * 7 + bannerHeight
      ) {
        // 7 -> 6
        scroll(pageHeight * 5 + bannerHeight);
        setScrollIndex(6);
      }
    }
  };

  const scroll = (top) => {
    fullpageRef.current.scrollTo({
      top: top,
      left: 0,
      behavior: "smooth",
    });
  };

  // const dotsRendering = () => {
  //   // const dots = [];
  //   for (let i = 1; i < dotsLength - 1; i++) {
  //     dots.push(<Dot num={i} scrollIndex={scrollIndex}></Dot>);
  //   }
  //   return dots;
  // };

  // const dotsRendering = () => {
  //   const dotsRefCurrent = dotsRef.current;
  //   dotsRefCurrent.innerHTML = (
  //     <div dangerouslySetInnerHTML={{ __html: data }}></div>
  //   );
  // };

  useEffect(() => {
    // setDots((prev) => {
    //   const dotsArray = prev;
    //   for (let i = 1; i < dotsLength - 1; i++) {
    //     dotsArray.push(<Dot num={i} scrollIndex={scrollIndex}></Dot>);
    //   }
    //   return dotsArray;
    // });
    // dotsIndex = Array.from({ length: dotsLength - 2 }, (_, i) => i + 1);
    // dotsRef.current.children = dotsIndex.map((index) => (
    //   <Dot num={index} scrollIndex={scrollIndex} key={index}></Dot>
    // ));
    // const dotsRefCurrent = dotsRef.current;
    const fullPageRefCurrent = fullpageRef.current;
    fullPageRefCurrent?.addEventListener("wheel", wheelHandler);
    // dotsRefCurrent?.addEventListener("wheel", dotsRendering);
    // const dotsRefCurrent = dotsRef.current;
    // dotsRefCurrent.innerHTML = (
    //   <div dangerouslySetInnerHTML={{ __html: data }}></div>
    // );
    return () => {
      fullPageRefCurrent?.removeEventListener("wheel", wheelHandler);
      // dotsRefCurrent?.removeEventListener("wheel", dotsRendering);
    };
  }, []);

  // console.log(dotsRef);
  // console.log(dotsIndex);

  return (
    <HomeContainer ref={fullpageRef}>
      <Slide elements={BANNERS} />
      <DotsBox>
        <Dots ref={dotsRef}>
          {dotsIndex.map((index) => {
            return (
              <Dot key={index} num={index} scrollIndex={scrollIndex}></Dot>
            );
          })}
        </Dots>
      </DotsBox>
      <Homepage bgcolor="#f7f6cf">
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
      <Homepage bgcolor="#b6d8f2">
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
      <Homepage bgcolor="#f4cfdf">
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
      <Homepage bgcolor="#f4cfdf">
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
      <Homepage bgcolor="#f4cfdf">
        <ContentsContainer>
          <HomeTitle>5</HomeTitle>
          <HomeContents>
            <TextContent>Pisa top 15</TextContent>
            <GraphBox>
              <PisaTop15Bar data={pisaTop15}></PisaTop15Bar>
            </GraphBox>
          </HomeContents>
        </ContentsContainer>
      </Homepage>
      <Homepage bgcolor="#f4cfdf">
        <ContentsContainer>
          <HomeTitle>6</HomeTitle>
          <HomeContents>
            <TextContent>Pisa top 15</TextContent>
            <GraphBox>
              <PisaTop15Bar data={pisaTop15}></PisaTop15Bar>
            </GraphBox>
          </HomeContents>
        </ContentsContainer>
      </Homepage>
      <Homepage bgcolor="#f4cfdf">
        <ContentsContainer>
          <HomeTitle>7</HomeTitle>
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
