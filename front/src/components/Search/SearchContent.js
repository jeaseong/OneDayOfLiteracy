import SearchBar from "./SearchBar";
import SearchCategory from "./SearchCategory";
import {
  SearchButton,
  SearchContainerBox,
} from "../../styles/Components/SearchStyle";
import { LABEL } from "../../utils/constants";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetPostList } from "../../queries/postQuery";
import Loading from "../Loading";
import ErrorPage from "../ErrorPage";

function SearchContent() {
  const params = useParams();
  const { isFetching, error } = useGetPostList();
  const [category, setCategory] = useState(params.category);
  const [searchTarget, setSearchTarget] = useState("");

  const handleSearchOnSubmit = (e) => {
    e.preventDefault();
  };

  if (isFetching) return <Loading />;
  if (error) return <ErrorPage />;

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
