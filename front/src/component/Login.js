import { KAKAO_AUTH_URL } from "../kakao/OAuth";
import styles from "./App.module.css";
function Login() {
  return (
    <>
      <a href={KAKAO_AUTH_URL}>
        <div className={styles.kakao_btn}></div>
      </a>
    </>
  );
}

export default Login;
