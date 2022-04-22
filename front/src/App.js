import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/User/Auth/Login";
import Register from "./pages/User/Auth/Register";
import KakaoLoginHandler from "./pages/User/Auth/KakaoLoginHandler";
import { useCurrentUser } from "./queries/userQuery";

function App() {
  const { isLoading, isLogin } = useCurrentUser();

  isLogin ? console.log("로그인!") : console.log("로그인 정보 없음");
  if (isLoading) return "App Loading...";

  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/user/register" element={<Register />} />
        <Route path="/oauth/callback/kakao" element={<KakaoLoginHandler />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
