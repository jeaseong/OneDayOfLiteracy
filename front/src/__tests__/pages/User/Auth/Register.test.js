import { render, screen } from "@testing-library/react";
import Register from "../../../../pages/User/Auth/Register";
import userEvent from "@testing-library/user-event";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => ({
    navigate: mockNavigate.mockImplementation(() => ({})),
  }),
}));

describe("Check the form required for register", () => {
  it("Check service Logo", () => {
    render(<Register />);
    const registerLogo = screen.getByRole("heading", { name: /sign up/i });
    expect(registerLogo).toBeInTheDocument();
  });

  it("Check email form", () => {
    render(<Register />);
    const emailForm = screen.getByRole("textbox", { name: "Email Address" });
    expect(emailForm).toBeInTheDocument();
  });

  it("Check password form", () => {
    render(<Register />);
    const passwordForm = screen.getByLabelText(/^Password/, {
      exact: false,
    });
    expect(passwordForm).toBeInTheDocument();
  });

  it("Check confirm password form", () => {
    render(<Register />);
    const confirmPasswordForm = screen.getByLabelText("Confirm Password", {
      exact: false,
    });
    expect(confirmPasswordForm).toBeInTheDocument();
  });

  it("Check nickname form", () => {
    render(<Register />);
    const nickNameForm = screen.getByRole("textbox", { name: "Nickname" });
    expect(nickNameForm).toBeInTheDocument();
  });

  it("Check submit button", () => {
    render(<Register />);
    const submitButton = screen.getByRole("button", { name: /sign up/i });
    expect(submitButton).toBeInTheDocument();
  });
});

describe("Auth button's action", () => {
  it("Active button when input register info", async () => {
    const onSubmit = jest.fn();
    render(<Register onSubmit={onSubmit} />);

    const submitButton = screen.getByRole("button", { name: /sign up/i });

    const emailForm = document.querySelector("#register-email");
    userEvent.type(emailForm, "abcd@naver.com");
    expect(submitButton).toHaveClass("Mui-disabled");

    const passwordForm = document.querySelector("#register-password");
    userEvent.type(passwordForm, "test1234");
    expect(submitButton).toHaveClass("Mui-disabled");

    const confirmPasswordForm = document.querySelector("#confirmPassword");
    userEvent.type(confirmPasswordForm, "test1234");
    expect(submitButton).toHaveClass("Mui-disabled");

    const nicknameForm = document.querySelector("#nickName");
    userEvent.type(nicknameForm, "테스트닉네임");
    expect(submitButton).not.toHaveClass("Mui-disabled");

    userEvent.click(submitButton);
    expect(onSubmit).toBeCalled();

    await screen.findByRole("button", { name: /sign up/i });
  });
});
