import { render, screen } from "../../../../test-utils";
import Login from "../../../../pages/User/Auth/Login";
import userEvent from "@testing-library/user-event";

describe("Check the form required for login", () => {
  it("Check service Logo", () => {
    render(<Login />);
    const loginLogo = screen.getByRole("heading", { name: "Sign in" });
    expect(loginLogo).toBeInTheDocument();
  });

  it("Check email form", () => {
    render(<Login />);
    const emailForm = screen.getByRole("textbox", "Email Address");
    expect(emailForm).toBeInTheDocument();
  });

  it("Check password form", () => {
    render(<Login />);
    const passwordForm = screen.getByRole("textbox", "Password");
    expect(passwordForm).toBeInTheDocument();
  });

  it("Check submit button", () => {
    render(<Login />);
    const submitButton = screen.getByRole("button");
    expect(submitButton).toHaveTextContent("Sign In");
  });
});

describe("Auth login button's action", () => {
  it("Active button when input login info", async () => {
    const onSubmit = jest.fn();
    render(<Login />);

    const submitButton = screen.getByRole("button", { name: /sign in/i });

    const emailSelector = document.querySelector("#email");
    userEvent.type(emailSelector, "abcd@naver.com");
    expect(submitButton).toHaveClass("Mui-disabled");

    const passwordSelector = document.querySelector("#password");
    userEvent.type(passwordSelector, "test1234");
    expect(submitButton).not.toHaveClass("Mui-disabled");

    userEvent.click(submitButton);
    expect(onSubmit).toBeCalled();

    await screen.findByRole("button", { name: "Sign In" });
  });
});

describe("KaKao Login test", () => {
  it("KaKao login button is on the screen", () => {
    render(<Login />);
    const kakaoLoginButton = screen.getByRole("img");
    expect(kakaoLoginButton).toHaveAttribute("alt", "kakaoLogin");
  });
});
