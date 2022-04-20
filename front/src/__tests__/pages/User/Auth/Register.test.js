import { render, screen } from "@testing-library/react";
import Register from "../../../../pages/User/Auth/Register";
import userEvent from "@testing-library/user-event";

describe("Check the form required for register", () => {
  it("Check service Logo", () => {
    render(<Register />);
    const serviceLogo = screen.getByRole("heading", { name: "문해한 하루" });
    expect(serviceLogo).toBeInTheDocument();
  });

  it("Check email form", () => {
    render(<Register />);
    const emailForm = screen.getByLabelText("이메일");
    expect(emailForm).toBeInTheDocument();
  });

  it("Check password form", () => {
    render(<Register />);
    const passwordForm = screen.getByLabelText("비밀번호");
    expect(passwordForm).toBeInTheDocument();
  });

  it("Check confirm password form", () => {
    render(<Register />);
    const passwordForm = screen.getByLabelText("비밀번호 확인");
    expect(passwordForm).toBeInTheDocument();
  });

  it("Check nickname form", () => {
    render(<Register />);
    const nickNameForm = screen.getByLabelText("닉네임");
    expect(nickNameForm).toBeInTheDocument();
  });

  it("Check submit button", () => {
    render(<Register />);
    const submitButton = screen.getByRole("button");
    expect(submitButton).toHaveTextContent("회원가입");
  });
});

describe("Auth button's action", () => {
  it("Active button when input register info", async () => {
    const onSubmit = jest.fn();
    render(<Register onSubmit={onSubmit} />);

    const submitButton = screen.getByRole("button", { name: "회원가입" });

    const emailForm = screen.getByLabelText("이메일");
    userEvent.clear(emailForm);
    userEvent.type(emailForm, "abcd@naver.com");
    expect(submitButton).toBeDisabled();

    const passwordForm = screen.getByLabelText("비밀번호");
    userEvent.clear(passwordForm);
    userEvent.type(passwordForm, "test1234");
    expect(submitButton).toBeDisabled();

    const confirmPasswordForm = screen.getByLabelText("비밀번호 확인");
    userEvent.clear(confirmPasswordForm);
    userEvent.type(confirmPasswordForm, "test1234");
    expect(submitButton).toBeDisabled();

    const nicknameForm = screen.getByLabelText("닉네임");
    userEvent.clear(nicknameForm);
    userEvent.type(nicknameForm, "테스트닉네임");
    expect(submitButton).toBeEnabled();

    userEvent.click(submitButton);
    expect(onSubmit).toBeCalled();

    await screen.findByRole("button", { name: "회원가입" });
  });
});
