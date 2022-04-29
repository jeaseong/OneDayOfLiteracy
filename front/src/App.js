import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/User/Auth/Login";
import Register from "./pages/User/Auth/Register";
import UserProfile from "./pages/User/Profile/UserProfile";
import KakaoLoginHandler from "./pages/User/Auth/KakaoLoginHandler";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import TestHome from "./pages/TestSheet/TestHome";
import TestResult from "./pages/TestSheet/TestResult";
import { useGetCurrentUser } from "./queries/userQuery";

function App() {
  const { isFetching } = useGetCurrentUser();

  if (isFetching) return <Loading />;

  return (
    <div className="App">
      <Router>
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/user/login" element={<Login />} />
            <Route path="/user/register" element={<Register />} />
            <Route path="/user/:userId" element={<UserProfile />} />
            <Route
              path="/oauth/callback/kakao"
              element={<KakaoLoginHandler />}
            />
            <Route path="/test" element={<TestHome />} />
            <Route path="/test/result" element={<TestResult />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
