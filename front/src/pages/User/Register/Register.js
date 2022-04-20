function Register() {
  return (
    <div>
      <h2>문해한 하루</h2>
      <form>
        <label htmlFor="register-email">이메일</label>
        <input id="register-email" type="email" />
        <label htmlFor="register-password">비밀번호</label>
        <input id="register-password" type="password" />
        <label htmlFor="register-confirm-password">비밀번호 확인</label>
        <input id="register-confirm-password" type="password" />
        <label htmlFor="register-nickname">닉네임</label>
        <input id="register-nickname" type="text" />
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
}

export default Register;
