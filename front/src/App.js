import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Main from "./pages/Main/Main";
import Login from "./pages/User/Auth/Login";
import Register from "./pages/User/Auth/Register";
import KakaoLoginHandler from "./pages/User/Auth/KakaoLoginHandler";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import TestHome from "./pages/TestSheet/TestHome";
import TrainingStepOne from "./pages/Training/TrainingStepOne";
import TrainingStepTwo from "./pages/Training/TrainingStepTwo";
import TrainingStepThree from "./pages/Training/TrainingStepThree";
import TrainingStepFour from "./pages/Training/TrainingStepFour";
import { useCurrentUser } from "./queries/userQuery";

function App() {
  const { isLoading } = useCurrentUser();

  if (isLoading) return <Loading />;

  return (
    <div className="App">
      <Router>
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/user/login" element={<Login />} />
            <Route path="/user/register" element={<Register />} />
            <Route
              path="/oauth/callback/kakao"
              element={<KakaoLoginHandler />}
            />
            <Route path="/main" element={<Main />} />
            <Route path="/training/1" element={<TrainingStepOne />} />
            <Route path="/training/2" element={<TrainingStepTwo />} />
            <Route path="/training/3" element={<TrainingStepThree />} />
            <Route path="/training/4" element={<TrainingStepFour />} />
            <Route path="/test" element={<TestHome />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
