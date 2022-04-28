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

  useEffect(() => {
    const showDropDownList = () => {
      if (searchTarget.length !== 0) {
        const filteredSearchData = includeSearchTarget(postList, searchTarget);
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

  const dropDownItem =
    dropDownList.length === 0 ? (
      <p>{GUIDE_MESSAGE.NOT_FOUND_AUTO_COMPLETE}</p>
    ) : (
      dropDownList.map((item, index) => {
        return (
          <DropDownItem
            key={index}
            onClick={() => handleOnClickDropDownItem(item.title)}
          >
            {item}
          </DropDownItem>
        );
      })
    );

  return (
    <InputBox>
      <SearchInput
        placeholder={GUIDE_MESSAGE.SEARCH}
        onChange={handleInputOnChange}
      />
      {isHaveSearchContent && <DropDownBox>{dropDownItem}</DropDownBox>}
    </InputBox>
  );
}

export default SearchBar;
