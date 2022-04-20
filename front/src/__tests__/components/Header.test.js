import { render, screen } from "@testing-library/react";
import Header from "../../components/Header";

test("Header를 렌더했어요", () => {
  render(<Header />);
  const headerElement = screen.getByRole("img");
  expect(headerElement).toBeInTheDocument();
});
