import { KAKAO_AUTH_URL } from "../kakao/OAuth";
import styles from "./App.module.css";
import axios from "axios";

function Main() {

  function handleLogout(e) {
    axios.get("http://localhost:5001/user/kakao/unlink", {
      headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` },
    });
    
    window.location.href = '/';
  }

  return (
    <>
      <a href={KAKAO_AUTH_URL}>
        <div className={styles.kakao_btn}></div>
      </a>

      <div className={styles.kakao_btn2} onClick={handleLogout}></div>
    </>
  );
}

export default Main;
