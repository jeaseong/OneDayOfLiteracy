import { useRef, useEffect, useState } from "react";
import Slide from "components/Slide/Slide";
import { Img } from "styles/Components/ComponentStyle";
import {
  HomeContainer,
  FullBanner,
  Homepage,
  Dot,
  DotsBox,
  Dots,
  HomeTitle,
  HomeContents,
  TextContent,
  TextTitle,
  TextParagraph,
  TextEmphasize,
  GraphBox,
} from "styles/Home/HomeStyle";
import { img } from "utils/imgImport";

import PisaTop15BarCountries from "./PisaTop15Countries";
import PisaGdpScatter from "./PisaGdpScatter";
import PisaEmployee from "./PisaEmployee";
import PisaSubjectScoreBar from "./PisaSubjectsScoreBar";

const BANNERS = [
  <Img url={img.banner1} alt={"banner1"} />,
  <Img url={img.banner2} alt={"banner2"} />,
  <Img url={img.banner3} alt={"banner3"} />,
];

function Home() {
  const fullpageRef = useRef();
  const [scrollIndex, setScrollIndex] = useState(1);
  // const [dots, setDots] = useState([]);
  const dotsRef = useRef();
  const dotsLength = fullpageRef.current?.childNodes.length;
  const dotsIndex = Array.from({ length: dotsLength - 1 }, (_, i) => i + 1);
  const bannerHeight = 239;
  // let dots = [];
  // dotsIndex.map((index) =>
  //   dots.push(
  //     `<Dot num=${index} scrollIndex=${scrollIndex} key=${index}></Dot>`
  //   )
  // );
  // const data = dots.join("");

  const wheelHandler = (e) => {
    e.preventDefault();
    const { deltaY } = e;
    const { scrollTop } = fullpageRef.current;
    const pageHeight = window.innerHeight;

    if (deltaY > 0) {
      // 스크롤 내릴때
      if (scrollTop >= 0 && scrollTop < pageHeight) {
        // 0 -> 1
        scroll(pageHeight);
        setScrollIndex(2);
      } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
        // // 1 -> 2
        scroll(scrollTop + pageHeight);
        setScrollIndex(3);
      } else if (scrollTop >= pageHeight * 2 && scrollTop < pageHeight * 3) {
        // 2 -> 3
        scroll(scrollTop + pageHeight);
        setScrollIndex(4);
      } else if (scrollTop >= pageHeight * 3 && scrollTop < pageHeight * 4) {
        // 3 -> 4
        scroll(scrollTop + pageHeight);
        setScrollIndex(5);
      } else if (scrollTop >= pageHeight * 4 && scrollTop < pageHeight * 5) {
        // 4 -> 5
        scroll(scrollTop + pageHeight);
        setScrollIndex(6);
      } else if (scrollTop >= pageHeight * 5 && scrollTop < pageHeight * 6) {
        // 5 -> 6
        scroll(scrollTop + pageHeight);
        setScrollIndex(7);
      }
    } else {
      // 스크롤 올릴때
      if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
        // 1 -> 0
        console.log("scrollTop", scrollTop);
        console.log("pageHeight", pageHeight);
        scroll(0);
        setScrollIndex(1);
      } else if (scrollTop >= pageHeight * 2 && scrollTop < pageHeight * 3) {
        // 2 -> 1
        console.log("scrollTop", scrollTop);
        console.log("pageHeight", pageHeight);
        scroll(pageHeight);
        setScrollIndex(2);
      } else if (scrollTop >= pageHeight * 3 && scrollTop < pageHeight * 4) {
        // 3 -> 2
        console.log("scrollTop", scrollTop);
        console.log("pageHeight", pageHeight);
        scroll(pageHeight * 2);
        setScrollIndex(3);
      } else if (scrollTop >= pageHeight * 4 && scrollTop < pageHeight * 5) {
        // 4 -> 3
        console.log("scrollTop", scrollTop);
        console.log("pageHeight", pageHeight);
        scroll(pageHeight * 3);
        setScrollIndex(4);
      } else if (
        scrollTop >= pageHeight * 5 &&
        scrollTop < pageHeight * 6 - 80
      ) {
        // 5 -> 4
        console.log("5->4");
        console.log("scrollTop", scrollTop);
        console.log("pageHeight", pageHeight);
        scroll(pageHeight * 4);
        setScrollIndex(5);
      } else if (scrollTop >= pageHeight * 6 - 80) {
        // 6 -> 5
        console.log("scrollTop", scrollTop);
        console.log("pageHeight", pageHeight);

        scroll(pageHeight * 5);
        console.log("scrollTop", scrollTop);
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

  return (
    <HomeContainer ref={fullpageRef}>
      <FullBanner>
        <Slide elements={BANNERS} />
      </FullBanner>
      <DotsBox>
        <Dots ref={dotsRef}>
          {dotsIndex.map((index) => {
            return (
              <Dot key={index} num={index} scrollIndex={scrollIndex}></Dot>
            );
          })}
        </Dots>
      </DotsBox>
      <Homepage>
        <HomeTitle>
          <TextEmphasize>PISA</TextEmphasize> 란 ?
        </HomeTitle>
        <HomeContents>
          <TextContent>
            <TextTitle>PISA란 OECD 국제 학력평가 프로그램입니다.</TextTitle>
            <TextParagraph>
              3년에 한번 OECD 회원국가의 15세 아동을 대상으로 실생활의 문제를
              해결하는 <TextEmphasize>읽기, 수학, 과학</TextEmphasize> 능력을
              측정합니다.
            </TextParagraph>
            <TextParagraph>
              시험 형식이 정말 실생활에 사용되는 문제라는 게 기존의 시험과
              달라요.
            </TextParagraph>
            <TextParagraph>
              PISA의 창시자는 데이터를 통해
              <TextEmphasize>더 나은 교육</TextEmphasize>을 제공하고, 학생이
              미래에 <TextEmphasize>경제 활동</TextEmphasize>을 잘 할 수 있는지
              알아보기 위해 PISA를 만들었다고 합니다.
            </TextParagraph>
          </TextContent>
          <GraphBox>
            <img
              alt="pisa"
              style={{ borderRadius: 10, width: 400 }}
              src={`${process.env.PUBLIC_URL}/assets/img/pisa_world.webp`}
            ></img>
          </GraphBox>
        </HomeContents>
      </Homepage>
      <Homepage>
        <HomeTitle>
          당신의 <TextEmphasize>문해력</TextEmphasize> 건강하십니까?
        </HomeTitle>
        <HomeContents>
          <TextContent>
            <TextTitle>
              이렇게 중요한 PISA 시험 점수의{" "}
              <TextEmphasize>세계적인 추세</TextEmphasize>를 볼까요?
            </TextTitle>
            <TextParagraph>
              pisa 평균점수가 가장 높은
              <TextEmphasize> 15개 국가의 </TextEmphasize> 데이터를 연도별로
              뽑아봤습니다.
            </TextParagraph>
            <TextParagraph>
              평균적으로 0.492% 하락하는 반면
              <TextEmphasize> 한국</TextEmphasize>은
              <TextEmphasize> 7.554% 하락</TextEmphasize>하여 다른나라에 비해
              점수가 현저하게 <TextEmphasize> 떨어지고 </TextEmphasize>
              있습니다.
            </TextParagraph>
          </TextContent>
          <GraphBox>
            <PisaTop15BarCountries />
          </GraphBox>
        </HomeContents>
      </Homepage>
      <Homepage>
        <HomeTitle>우리나라 PISA 점수는?</HomeTitle>
        <HomeContents>
          <TextContent>
            <TextTitle>
              우리나라의 <TextEmphasize>과목별 점수</TextEmphasize>를 좀 더
              들여다 보겠습니다.
            </TextTitle>
            <TextParagraph>
              수학이나 과학에 비해
              <TextEmphasize> 읽기 점수 </TextEmphasize> 가 더 큰 폭으로
              떨어지는 걸 볼 수 있습니다.
            </TextParagraph>
          </TextContent>
          <GraphBox>
            <PisaSubjectScoreBar></PisaSubjectScoreBar>
          </GraphBox>
        </HomeContents>
      </Homepage>
      <Homepage>
        <HomeTitle>문해력은 우리 삶에 어떤 영향을 미칠까요?</HomeTitle>
        <HomeContents>
          <TextContent>
            <TextTitle>
              77 개국의 pisa 점수와 <TextEmphasize>GDP</TextEmphasize> 의
              상관관계를 알아봤습니다.
            </TextTitle>
            <TextParagraph>
              Pisa 점수가 올라갈수록 GDP도 올라간다는 것을 확인했습니다.
            </TextParagraph>
            <TextParagraph>
              Pisa를 통해 정말 학생들의 미래{" "}
              <TextEmphasize>경제활동 가능성</TextEmphasize>을 볼 수 있을 것
              같습니다.
            </TextParagraph>
          </TextContent>
          <GraphBox>
            <PisaGdpScatter></PisaGdpScatter>
          </GraphBox>
        </HomeContents>
      </Homepage>
      <Homepage>
        <HomeTitle>고용률과 문해력의 상관관계</HomeTitle>
        <HomeContents>
          <TextContent>
            <TextTitle>
              77 개국의 pisa 점수와 <TextEmphasize>고용률</TextEmphasize> 의
              상관관계도 알아봤습니다.
            </TextTitle>
            <TextParagraph>
              고용률과 문해력의 상관관계 역시 유의미하게 나타났습니다.
            </TextParagraph>
            <TextParagraph>
              GDP와 고용률 모두와 상관관계가 있지만 문해력은 점점 감소하고
              있습니다.
            </TextParagraph>
          </TextContent>
          <GraphBox>
            <PisaEmployee></PisaEmployee>
          </GraphBox>
        </HomeContents>
      </Homepage>
      <Homepage>
        <HomeTitle>고용률과 문해력의 상관관계</HomeTitle>
        <HomeContents>
          <TextContent>
            <TextTitle>
              77 개국의 pisa 점수와 <TextEmphasize>고용률</TextEmphasize> 의
              상관관계도 알아봤습니다.
            </TextTitle>
            <TextParagraph>
              고용률과 문해력의 상관관계 역시 유의미하게 나타났습니다.
            </TextParagraph>
            <TextParagraph>
              GDP와 고용률 모두와 상관관계가 있지만 문해력은 점점 감소하고
              있습니다.
            </TextParagraph>
          </TextContent>
          <GraphBox>
            <PisaEmployee></PisaEmployee>
          </GraphBox>
        </HomeContents>
      </Homepage>
    </HomeContainer>
  );
}

export default Home;
