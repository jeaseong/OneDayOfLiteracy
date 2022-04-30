import React, { useRef, useEffect, useState } from "react";
import PostingHeader from "./PostingHeader";
import PostingContents from "./PostingContents";
import PostingTag from "./PostingTags";
import { PostContainer } from "../../styles/PostStyle";
import { PostingButton } from "../../styles/PostingStyle";
import "../../styles/markdown.css";
import { post } from "../../utils/api";
import { useGetCurrentUser } from "../../queries/userQuery";

function Posting() {
  const { userState } = useGetCurrentUser();
  // console.log("여기야 여기!", userState._id);
  // console.log("여기야 여기!", userState.nickname);

  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const tagRef = useRef(null);
  const categoryRef = useRef(null);
  const [tag, setTag] = useState("");
  const [tagArray, setTagArray] = useState([]);

  const [isTitleEmpty, setIsTitleEmpty] = useState(false);
  const [isContentEmpty, setIsContentEmpty] = useState(false);
  const [isCategoryEmpty, setIsCategoryEmpty] = useState(false);

  // useEffect(() => {
  //   setIsTitleEmpty(() => !titleRef.current.value);
  //   setIsContentEmpty(() => !contentRef.current.value);
  //   setIsCategoryEmpty(() => categoryRef.current.value);
  // }, [titleRef, contentRef, categoryRef]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsTitleEmpty(() => !titleRef.current.value);
      setIsContentEmpty(() => !contentRef.current.value);
      setIsCategoryEmpty(() => categoryRef.current.value);

      // console.log(isCategoryEmpty);
      // console.log(isContentEmpty);
      // console.log(isTitleEmpty);

      console.log({
        title: titleRef.current.value,
        content: contentRef.current.value,
        category: categoryRef.current.value,
        tags: tagArray,
      });
      // await post("post", {
      //   title: titleRef.current.value,
      //   content: contentRef.current.value,
      //   category: categoryRef.current.value,
      //   tags: tagRef.current.value.split(","),
      // });
    } catch (error) {
      throw new Error(error);
    }
  };

  const onChangeTag = (e) => {
    e.preventDefault();
    setTag((tag) => e.target.value);
  };

  const handleTagEnter = (e) => {
    e.preventDefault();
    const tagsWrapper = document.querySelector(".tagsWrapper");
    const tagBox = document.createElement("div");
    tagBox.className = "tagBox";

    tagBox.addEventListener("click", () => {
      tagsWrapper.removeChild(tagBox);
      setTagArray(tagArray.filter((tag) => tag));
      console.log(tagArray);
    });

    if (e.keyCode === 13 && e.target.value.trim() !== "") {
      // console.log("enter! tag 입력", e.target.value);
      tagBox.innerHTML = "#" + e.target.value;
      tagsWrapper?.appendChild(tagBox);
      setTagArray((tagArray) => [...tagArray, tag]);
      setTag("");
    }
  };

  console.log(
    "=======================",
    isTitleEmpty || isContentEmpty || isCategoryEmpty === ""
  );
  return (
    <PostContainer>
      <form onSubmit={handleSubmit}>
        <PostingHeader
          setIsTitleEmpty={setIsTitleEmpty}
          isTitleEmpty={isTitleEmpty}
          ref={titleRef}
        ></PostingHeader>
        <PostingContents
          isContentEmpty={isContentEmpty}
          isCategoryEmpty={isCategoryEmpty}
          setIsContentEmpty={setIsContentEmpty}
          setIsCategoryEmpty={setIsCategoryEmpty}
          ref={{ contentRef, categoryRef }}
        ></PostingContents>
        <PostingTag
          tag={tag}
          onChangeTag={onChangeTag}
          handleTagEnter={handleTagEnter}
          ref={tagRef}
        ></PostingTag>
        <PostingButton
        // disabled={isTitleEmpty || isContentEmpty || isCategoryEmpty === ""}
        >
          출간하기
        </PostingButton>
      </form>
    </PostContainer>
  );
}
export default Posting;
