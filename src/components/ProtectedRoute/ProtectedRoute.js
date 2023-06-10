import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { admin } = useContext(AuthContext);

  console.log(admin);

  return admin ? <Navigate to="/" /> : children  
}
