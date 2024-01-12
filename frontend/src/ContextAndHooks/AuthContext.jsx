import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [bank, setBank] = useState(null);
  const [token, setToken] = useState(null);
  const [isLogin, setIsLogin] = useState(null);
  return (
    <AuthContext.Provider
      value={{ user, setUser, token, setToken, isLogin, setIsLogin ,bank,setBank}}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
