import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const ContainerStyled = styled.div`
  grid-area: content;
  padding: 1em;
`;

export const Info = () => {
  const { t } = useTranslation();
  return <ContainerStyled>{t("labels.next")}Info</ContainerStyled>;
};
