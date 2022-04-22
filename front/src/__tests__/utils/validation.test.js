import { validation } from "../../utils/validation";

describe("Auth validation", () => {
  it("email validation", () => {
    const registerInfo = {
      email: "abcde",
      password: "test1234",
      confirmPassword: "test1234",
      nickname: "테스트",
    };
    expect(validation("register", registerInfo)).toBeFalsy();
  });

  it("password validation", () => {
    const registerInfo = {
      email: "test@test.com",
      password: "test1222",
      confirmPassword: "test1234",
      nickname: "테스트",
    };
    expect(validation("register", registerInfo)).toBeFalsy();
  });

  it("nickName validation", () => {
    const registerInfo = {
      email: "test@test.com",
      password: "test1234",
      confirmPassword: "test1234",
      nickname: "a",
    };
    expect(validation("register", registerInfo)).toBeFalsy();
  });

  it("Pass register validation", () => {
    const registerInfo = {
      email: "test@test.com",
      password: "test1234",
      confirmPassword: "test1234",
      nickname: "test",
    };
    expect(validation("register", registerInfo)).toBeTruthy();
  });
});

describe("Login validation", () => {
  it("email validation", () => {
    const loginInfo = {
      email: "abcde",
      password: "test1234",
    };
    expect(validation("login", loginInfo)).toBeFalsy();
  });

  it("password validation", () => {
    const loginInfo = {
      email: "test@test.com",
      password: "test12",
    };
    expect(validation("login", loginInfo)).toBeFalsy();
  });

  it("Pass login validation", () => {
    const loginInfo = {
      email: "test@test.com",
      password: "test1234",
    };
    expect(validation("login", loginInfo)).toBeTruthy();
  });
});
