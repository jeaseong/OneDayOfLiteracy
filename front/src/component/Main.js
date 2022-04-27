import {
  LOGIN_KAKAO_AUTH_URL,
  REGISTER_KAKAO_AUTH_URL,
  DELETE_KAKAO_AUTH_URL,
  SERVER_URL,
} from "../kakao/OAuth";
import styles from "./App.module.css";
import axios from "axios";

function Main() {

  // 토큰에 kakao의 사용자 액세스 토큰값 들어있을 때 이 방식으로 구현했었음
  // function handleLogout(e) {
  //   axios.delete(`http://localhost:5001/user/kakao/${sessionStorage.getItem("_id")}`, {
  //     headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` },
  //   });
    
  //   window.location.href = '/';
  // }

  async function handleGeneralLogin(e) {
    try {
      const res = await axios.post(
        SERVER_URL + "/user/login",
        {
          email: "ktkim@elicer.com",
          password: "123",
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      const user = res.data;
      const jwtToekn = user.token;
      console.log(user);
      sessionStorage.setItem("token", jwtToekn);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <div className={styles.container_center}>
        <button className={styles.btn} onClick={handleGeneralLogin}>
          Regular Login
        </button>
        <div className={styles.div_center}> 일반 로그인 </div>
      </div>

      <a href={LOGIN_KAKAO_AUTH_URL}>
        <div className={styles.kakao_btn}></div>
      </a>
      <div className={styles.div_center}> 로그인 </div>

      <a href={REGISTER_KAKAO_AUTH_URL}>
        <div className={styles.kakao_btn}></div>
      </a>
      <div className={styles.div_center}> 계정 등록 </div>

      <a href={DELETE_KAKAO_AUTH_URL}>
        <div className={styles.kakao_btn}></div>
      </a>
      <div className={styles.div_center}> 등록 삭제 </div>

      {/* <div className={styles.kakao_btn2} onClick={handleLogout}></div> */}
    </>
  );
}

export default Main;
