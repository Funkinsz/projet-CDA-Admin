import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Log from "../pages/Log/Log";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import { adminLoader } from "../loader/adminLoader";
import Homepage from "../pages/HomePage/HomePage";
import User from "../pages/HomePage/pages/user";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: adminLoader,
    children: [
      {
        path: "/",
        element: <Log />,
      },
      {
        path: "/homepage",
        element: (
          <ProtectedRoute>
            <Homepage />
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
