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

function registerValidation(type, info) {
  const { email, password, confirmPassword, nickName } = info;

  return (
    emailValidate(email) &&
    passwordValidate(type, { password, confirmPassword }) &&
    nickName.length >= 2
  );
}

function loginValidation(type, info) {
  const { email, password } = info;
  return emailValidate(email) && passwordValidate(type, password);
}

export const validation = (type, info) => {
  if (type === "register") return registerValidation(type, info);
  return loginValidation(type, info);
};
