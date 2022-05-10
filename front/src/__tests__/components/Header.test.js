import { render, screen } from "../../test-utils";
import Header from "../../components/Header";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "/",
  }),
  useNavigate: () => ({
    navigate: mockNavigate.mockImplementation(() => ({})),
  }),
}));

describe("Header render", () => {
  it("render Header", () => {
    render(<Header />);
    const logo = screen.getByRole("img");
    expect(logo).toBeInTheDocument();
  });
});
