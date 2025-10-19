// src/components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";

// This can later be replaced by a proper authentication hook
const useAuth = () => {
  // Example: check if there's a token stored
  return localStorage.getItem("authToken") !== null;
};

export default function ProtectedRoute({ children }) {
  const isAuthenticated = useAuth();

  if (!isAuthenticated) {
    // If not logged in, redirect to the homepage (or login)
    return <Navigate to="/" replace />;
  }

  // If authenticated, render the protected content
  return children;
}
