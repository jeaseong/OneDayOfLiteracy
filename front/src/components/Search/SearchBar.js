import { SearchInput } from "../../styles/Components/SearchStyle";
import { GUIDE_MESSAGE } from "../../utils/constants";

function SearchBar({ setSearchContent }) {
  const handleOnChange = (e) => {
    setSearchContent(e.target.value);
  };

  return (
    <SearchInput placeholder={GUIDE_MESSAGE.SEARCH} onChange={handleOnChange} />
  );
}

export default SearchBar;
