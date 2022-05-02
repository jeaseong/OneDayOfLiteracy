import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { PostContainer } from "../../../styles/PostStyle";
import {
  PostingContent,
  PostingArea,
  PostingButton,
} from "../../../styles/PostingStyle";
import { TrainingPostTitle, Center } from "../../../styles/TrainingStyle";
import "../../../styles/markdown.css";
import { post } from "../../../utils/api";

export default function TrainingPost({ title, tags, subjectId, category }) {
  const navigate = useNavigate();
  const [markdown, setMarkdown] = useState("");

  const handleChangeMarkdown = (e) => {
    setMarkdown(e.target.value);
  };

  const submitTrainingPost = async (e) => {
    e.preventDefault();
    const curPost = {
      title,
      tags,
      subjectId,
      category,
    };
    await post("post", curPost);
    navigate("/posts");
  };

  return (
    <PostContainer>
      <TrainingPostTitle>{title}</TrainingPostTitle>
      <form>
        <PostingContent>
          <PostingArea
            type="text"
            placeholder="내용을 입력해주세요..."
            onChange={(e) => handleChangeMarkdown(e)}
            required
          />
          <ReactMarkdown
            children={markdown}
            className="markdown"
          ></ReactMarkdown>
        </PostingContent>
        <Center>
          <PostingButton
            type="submit"
            disabled={markdown.length <= 0}
            onClick={(e) => submitTrainingPost(e)}
          >
            출간하기
          </PostingButton>
        </Center>
      </form>
    </PostContainer>
  );
}
