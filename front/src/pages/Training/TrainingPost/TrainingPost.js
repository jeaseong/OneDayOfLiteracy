import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { PostContainer } from "../../../styles/Posts/PostStyle";
import {
  PostingContent,
  PostingArea,
  PostingButton,
} from "../../../styles/Posts/PostingStyle";
import {
  TrainingPostTitle,
  Center,
} from "../../../styles/Training/TrainingStyle";
import "../../../styles/Posts/markdown.css";
import { post } from "../../../utils/api";

export default function TrainingPost({ title, tags, subjectId, category }) {
  const navigate = useNavigate();
  const [markdown, setMarkdown] = useState("");

  const handleChangeMarkdown = (e) => {
    setMarkdown(e.target.value);
  };
  const handleSetTab = (e) => {
    if (e.keyCode === 9) {
      e.preventDefault();
      const start = e.target.selectionStart;
      const end = e.target.selectionEnd;
      e.target.value =
        e.target.value.substring(0, start) +
        "    " +
        e.target.value.substring(end);
      handleChangeMarkdown(e);
    }
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
            onkeyDown={(e) => handleSetTab(e)}
            required
          />
          <ReactMarkdown
            children={markdown}
            remarkPlugins={[remarkGfm]}
            className="markdown"
          ></ReactMarkdown>
        </PostingContent>
        <Center>
          <PostingButton
            type="submit"
            disabled={markdown.length <= 0}
            onClick={(e) => submitTrainingPost(e)}
            display={tags[0] === "step3" ? "none" : null}
          >
            출간하기
          </PostingButton>
        </Center>
      </form>
    </PostContainer>
  );
}
