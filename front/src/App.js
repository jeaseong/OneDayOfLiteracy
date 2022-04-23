import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/User/Auth/Login";
import Register from "./pages/User/Auth/Register";
import KakaoLoginHandler from "./pages/User/Auth/KakaoLoginHandler";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import Layout from "./components/Layout";
import { TestHome } from "./pages/testSheet/TestHome";
import { useCurrentUser } from "./queries/userQuery";

function App() {
  const { isLoading } = useCurrentUser();

  if (isLoading) return <Loading />;

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/user/register" element={<Register />} />
        <Route path="/oauth/callback/kakao" element={<KakaoLoginHandler />} />
        <Route path="/test" element={<TestHome />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
