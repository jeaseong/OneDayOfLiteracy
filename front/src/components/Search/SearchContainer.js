import SearchBar from "./SearchBar";
import SearchCategory from "./SearchCategory";
import { Button } from "../../styles/CommonStyle";

function SearchContainer() {
  return (
    <form>
      <SearchBar />
      <SearchCategory />
      <Button>검색</Button>
    </form>
  );
}

export default SearchContainer;
