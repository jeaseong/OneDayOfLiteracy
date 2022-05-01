import React, { useRef, useState } from "react";
import PostingHeader from "./PostingHeader";
import PostingContents from "./PostingContents";
import PostingTag from "./PostingTag";
import PostingCategory from "./PostingCategory";
import { PostContainer } from "../../styles/PostStyle";
import { PostingButton } from "../../styles/PostingStyle";
import "../../styles/markdown.css";
import { post } from "../../utils/api";

function Posting() {
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const tagRef = useRef(null);
  const categoryRef = useRef(null);

  // const [posting, setPosting] = useState({});

  const [isTitleEmpty, setIsTitleEmpty] = useState(false);
  const [isContentEmpty, setIsContentEmpty] = useState(false);
  const [isCategoryEmpty, setIsCategoryEmpty] = useState(false);

  const handleSubmit = async (e) => {
    console.log("handleSubmit 실행됨.");
    e.preventDefault();
    try {
      setIsTitleEmpty(() => !titleRef.current.value);
      setIsContentEmpty(() => !contentRef.current.value);
      setIsCategoryEmpty(() => categoryRef.current.value);

      const posting = {
        title: titleRef.current?.value,
        content: contentRef.current?.value,
        tags: tagRef.current.innerText.slice(1).split("\n#"),
        subjectId: { _id: "6232e9c20cb9033a0d6d156a" },
        category: categoryRef.current?.value,
      };
      console.log("posting : ", posting);
      await post("post", posting);
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <PostContainer>
      <PostingHeader
        isTitleEmpty={isTitleEmpty}
        setIsTitleEmpty={setIsTitleEmpty}
        ref={titleRef}
      />
      <PostingCategory
        isCategoryEmpty={isCategoryEmpty}
        setIsCategoryEmpty={setIsCategoryEmpty}
        ref={categoryRef}
      />
      <PostingTag ref={tagRef} />
      <PostingContents
        isContentEmpty={isContentEmpty}
        setIsContentEmpty={setIsContentEmpty}
        ref={contentRef}
      />
      <div className="postingButton">
        <PostingButton
          type="submit"
          onClick={handleSubmit}
          disabled={isTitleEmpty || isContentEmpty || isCategoryEmpty === ""}
        >
          출간하기
        </PostingButton>
      </div>
    </PostContainer>
  );
}
export default Posting;
