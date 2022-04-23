import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "react-query";
import { get } from "../../../utils/api";

/**
 * 카카오 로그인 진행 시 redirectURL로 컴포넌트가 마운트됩니다.
 * @retuns {null} 반환값은 없습니다.
 **/
function KakaoLoginHandler() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const kakaoCode = new URL(document.location.toString()).searchParams.get(
    "code"
  );

  useEffect(() => {
    const getKakaoToken = async () => {
      try {
        const res = await get("oauth/kakao?code=" + kakaoCode);
        const jwtToken = res.data.token;
        sessionStorage.setItem("userToken", jwtToken);

        queryClient.invalidateQueries("userState");
        navigate("/");
      } catch (err) {
        alert("로그인에 실패하였습니다.");
        navigate("/user/login");
      }
    };

    getKakaoToken();
  }, [kakaoCode, navigate, queryClient]);

  return null;
}

export default KakaoLoginHandler;
