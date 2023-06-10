import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Log from "../pages/Log/Log";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import { adminLoader } from "../loader/adminLoader";
import Homepage from "../pages/HomePage/HomePage";
import User from "../pages/HomePage/pages/User/user";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: adminLoader,
    children: [
      {
        path: "/log",
        element: (
          <ProtectedRoute>
            <Log />
          </ProtectedRoute>
        ),
      },
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/user",
        element: <User />,
      },
    ],
  },
]);
