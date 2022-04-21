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
    } catch {}
  };

  return (
    <div className="App">
      {/* <QueryClientProvider client={queryClient}>
        <Header />
      </QueryClientProvider> */}
    </div>
  );
}

export default App;
