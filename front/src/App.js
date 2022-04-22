import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import KakaoRedirectHandler from "./kakao/KakaoRedirectHandler";
import Login from "./component/Login";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Router>
          <Routes>
            <Route path="/" exact element={<Login />} />
            <Route
              path="/oauth/callback/kakao"
              element={<KakaoRedirectHandler />}
            />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
