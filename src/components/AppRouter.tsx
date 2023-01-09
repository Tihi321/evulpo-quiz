import React from "react";
import { Route, Routes } from "react-router-dom";
import { ROUTES } from "../enums/routes";
import { Summary } from "./layout/Summary";
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
        <Route path={ROUTES.SUMMARY} element={<Summary />} />
        <Route path={ROUTES.NOT_ROUND} element={<NotFound />} />
      </Routes>
    </>
  );
};
