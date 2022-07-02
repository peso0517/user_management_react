import { Home } from "../components/pages/Home";
import { Login } from "../components/pages/Login";
import { Page404 } from "../components/pages/Page404";
import { Setting } from "../components/pages/Setting";
import { UserManagement } from "../components/pages/UserManagement";

export const HomeRoutes = [
  {
    path: "/",
    element: <Login />,
    header: false,
  },
  {
    path: "/home",
    element: <Home />,
    header: true,
  },
  {
    path: "/user_management",
    element: <UserManagement />,
    header: true,
  },
  {
    path: "/setting",
    element: <Setting />,
    header: true,
  },
  {
    path: "*",
    element: <Page404 />,
    header: true,
  },
];
