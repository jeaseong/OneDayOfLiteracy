// kakao_auth_url 여기서 관리

const CLIENT_ID = "cc238aca5fb00be45c4c535de07dee94";
const REDIRECT_URI = "http://localhost:3000/oauth/callback/kakao";
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
