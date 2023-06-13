import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { signin as login } from "../../apis/auth";
import { signout as logout } from "../../apis/auth";
import { AuthContext } from "../../context";

export default function AuthProvider({ children }) {
  const initialadmin = useLoaderData();
  const [admin, setAdmin] = useState(initialadmin);

  console.log(admin);

  async function signin(credentials) {
    const newAdmin = await login(credentials);
    setAdmin(newAdmin);
  }

  async function signout() {
    await logout();
    setAdmin(null);
  }

  return (
    <AuthContext.Provider
      value={{
        admin,
        signin,
        signout,
      }}>
      {children}
    </AuthContext.Provider>
  );
}
