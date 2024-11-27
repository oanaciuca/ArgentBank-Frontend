import React from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute"; // Vérifiez le chemin d'import
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import './css/main.css';

function App() {
  return (
    <Routes>
      {/* Route protégée */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <HomePage /> {/* Le composant HomePage est un enfant ici */}
          </ProtectedRoute>
        }
      />
      {/* Route de connexion */}
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
