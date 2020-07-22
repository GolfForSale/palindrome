import React, { useState } from "react";
import "./App.css";
import LoginPage from "./pages/login-page";
import PalindromePage from "./pages/palindrome-page";

function App() {
  const [isAuthenticated, setAuthentication] = useState(false);
  return (
    <div className="App">
      {!isAuthenticated && <LoginPage setAuthentication={setAuthentication} />}
      {isAuthenticated && <PalindromePage />}
    </div>
  );
}

export default App;
