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
  const { email, password, confirmPassword, nickname } = info;

  return (
    emailValidate(email) &&
    passwordValidate(type, { password, confirmPassword }) &&
    nickname.length >= 2
  );
}

function loginValidation(type, info) {
  const { email, password } = info;
  return emailValidate(email) && passwordValidate(type, password);
}

/**
 * 로그인 및 회원가입 시 type에 따라 formData 유효성 검사를 진행합니다.
 * @constructor
 * @param {string} type 로그인인지 회원가입인지 구분하기 위한 type입니다.
 * @param {object} info 유효성 검사를 진행 할 formData입니다.
 **/
export const validation = (type, info) => {
  if (type === "register") return registerValidation(type, info);
  return loginValidation(type, info);
};
