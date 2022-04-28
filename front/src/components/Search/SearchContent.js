import SearchBar from "./SearchBar";
import SearchCategory from "./SearchCategory";
import {
  SearchButton,
  SearchContainerBox,
} from "../../styles/Components/SearchStyle";
import { LABEL } from "../../utils/constants";
import { useState } from "react";
import { useParams } from "react-router-dom";

function SearchContent() {
  const params = useParams();
  const [category, setCategory] = useState(params.category);
  const [searchContent, setSearchContent] = useState("");

  return (
    <SearchContainerBox>
      <SearchCategory setCategory={setCategory} />
      <SearchBar setSearchContent={setSearchContent} />
      <SearchButton type="button">{LABEL.SEARCH}</SearchButton>
    </SearchContainerBox>
  );
}

export default SearchContent;
