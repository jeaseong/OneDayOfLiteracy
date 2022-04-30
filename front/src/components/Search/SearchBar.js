import {
  SearchInput,
  DropDownBox,
  InputBox,
  DropDownItem,
} from "../../styles/Components/SearchStyle";
import { GUIDE_MESSAGE } from "../../utils/constants";
import { useEffect, useState } from "react";
import { useGetPostList } from "../../queries/postQuery";

// 입력한 단어가 글 제목에 포함되어 있는지 체크
function includeSearchTarget(postList, searchTarget) {
  return postList.reduce((cur, post) => {
    const { title } = post;
    if (title.includes(searchTarget)) return [...cur, title];
    return [...cur];
  }, []);
}

/**
 * 검색어 입력 컴포넌트입니다.
 * @param {string} searchTarget
 * @param {function} setSearchTarget
 * @returns {JSX.Element}
 * @constructor
 */
function SearchBar({ searchTarget, setSearchTarget }) {
  const { postList } = useGetPostList();
  const [isHaveSearchContent, setIsHaveSearchContent] = useState(false);
  const [dropDownList, setDropDownList] = useState(postList);
  const [dropDownItemIndex, setDropDownItemIndex] = useState(0);

  // 자동완성 목록 생성
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

  // 자동완성 단어를 클릭 했을 때
  const handleOnClickDropDownItem = (clickedItem) => {
    setSearchTarget(clickedItem);
    setIsHaveSearchContent(false);
  };

  // 사용자가 검색어를 입력할 때
  const handleInputOnChange = (e) => {
    setSearchTarget(e.target.value);
    setIsHaveSearchContent(true);
  };

  // 사용자의 키 입력으로 자동완성 목록 이동
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

  // 자동완성 목록 가공
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
