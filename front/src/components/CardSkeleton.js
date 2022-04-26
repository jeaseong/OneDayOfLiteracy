import React from "react";
import {
  Skeletonontainer,
  SkeletonImg,
  SkeletonText,
} from "../styles/CardSkeletonStyle";

export default function CardSkeleton() {
  return (
    <Skeletonontainer>
      <SkeletonImg />
      <SkeletonText />
      <SkeletonText />
    </Skeletonontainer>
  );
}
