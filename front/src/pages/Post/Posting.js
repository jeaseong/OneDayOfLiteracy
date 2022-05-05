import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PostingHeader from "./PostingHeader";
import PostingContents from "./PostingContents";
import PostingTag from "./PostingTag";
import PostingCategory from "./PostingCategory";
import { PostContainer } from "styles/Posts/PostStyle";
import { PostingButton } from "styles/Posts/PostingStyle";
import "styles/Posts/markdown.css";
import { post } from "utils/api";

function Posting() {
  const navigate = useNavigate();

  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const tagRef = useRef(null);
  const categoryRef = useRef(null);
  const inputEmpty = useRef(true);

  const [renderer, setRenderer] = useState(true);
  const [isEditPost, setIsEditPost] = useState(false);

  const handleClick = async (e) => {
    e.preventDefault();
    setRenderer(!renderer);

    if (!inputEmpty.current) {
      await handleSubmit();
    } else {
      const errorMessage = "빈값을 입력해주세요.";
      throw new Error(errorMessage);
    }
  };

  const handleSubmit = async (e) => {
    try {
      const posting = {
        title: titleRef.current?.value,
        content: contentRef.current?.value,
        tags: tagRef.current.innerText.slice(1).split("\n#"),
        subjectId: null,
        category: categoryRef.current?.value,
      };

      await post("posts", posting);
      navigate("/posts");
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    inputEmpty.current =
      contentRef.current?.value.length === 0 ||
      titleRef.current?.value.length === 0 ||
      categoryRef.current?.value.length === 0;
    console.log(inputEmpty.current);
  }, [renderer]);

  return (
    <PostContainer>
      <PostingHeader ref={titleRef} />
      <PostingCategory ref={categoryRef} />
      <PostingTag ref={tagRef} />
      <PostingContents ref={contentRef} />
      <div className="postingButton">
        <PostingButton type="submit" onClick={handleClick}>
          출간하기
        </PostingButton>
      </div>
    </PostContainer>
  );
}
export default Posting;
