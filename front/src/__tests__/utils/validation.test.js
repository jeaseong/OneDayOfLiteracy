import { validation } from "../../utils/validation";

describe("Register validation", () => {
  it("email validation", () => {
    const registerInfo = {
      email: "abcde",
      password: "test1234",
      confirmPassword: "test1234",
      nickName: "테스트",
    };
    expect(validation("register", registerInfo)).toBeFalsy();
  });

  it("password validation", () => {
    const registerInfo = {
      email: "test@test.com",
      password: "test1222",
      confirmPassword: "test1234",
      nickName: "테스트",
    };
    expect(validation("register", registerInfo)).toBeFalsy();
  });

  it("nickName validation", () => {
    const registerInfo = {
      email: "test@test.com",
      password: "test1234",
      confirmPassword: "test1234",
      nickName: "a",
    };
    expect(validation("register", registerInfo)).toBeFalsy();
  });

  it("Pass validation", () => {
    const registerInfo = {
      email: "test@test.com",
      password: "test1234",
      confirmPassword: "test1234",
      nickName: "test",
    };
    expect(validation("register", registerInfo)).toBeTruthy();
  });
});
