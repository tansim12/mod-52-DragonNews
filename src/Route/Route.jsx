import { createBrowserRouter } from "react-router-dom";

import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";

import Register from "../Pages/Register/Register";
import Dashboard from "../Pages/Dashboard/Dashboard";
import NewsSingleDetails from "../News/NewsSingleDetails";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/news/:_id",
        element: (
          <PrivateRoute>
            <NewsSingleDetails></NewsSingleDetails>
          </PrivateRoute>
        ),
        loader: async () => {
          try {
            const res = await fetch("/news.json");
            const data = await res.json();
            return data;
          } catch (error) {
            console.log(error.message);
          }
        },
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
    ],
  },
]);
export { router };
