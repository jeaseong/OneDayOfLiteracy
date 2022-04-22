import React, { useState, useEffect, useReducer, createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as Api from "./utils/api";
import { loginReducer } from "./utils/reducer";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Errorpage from "./components/Errorpage";
import Loading from "./components/Loading";

export const UserStateContext = createContext(null);
export const DispatchContext = createContext(null);

function App() {
  // const [userState, dispatch] = useReducer(loginReducer, { user: null });

  // const [isFetchCompleted, setIsFetchCommpleted] = useState(false);

  // const fetchCurrentUser = async () => {
  //   try {
  //     const res = await Api.get("user/current");
  //     const currentUser = res.data;

  //     dispatch({
  //       type: "LOGIN_SUCCESS",
  //       payload: currentUser,
  //     });

  //     console.log("%c sessionStorage에 토큰 있음.");
  //   } catch {
  //     console.log("%c SessionStorage에 토큰 없음.");
  //   }
  //   setIsFetchCommpleted(true);
  // };

  // useEffect(() => {
  //   fetchCurrentUser();
  // }, []);

  // if (!isFetchCompleted) {
  //   return "loading...";
  // }

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="*" element={<Errorpage />} />
        <Route path="/" exact element={<Loading />} />
        <Route path="/loading" element={<Loading />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
