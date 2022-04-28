import { render, screen } from "../../test-utils";
import SearchContent from "../../components/Search/SearchContent";
import userEvent from "@testing-library/user-event";

test("검색창과 카테고리 선택 요소가 있다.", () => {
  render(<SearchContent />);
  const searchInput = screen.getByPlaceholderText("검색어", { exact: false });
  expect(searchInput).toBeInTheDocument();

  const searchCategory = screen.getAllByRole("option");
  expect(searchCategory.length).toBe(4);

  const searchButton = screen.getByRole("button", { name: "검색" });
  expect(searchButton).toBeInTheDocument();
});

test("검색창과 카테고리 선택 시 동작 테스트", () => {
  render(<SearchContent />);
  const searchInput = screen.getByPlaceholderText("검색어", { exact: false });
  userEvent.type(searchInput, "테스트검색");
  expect(searchInput).toHaveValue("테스트검색");

  userEvent.selectOptions(
    screen.getByRole("combobox"),
    screen.getByRole("option", { name: "에세이" })
  );
  expect(screen.getByRole("option", { name: "에세이" })).toBeInTheDocument();
});
