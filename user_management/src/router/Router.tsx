import { FC, memo } from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../components/pages/Login";
import { HeaderLayout } from "../components/templates/HeaderLayout";
import { LoginUserProvider } from "../providers/LoginUserProvider";
import { HomeRoutes } from "./HomeRoutes";

export const Router: FC = memo(() => {
  return (
    <LoginUserProvider>
      <Routes>
        {HomeRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={
              route.header ? (
                <HeaderLayout children={route.element}></HeaderLayout>
              ) : (
                route.element
              )
            }
          />
        ))}
      </Routes>
    </LoginUserProvider>
  );
});
