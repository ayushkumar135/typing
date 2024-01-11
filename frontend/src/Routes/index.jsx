import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register"; 
import Home from "../pages/Home";
import Leaderboard from "../pages/Leaderboard";
import Profile from "../pages/Profile";
import Friends from "../pages/Friends";
import Contactus from "../pages/Contactus";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/leaderboard",
    element: <Leaderboard />,
  },
  {
    path: "/friends",
    element: <Friends />,
  },
  {
    path: "/contactus",
    element: <Contactus />,
  },
]);
