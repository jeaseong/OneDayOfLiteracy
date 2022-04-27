// kakao_auth_url 여기서 관리 
//(카카오 계정 연동의 흐름 초반)LOGIN_KAKAO_AUTH_URL로 이동하면 카카오 로그인 화면이 나오고, 로그인 하면,
// App.js에 path="/oauth/callback/kakao" 로 라우팅된 Login_KakaoRedirectHandler 로 이동
// Login_KakaoRedirectHandler 에서는 code를 백엔드에 넘겨줌
// 그럼 백엔드에서 알아서 처리하고 사용자 토큰 줄거임

//kakao_auth_url

const CLIENT_ID = "cc238aca5fb00be45c4c535de07dee94";
const LOGIN_REDIRECT_URI = "http://localhost:3000/oauth/callback/kakao";
const REGISTER_REDIRECT_URI ="http://localhost:3000/oauth/callback/kakao/register";
const DELETE_REDIRECT_URI = "http://localhost:3000/oauth/callback/kakao/delete";


const LOGIN_KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${LOGIN_REDIRECT_URI}&response_type=code`;
const REGISTER_KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REGISTER_REDIRECT_URI}&response_type=code`;
const DELETE_KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${DELETE_REDIRECT_URI}&response_type=code`;


const SERVER_URL = "http://localhost:5001";

export {
  LOGIN_REDIRECT_URI,
  REGISTER_REDIRECT_URI,
  LOGIN_KAKAO_AUTH_URL,
  REGISTER_KAKAO_AUTH_URL,
  SERVER_URL,
  DELETE_REDIRECT_URI,
  DELETE_KAKAO_AUTH_URL,
};
