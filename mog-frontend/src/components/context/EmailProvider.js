import React from "react";
import { createContext, useState } from "react";

export const EmailContext = createContext();

const EmailProvider = ({ children }) => {
  const [email, setEmail] = useState(localStorage.getItem("email"));

  const value = { email, setEmail };

  return (
    <EmailContext.Provider value={value}>{children}</EmailContext.Provider>
  );
};

export default EmailProvider;
