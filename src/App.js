import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { LogoProvider } from "./context/LogoContext";
import LoginWithLoading from "./components/Pages/Page_1";
import Screen0 from "./components/Pages/Page_0";
import SignUp from "./components/Pages/Page_2";
import OTP from "./components/Pages/Page_3";
import Addition from "./components/Pages/Page_4";



function App() {
  return (
    <LogoProvider>
      <Router>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Screen0 />} />
            <Route path="/auth" element={<LoginWithLoading />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/verify" element={<OTP />} />
            <Route path="/addition" element={<Addition />} />



          </Routes>
        </AnimatePresence>
      </Router>
    </LogoProvider>
  );
}

export default App;
