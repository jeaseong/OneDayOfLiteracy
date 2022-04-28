import React, { useState } from "react";
import {
  OverFlow,
  SlideContainer,
  SlideInner,
  SlideItem,
  PrevBtn,
  NextBtn,
} from "../../styles/SlideStyle";
const initTransition = "transform 0.5s";
export default function Slide({ elements }) {
  const [curIndex, setCurIndex] = useState(0);
  const [curTransition, setCurTransition] = useState(initTransition);
  const ORIGINSIZE = elements.length;
  const infiniteElements = [elements[ORIGINSIZE - 1], ...elements, elements[0]];
  const NEWSIZE = infiniteElements.length;

  const replaceSlide = (index) => {
    setTimeout(() => {
      setCurTransition("");
      setCurIndex(index);
    }, 500);
  };

  const handleSlide = (index) => {
    setCurIndex(index);
    if (index - 2 < 0) {
      index += ORIGINSIZE;
      replaceSlide(index);
    } else if (index - 2 >= ORIGINSIZE) {
      index -= ORIGINSIZE;
      replaceSlide(index);
    }
    setCurTransition(initTransition);
  };

  return (
    <>
      <OverFlow>
        <SlideContainer
          width={`${NEWSIZE * 100}vw`}
          transform={`translate(${-100 * curIndex}vw)`}
          transition={curTransition}
        >
          {infiniteElements.map((e, index) => (
            <SlideInner key={index}>
              <SlideItem>
                <img src={e} alt="사진" />
              </SlideItem>
            </SlideInner>
          ))}
        </SlideContainer>
      </OverFlow>
      <PrevBtn onClick={() => handleSlide(curIndex - 1)}>뒤</PrevBtn>
      <NextBtn onClick={() => handleSlide(curIndex + 1)}>앞</NextBtn>
    </>
  );
}
