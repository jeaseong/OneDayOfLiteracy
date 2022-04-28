import {
  SearchInput,
  DropDownBox,
  InputBox,
  DropDownItem,
} from "../../styles/Components/SearchStyle";
import { GUIDE_MESSAGE } from "../../utils/constants";
import { useEffect, useState } from "react";
import { useGetPostList } from "../../queries/postQuery";

function includeSearchTarget(postList, searchTarget) {
  return postList.reduce((cur, post) => {
    const { title } = post;
    if (title.includes(searchTarget)) return [...cur, title];
    return [...cur];
  }, []);
}

function SearchBar({ searchTarget, setSearchTarget }) {
  const { postList } = useGetPostList();
  const [isHaveSearchContent, setIsHaveSearchContent] = useState(false);
  const [dropDownList, setDropDownList] = useState(postList);
  const [dropDownItemIndex, setDropDownItemIndex] = useState(0);

  useEffect(() => {
    const showDropDownList = () => {
      if (searchTarget.length !== 0) {
        const filteredSearchData = includeSearchTarget(postList, searchTarget);

        if (filteredSearchData.length > 10) {
          setDropDownList(filteredSearchData.slice(0, 10));
          return;
        }
        setDropDownList(filteredSearchData);
      } else {
        setIsHaveSearchContent(false);
        setDropDownList([]);
      }
    };
    showDropDownList();
  }, [searchTarget, postList]);

  const handleOnClickDropDownItem = (clickedItem) => {
    setSearchTarget(clickedItem);
    setIsHaveSearchContent(false);
  };

  const handleInputOnChange = (e) => {
    setSearchTarget(e.target.value);
    setIsHaveSearchContent(true);
  };

  const handleDropDownOnKey = (e) => {
    if (!isHaveSearchContent) return null;
    if (e.key === "ArrowDown" && dropDownList.length - 1 > dropDownItemIndex)
      setDropDownItemIndex(dropDownItemIndex + 1);

    if (e.key === "ArrowUp" && dropDownItemIndex > 0)
      setDropDownItemIndex(dropDownItemIndex - 1);

    if (e.key === "Enter" && dropDownItemIndex >= 0) {
      handleOnClickDropDownItem(dropDownList[dropDownItemIndex]);
      setDropDownItemIndex(-1);
    }
  };

  const dropDownItem =
    dropDownList.length === 0 ? (
      <DropDownItem>{GUIDE_MESSAGE.NOT_FOUND_AUTO_COMPLETE}</DropDownItem>
    ) : (
      dropDownList.map((item, index) => {
        return (
          <DropDownItem
            key={index}
            className={dropDownItemIndex === index ? "selected" : ""}
            onClick={() => handleOnClickDropDownItem(item)}
            onMouseOver={() => setDropDownItemIndex(index)}
          >
            {item}
          </DropDownItem>
        );
      })
    );

  return (
    <InputBox>
      <SearchInput
        type="text"
        value={searchTarget}
        placeholder={GUIDE_MESSAGE.SEARCH}
        onChange={handleInputOnChange}
        onKeyUp={handleDropDownOnKey}
      />
      {isHaveSearchContent && <DropDownBox>{dropDownItem}</DropDownBox>}
    </InputBox>
  );
}

export default SearchBar;
