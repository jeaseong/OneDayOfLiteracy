import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Errorpage from "./components/Errorpage";
import Loading from "./components/Loading";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="*" element={<Errorpage />} />
          <Route path="/" exact element={<Loading />} />
          <Route path="/loading" element={<Loading />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
