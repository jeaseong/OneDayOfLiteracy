import React, { useRef, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PostingHeader from "./PostingHeader";
import PostingContents from "./PostingContents";
import PostingTag from "./PostingTag";
import PostingCategory from "./PostingCategory";
import { PostingButton, PostingBody } from "../../styles/Posts/PostingStyle";
import "../../styles/Posts/markdown.css";
import { put } from "../../utils/api";
import { useQueryClient } from "react-query";

function PostingEditForm() {
  const params = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const postInfo = queryClient.getQueryData(["post", params.postId]);
  const { userState } = queryClient.getQueryData("userState");
  console.log(localStorage.getItem("userToken"));

  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const tagRef = useRef(null);
  const categoryRef = useRef(null);
  const inputEmpty = useRef(true);
  const [renderer, setRenderer] = useState(true);

  useEffect(() => {
    titleRef.current.value = postInfo.title;
    contentRef.current.value = postInfo.content;
    tagRef.current.value = postInfo.tags;
    categoryRef.current.value = postInfo.category;
  }, []);

  const handleClick = async (e) => {
    e.preventDefault();
    setRenderer(!renderer);

    inputEmpty.current =
      contentRef.current?.value.length === 0 ||
      titleRef.current?.value.length === 0 ||
      categoryRef.current?.value.length === 0;

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
        category: categoryRef.current?.value,
        userId: userState._id,
      };

      await put(`posts/${params.postId}`, posting);
      navigate("/posts");
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <PostingBody>
      <PostingHeader ref={titleRef} />
      <PostingCategory ref={categoryRef} />
      <PostingTag editTagArray={postInfo.tags} ref={tagRef} />
      <PostingContents ref={contentRef} />
      <div className="postingButton">
        <PostingButton type="submit" onClick={handleClick}>
          수정하기
        </PostingButton>
      </div>
    </PostingBody>
  );
}

export default PostingEditForm;
