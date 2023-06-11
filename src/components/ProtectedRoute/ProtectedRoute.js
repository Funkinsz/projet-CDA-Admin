import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { admin } = useContext(AuthContext);

  return admin ? children : <Navigate to="/log" />
}
