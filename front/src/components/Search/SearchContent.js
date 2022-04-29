import SearchBar from "./SearchBar";
import SearchCategory from "./SearchCategory";
import {
  SearchButton,
  SearchContainerBox,
} from "../../styles/Components/SearchStyle";
import { LABEL } from "../../utils/constants";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetPostList } from "../../queries/postQuery";
import Loading from "../Loading";
import ErrorPage from "../ErrorPage";

function SearchContent() {
  const navigate = useNavigate();
  const { isFetching, error } = useGetPostList();
  const [category, setCategory] = useState("all");
  const [searchTarget, setSearchTarget] = useState("");

  const handleSearchOnSubmit = (e) => {
    e.preventDefault();
    navigate(`/posts/search?category=${category}&content=${searchTarget}`);
  };

  if (isFetching) return <Loading />;
  if (error) return <ErrorPage />;

  return (
    <SearchContainerBox>
      <SearchCategory setCategory={setCategory} />
      <SearchBar
        searchTarget={searchTarget}
        setSearchTarget={setSearchTarget}
      />
      <SearchButton type="submit" onClick={handleSearchOnSubmit}>
        {LABEL.SEARCH}
      </SearchButton>
    </SearchContainerBox>
  );
}

export default SearchContent;
