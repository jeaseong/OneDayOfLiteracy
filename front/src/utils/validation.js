function emailValidate(email) {
  const emailRule =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRule.test(email);
}

function passwordValidate(type, passwordInfo) {
  const passwordRule = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
  if (type !== "register") return passwordRule.test(passwordInfo);

  const { password, confirmPassword } = passwordInfo;
  const isSame = password === confirmPassword;
  const isPass =
    passwordRule.test(password) && passwordRule.test(confirmPassword);
  return isPass && isSame;
}

function registerValidation(info) {
  const { email, password, confirmPassword, nickName } = info;

  return (
    emailValidate(email) &&
    passwordValidate("register", { password, confirmPassword }) &&
    nickName.length >= 2
  );
}

function loginValidation(info) {}

export const validation = (type, info) => {
  if (type === "register") return registerValidation(info);
  return loginValidation(info);
};
