import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login_KakaoRedirectHandler from "./kakao/Login_KakaoRedirectHandler";
import Register_KakaoRedirectHandler from "./kakao/Register_KakaoRedirectHandler";
import Main from "./component/Main";
import Delete_KakaoRedirectHandler from "./kakao/Delete_KakaoRedirectHandler";
//import { LOGIN_REDIRECT_URI, REGISTER_REDIRECT_URI } from "./kakao/OAuth";


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
        <br/>
        <Router>
          <Routes>
            <Route path="/" exact element={<Main />} />
            <Route
              path="/oauth/callback/kakao"
              element={<Login_KakaoRedirectHandler />}
            />
            <Route
              path="/oauth/callback/kakao/register"
              element={<Register_KakaoRedirectHandler />}
            />
            <Route
              path="oauth/callback/kakao/delete"
              element={<Delete_KakaoRedirectHandler />}
            />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
