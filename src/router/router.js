import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Log from "../pages/Log/Log";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import { adminLoader } from "../loader/adminLoader";
import HomePage from "../pages/Dashboard/Homepage/HomePage";
import User from "../pages/Dashboard/Homepage/pages/User/user";
import Dashboard from "../pages/Dashboard/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: adminLoader,
    children: [
      {
        path: "/log",
        element: <Log />,
      },
      {
        path: "/",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "/homepage",
        element: (
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/user",
        element: (
          <ProtectedRoute>
            <User />,
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
