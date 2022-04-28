import { SearchSelect } from "../../styles/Components/SearchStyle";

function SearchCategory() {
  return (
    <SearchSelect>
      <option>전체</option>
      <option>소설</option>
      <option>에세이</option>
      <option>시</option>
    </SearchSelect>
  );
}

export default SearchCategory;
