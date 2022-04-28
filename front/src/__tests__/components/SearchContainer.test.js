import { render, screen } from "../../test-utils";
import SearchContainer from "../../components/Search/SearchContainer";

test("검색창과 카테고리 선택 요소가 있다.", () => {
  render(<SearchContainer />);
  const searchInput = screen.getByPlaceholderText("검색하기");
  expect(searchInput).toBeInTheDocument();

  const searchCategory = screen.getAllByRole("option");
  expect(searchCategory.length).toBe(4);

  const searchButton = screen.getByRole("button", { name: "검색" });
  expect(searchButton).toBeInTheDocument();
});
