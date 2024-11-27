import React, { createContext, useState, useContext, useEffect } from "react";

// Créez un contexte d'authentification
const AuthContext = createContext();

// Hook pour accéder au contexte dans d'autres composants
export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // Initialisez à null pour gérer la vérification au démarrage

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true); // Si un token existe, l'utilisateur est authentifié
    } else {
      setIsAuthenticated(false); // Si aucun token, l'utilisateur n'est pas authentifié
    }
  }, []);

  const login = (token) => {
    setIsAuthenticated(true);
    localStorage.setItem("token", token);
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
