import React, { useState } from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import pageConsts from "./pageConsts";
import LoginPage from "./pages/login-page";
import PalindromePage from "./pages/palindrome-page";

function App() {
  const [page, setPage] = useState("loginPage");
  return (
    <div className="App">
      <Counter />
      {page === pageConsts.loginPage && <LoginPage setPage={setPage} />}
      {page === pageConsts.palindromePage || true &&  <PalindromePage />}
    </div>
  );
}

export default App;
