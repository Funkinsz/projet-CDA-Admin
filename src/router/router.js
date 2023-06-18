import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Log from "../pages/Log/Log";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import { adminLoader } from "../loader/adminLoader";
import Dashboard from "../pages/Dashboard/Dashboard";
import HomePage from "../pages/Dashboard/Homepage/HomePage";
import Adds from "../pages/Dashboard/Homepage/pages/Adds/Adds";
import User from "../pages/Dashboard/Homepage/pages/User/user";
import Styles from "../pages/Dashboard/Homepage/pages/Styles/Styles";

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
        children: [
          {
            path: "/homepage",
            index: true,
            element: <HomePage />,
          },
          {
            path: "/user",
            element: <User />,
          },
          {
            path: "/adds",
            element: <Adds />
          },
          {
            path: "/styles",
            element: <Styles />
          }
        ],
      },
    ],
  },
]);
