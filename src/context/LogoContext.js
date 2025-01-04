// src/contextLogoContext.js
import React, { createContext, useState, useContext } from "react";

const LogoContext = createContext();

export const LogoProvider = ({ children }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <LogoContext.Provider value={{ isAnimating, setIsAnimating }}>
      {children}
    </LogoContext.Provider>
  );
};

export const useLogoContext = () => useContext(LogoContext);
