import SearchBar from "./SearchBar";
import SearchCategory from "./SearchCategory";
import {
  SearchButton,
  SearchContainerBox,
} from "../../styles/Components/SearchStyle";

function SearchContainer() {
  return (
    <SearchContainerBox>
      <SearchCategory />
      <SearchBar />
      <SearchButton>검색</SearchButton>
    </SearchContainerBox>
  );
}

export default SearchContainer;
