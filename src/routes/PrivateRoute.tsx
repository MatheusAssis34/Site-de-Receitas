import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const PrivateRoute = ({ children }: { children:React.ReactNode }) => {
  const { usuario, loading } = useAuth();

  if (loading) return <p>Carregando...</p>;

  return usuario ? children : <Navigate to="/login" />;
};
