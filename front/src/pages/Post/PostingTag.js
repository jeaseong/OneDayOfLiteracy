import React, { useState, forwardRef } from "react";
import { PostingTags } from "../../styles/PostingStyle";
import "../../styles/markdown.css";

const PostingTag = forwardRef(({}, ref) => {
  const [tag, setTag] = useState("");
  const [tagArray, setTagArray] = useState([]);

  const onChangeTag = (e) => {
    e.preventDefault();
    setTag(() => ref.current.value);
  };

  const handleTagClick = (e) => {
    const tagToDelete = e.target.innerHTML.slice(1);
    setTagArray(tagArray.filter((v) => v !== tagToDelete));
  };

  const handleTagEnter = (e) => {
    e.preventDefault();
    if (e.keyCode === 13 && e.target.value.trim() !== "") {
      setTagArray(() => [...tagArray, tag]);
      setTag("");
    }
  };

  return (
    <div className="hashWrap">
      <div className="tagsWrapper">
        {tagArray.map((tag, index) => {
          return (
            <div key={index} className="tagBox" onClick={handleTagClick}>
              #{tag}
            </div>
          );
        })}
      </div>

      <PostingTags
        className="tagsInput"
        type={"text"}
        placeholder={"태그를 입력하세요"}
        value={tag}
        onChange={onChangeTag}
        onKeyUp={handleTagEnter}
        ref={ref}
      />
    </div>
  );
});
export default PostingTag;
