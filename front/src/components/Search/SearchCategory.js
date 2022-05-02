import { SearchSelect } from "../../styles/Components/SearchStyle";
import { CATEGORY } from "../../utils/constants";

/**
 * 검색 시 카테고리를 설정하는 컴포넌트입니다.
 * @param {function} setCategory
 * @returns {JSX.Element}
 * @constructor
 */
function SearchCategory({ setCategory }) {
  const handleOnSelect = (e) => {
    setCategory(e.target.value);
  };

  return (
    <SearchSelect onChange={handleOnSelect}>
      <option value="all">{CATEGORY.ALL}</option>
      <option value="novel">{CATEGORY.NOVEL}</option>
      <option value="essay">{CATEGORY.ESSAY}</option>
      <option value="poetry">{CATEGORY.POETRY}</option>
    </SearchSelect>
  );
}

export default SearchCategory;
