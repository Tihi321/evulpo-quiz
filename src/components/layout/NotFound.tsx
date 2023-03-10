import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../enums/routes";
import { innerCenterContainer } from "../../styles/shared";
import { LogoContainer } from "../common/LogoContainer";

const ContainerStyled = styled.div`
  ${innerCenterContainer}
  background-color: ${(props) => props.theme.colors.cashmere};
  padding: 10px;
`;

const ContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TextStyled = styled.div`
  color: ${(props) => props.theme.colors.bazar};
  font-weight: 700;
  font-size: 16px;
  line-height: 14px;
  padding: 8px 0;
`;

const Bold = styled.div`
  font-size: 0.875rem;
  font-weight: bold;
`;

export const NotFound = () => {
  const { t } = useTranslation();
  return (
    <ContainerStyled>
      <LogoContainer />
      <ContentStyled>
        <TextStyled>{t("not_found.title")}</TextStyled>
        <TextStyled>{t("not_found.route")}</TextStyled>
        <NavLink to={ROUTES.ROOT}>
          <Bold>{t("not_found.home_label")}</Bold>
        </NavLink>
      </ContentStyled>
    </ContainerStyled>
  );
};
