import { createBrowserRouter } from "react-router-dom";

import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";

import Register from "../Pages/Register/Register";
import Dashboard from "../Pages/Dashboard/Dashboard";


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
        path: "/login",
        element: <Login></Login>,
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/dashboard",
        element:<Dashboard></Dashboard>
      },

    ],
  },
]);
export { router };
