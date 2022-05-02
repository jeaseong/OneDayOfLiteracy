import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import PostingHeader from "./PostingHeader";
import PostingContents from "./PostingContents";
import PostingTag from "./PostingTag";
import PostingCategory from "./PostingCategory";
import { PostContainer } from "../../styles/PostStyle";
import { PostingButton } from "../../styles/PostingStyle";
import "../../styles/markdown.css";
import { post } from "../../utils/api";

function Posting() {
  const navigate = useNavigate();
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const tagRef = useRef(null);
  const categoryRef = useRef(null);

  const [isTitleEmpty, setIsTitleEmpty] = useState(false);

  const [isCategoryEmpty, setIsCategoryEmpty] = useState(false);
  const [isInputEmpty, setIsInputEmpty] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsInputEmpty(
        () =>
          contentRef.current.value.length === 0 &&
          titleRef.current.value.length === 0 &&
          categoryRef.current.value === 0
      );
      console.log("isInputEmpty", isInputEmpty);
      const posting = {
        title: titleRef.current?.value,
        content: contentRef.current?.value,
        tags: tagRef.current.innerText.slice(1).split("\n#"),
        subjectId: null,
        category: categoryRef.current?.value,
      };

      await post("post", posting);
      navigate("/posts");
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
      <PostingContents ref={contentRef} />
      <div className="postingButton">
        <PostingButton
          type="submit"
          onClick={handleSubmit}
          disabled={isInputEmpty}
        >
          출간하기
        </PostingButton>
      </div>
    </PostContainer>
  );
}
export default Posting;
