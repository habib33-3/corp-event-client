import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Registration from "../pages/Registration/Registration";
import Login from "../pages/Login/Login";
import ErrorPage from "../pages/Error/ErrorPage";
import Career from "../pages/Career/Career";
import Booking from "../pages/Booking/Booking";
import EventDetails from "./../pages/EventDetails/EventDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/data.json"),
      },

      {
        path: "/register",
        element: <Registration />,
      },

      {
        path: "/login",
        element: <Login />,
      },

      {
        path: "/career",
        element: <Career />,
      },

      {
        path: "/details/:id",
        element: <EventDetails />,
        loader: () => fetch("/data.json"),
      },

      {
        path: "/booking",
        element: <Booking />,
      },
    ],
  },
]);

export default router;
