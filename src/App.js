import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import TokenContext from "./TokenContext";
import "./components/Kalender";
import Kalender from "./components/Kalender";
import FooterNavigation from "./components/FooterNavigation";

function App() {
  const tokenState = useState({});
  return (
    <TokenContext.Provider value={tokenState}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FooterNavigation />} />
        </Routes>
      </BrowserRouter>
    </TokenContext.Provider>
  );
}

export default App;
