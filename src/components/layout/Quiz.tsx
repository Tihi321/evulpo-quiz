import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

export const ContainerStyled = styled.main`
  grid-area: content;
  padding: 1em;
`;

export const Quiz = () => {
  const { t } = useTranslation();
  return <ContainerStyled>Quiz{t("labels.next")}</ContainerStyled>;
};
