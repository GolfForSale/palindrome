import React, { useState } from "react";
import LoginPage from "./pages/login-page";
import PalindromePage from "./pages/palindrome-page";

function App() {
  const [isAuthenticated, setAuthentication] = useState(false);

  return (
    <>
      {!isAuthenticated && <LoginPage setAuthentication={setAuthentication} />}
      {isAuthenticated && <PalindromePage />}
    </>
  );
}

export default App;
