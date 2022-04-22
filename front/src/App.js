import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/User/Auth/Login";
import Register from "./pages/User/Auth/Register";
import KakaoLoginHandler from "./pages/User/Auth/KakaoLoginHandler";
import { useCurrentUser } from "./queries/userQuery";

function App() {
  const { isLoading } = useCurrentUser();

  if (isLoading) return "Loading..";

  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/user/register" element={<Register />} />
        <Route path="/oauth/callback/kakao" element={<KakaoLoginHandler />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
