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
import { ResponsiveBar } from "@nivo/bar";
const BANNERS = [
  <Img url={img.banner1} alt={"banner1"} />,
  <Img url={img.banner2} alt={"banner2"} />,
  <Img url={img.banner3} alt={"banner3"} />,
];
const data = [
  {
    country: "AD",
    "hot dog": 12,
    "hot dogColor": "hsl(248, 70%, 50%)",
    burger: 193,
    burgerColor: "hsl(197, 70%, 50%)",
    sandwich: 196,
    sandwichColor: "hsl(340, 70%, 50%)",
    kebab: 167,
    kebabColor: "hsl(10, 70%, 50%)",
    fries: 197,
    friesColor: "hsl(306, 70%, 50%)",
    donut: 107,
    donutColor: "hsl(68, 70%, 50%)",
  },
  {
    country: "AE",
    "hot dog": 97,
    "hot dogColor": "hsl(155, 70%, 50%)",
    burger: 137,
    burgerColor: "hsl(218, 70%, 50%)",
    sandwich: 16,
    sandwichColor: "hsl(85, 70%, 50%)",
    kebab: 182,
    kebabColor: "hsl(307, 70%, 50%)",
    fries: 164,
    friesColor: "hsl(74, 70%, 50%)",
    donut: 134,
    donutColor: "hsl(96, 70%, 50%)",
  },
  {
    country: "AF",
    "hot dog": 169,
    "hot dogColor": "hsl(180, 70%, 50%)",
    burger: 2,
    burgerColor: "hsl(312, 70%, 50%)",
    sandwich: 123,
    sandwichColor: "hsl(242, 70%, 50%)",
    kebab: 134,
    kebabColor: "hsl(104, 70%, 50%)",
    fries: 103,
    friesColor: "hsl(138, 70%, 50%)",
    donut: 34,
    donutColor: "hsl(73, 70%, 50%)",
  },
  {
    country: "AG",
    "hot dog": 94,
    "hot dogColor": "hsl(237, 70%, 50%)",
    burger: 104,
    burgerColor: "hsl(167, 70%, 50%)",
    sandwich: 90,
    sandwichColor: "hsl(343, 70%, 50%)",
    kebab: 194,
    kebabColor: "hsl(303, 70%, 50%)",
    fries: 103,
    friesColor: "hsl(175, 70%, 50%)",
    donut: 120,
    donutColor: "hsl(247, 70%, 50%)",
  },
  {
    country: "AI",
    "hot dog": 197,
    "hot dogColor": "hsl(298, 70%, 50%)",
    burger: 44,
    burgerColor: "hsl(314, 70%, 50%)",
    sandwich: 189,
    sandwichColor: "hsl(301, 70%, 50%)",
    kebab: 145,
    kebabColor: "hsl(110, 70%, 50%)",
    fries: 116,
    friesColor: "hsl(324, 70%, 50%)",
    donut: 9,
    donutColor: "hsl(244, 70%, 50%)",
  },
  {
    country: "AL",
    "hot dog": 25,
    "hot dogColor": "hsl(247, 70%, 50%)",
    burger: 5,
    burgerColor: "hsl(256, 70%, 50%)",
    sandwich: 47,
    sandwichColor: "hsl(85, 70%, 50%)",
    kebab: 83,
    kebabColor: "hsl(295, 70%, 50%)",
    fries: 73,
    friesColor: "hsl(299, 70%, 50%)",
    donut: 122,
    donutColor: "hsl(352, 70%, 50%)",
  },
  {
    country: "AM",
    "hot dog": 73,
    "hot dogColor": "hsl(134, 70%, 50%)",
    burger: 5,
    burgerColor: "hsl(223, 70%, 50%)",
    sandwich: 117,
    sandwichColor: "hsl(58, 70%, 50%)",
    kebab: 80,
    kebabColor: "hsl(85, 70%, 50%)",
    fries: 3,
    friesColor: "hsl(33, 70%, 50%)",
    donut: 122,
    donutColor: "hsl(195, 70%, 50%)",
  },
];

const MyResponsiveBar = ({ data /* see data tab */ }) => (
  <ResponsiveBar
    data={data}
    keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
    indexBy="country"
    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
    padding={0.3}
    groupMode="grouped"
    reverse={true}
    valueScale={{ type: "linear" }}
    indexScale={{ type: "band", round: false }}
    colors={{ scheme: "yellow_orange_brown" }}
    defs={[
      {
        id: "dots",
        type: "patternDots",
        background: "inherit",
        color: "#38bcb2",
        size: 4,
        padding: 1,
        stagger: true,
      },
      {
        id: "lines",
        type: "patternLines",
        background: "inherit",
        color: "#eed312",
        rotation: -45,
        lineWidth: 6,
        spacing: 10,
      },
    ]}
    fill={[
      {
        match: {
          id: "fries",
        },
        id: "dots",
      },
      {
        match: {
          id: "sandwich",
        },
        id: "lines",
      },
    ]}
    borderColor={{
      from: "color",
      modifiers: [["opacity", "0.3"]],
    }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "country",
      legendPosition: "middle",
      legendOffset: 32,
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "food",
      legendPosition: "middle",
      legendOffset: -40,
    }}
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor={{
      from: "color",
      modifiers: [["darker", 1.6]],
    }}
    legends={[
      {
        dataFrom: "keys",
        anchor: "bottom-right",
        direction: "column",
        justify: false,
        translateX: 120,
        translateY: 0,
        itemsSpacing: 2,
        itemWidth: 100,
        itemHeight: 20,
        itemDirection: "left-to-right",
        itemOpacity: 0.85,
        symbolSize: 20,
        effects: [
          {
            on: "hover",
            style: {
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
    role="application"
    ariaLabel="Nivo bar chart demo"
    barAriaLabel={function (e) {
      return e.id + ": " + e.formattedValue + " in country: " + e.indexValue;
    }}
  />
);

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
            <GraphBox>
              <MyResponsiveBar data={data}></MyResponsiveBar>
            </GraphBox>
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
