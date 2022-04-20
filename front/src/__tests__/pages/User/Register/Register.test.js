import { render, screen } from "@testing-library/react";
import Register from "../../../../pages/User/Register/Register";

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
