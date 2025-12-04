import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: null,
  });

  useEffect(() => {
    const saved = localStorage.getItem("bar_auth");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setAuth(parsed);
      } catch {
        // ignore
      }
    }
  }, []);

  const login = (user, token) => {
    const data = { user, token };
    setAuth(data);
    localStorage.setItem("bar_auth", JSON.stringify(data));
  };

  const logout = () => {
    setAuth({ user: null, token: null });
    localStorage.removeItem("bar_auth");
  };

  return (
    <AuthContext.Provider value={{ ...auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
