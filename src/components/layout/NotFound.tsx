import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../enums/routes";

export const ContainerStyled = styled.main`
  grid-area: content;
  padding: 1em;
`;

const Bold = styled.div`
  font-size: 0.875rem;
  font-weight: bold;
`;

export const NotFound = () => {
  const { t } = useTranslation();
  return (
    <ContainerStyled>
      {t("not_found.title")}
      {t("not_found.route")}
      <NavLink to={ROUTES.ROOT}>
        <Bold>{t("not_found.home_label")}</Bold>
      </NavLink>
    </ContainerStyled>
  );
};
