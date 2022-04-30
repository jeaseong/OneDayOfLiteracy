import SearchBar from "./SearchBar";
import SearchCategory from "./SearchCategory";
import {
  SearchButton,
  SearchContainerBox,
} from "../../styles/Components/SearchStyle";
import { LABEL } from "../../utils/constants";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

/**
 * 검색 컴포넌트 입니다.
 * @returns {JSX.Element}
 * @constructor
 */
function SearchContent() {
  const navigate = useNavigate();
  const [category, setCategory] = useState("all");
  const [searchTarget, setSearchTarget] = useState("");

  const createEndpointURI = () => {
    const contentParam = `content=${searchTarget}`;

    if (category === "all") return `${contentParam}`;
    return `category=${category}&${contentParam}`;
  };

  const handleSearchOnSubmit = (e) => {
    e.preventDefault();
    const endpoint = createEndpointURI();
    navigate(`/posts?${endpoint}`);
  };

  return (
    <SearchContainerBox onSubmit={handleSearchOnSubmit}>
      <SearchCategory setCategory={setCategory} />
      <SearchBar
        searchTarget={searchTarget}
        setSearchTarget={setSearchTarget}
      />
      <SearchButton type="submit">{LABEL.SEARCH}</SearchButton>
    </SearchContainerBox>
  );
}

export default SearchContent;
