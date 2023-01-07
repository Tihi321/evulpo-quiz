import React from "react";
import { Route, Routes } from "react-router-dom";
import { ROUTES } from "../enums/routes";
import { Info } from "./layout/Info";
import { Login } from "./layout/Login";
import { NotFound } from "./layout/NotFound";
import { Quiz } from "./layout/Quiz";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path={ROUTES.ROOT} element={<Login />} />
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.QUIZ} element={<Quiz />} />
        <Route path={ROUTES.INFO} element={<Info />} />
        <Route path={ROUTES.NOT_ROUND} element={<NotFound />} />
      </Routes>
    </>
  );
};
