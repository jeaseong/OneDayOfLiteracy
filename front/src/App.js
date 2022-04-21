import React, { useState, useEffect, useReducer, createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "reaact-router-dom";

import * as Api from "./utils/api";
import { loginReducer } from "./reducer";

import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Example from "./components/Query";
// import { QueryClient, QueryClientProvider, useQuery } from "react-query";

export const UserStateContext = createContext(null);
export const DispatchContext = createContext(null);

function App() {
  // const queryClient = new QueryClient();
  const [userState, dispatch] = useReducer(loginReducer, { user: null });

  const [isFetchCompleted, setIsFetchCommpleted] = useState(false);

  const fetchCurrentUser = async () => {
    try {
      const res = await Api.get("user/current");
      const currentUser = res.data;

      dispatch({
        type: "LOGIN_SUCCESS",
        payload: currentUser,
      });
    } catch {
      console.log("%c SessionStorage에 토큰 없음.");
    }
    setIsFetchCommpleted(true);
  };

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  return (
    <div className="App">
      {/* <QueryClientProvider client={queryClient}>
        <Header />
      </QueryClientProvider> */}
    </div>
  );
}

export default App;
