import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Assurez-vous que le chemin d'import est correct

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth(); // Accéder à l'état d'authentification depuis le contexte

  // Si l'état d'authentification est null (en attente de chargement), afficher un message de chargement
  if (isAuthenticated === null) {
    return <div>Loading...</div>; // Vous pouvez afficher un loader ici si nécessaire
  }

  // Si l'utilisateur n'est pas authentifié, rediriger vers la page de login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Si l'utilisateur est authentifié, afficher les enfants passés en prop
  return children; // Retourne les enfants (composant) de la route protégée
};

export default ProtectedRoute;
