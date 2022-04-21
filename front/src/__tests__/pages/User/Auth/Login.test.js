import { render, screen } from "@testing-library/react";
import Login from "../../../../pages/User/Auth/Login";
import userEvent from "@testing-library/user-event";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

describe("Check the form required for login", () => {
  it("Check service Logo", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Login />
      </QueryClientProvider>
    );
    const serviceLogo = screen.getByRole("heading", { name: "문해한 하루" });
    expect(serviceLogo).toBeInTheDocument();
  });

  it("Check email form", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Login />
      </QueryClientProvider>
    );
    const emailForm = screen.getByLabelText("이메일");
    expect(emailForm).toBeInTheDocument();
  });

  it("Check password form", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Login />
      </QueryClientProvider>
    );
    const passwordForm = screen.getByLabelText("비밀번호");
    expect(passwordForm).toBeInTheDocument();
  });

  it("Check submit button", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Login />
      </QueryClientProvider>
    );
    const submitButton = screen.getByRole("button");
    expect(submitButton).toHaveTextContent("로그인");
  });
});

describe("Auth login button's action", () => {
  it("Active button when input login info", async () => {
    const onSubmit = jest.fn();
    render(
      <QueryClientProvider client={queryClient}>
        <Login onSubmit={onSubmit} />
      </QueryClientProvider>
    );

    const submitButton = screen.getByRole("button", { name: "로그인" });

    const emailForm = screen.getByLabelText("이메일");
    userEvent.clear(emailForm);
    userEvent.type(emailForm, "abcd@naver.com");
    expect(submitButton).toBeDisabled();

    const passwordForm = screen.getByLabelText("비밀번호");
    userEvent.clear(passwordForm);
    userEvent.type(passwordForm, "test1234");
    expect(submitButton).toBeEnabled();

    userEvent.click(submitButton);
    expect(onSubmit).toBeCalled();

    await screen.findByRole("button", { name: "로그인" });
  });
});
