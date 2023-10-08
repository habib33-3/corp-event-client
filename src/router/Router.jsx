import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Registration from "../pages/Registration/Registration";
import Login from "../pages/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/register",
        element: <Registration />,
      },

      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
