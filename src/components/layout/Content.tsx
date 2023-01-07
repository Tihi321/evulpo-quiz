import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

export const ContentContainer = styled.main`
  grid-area: content;
  padding: 1em;
`;

export const Content = () => {
  const { t } = useTranslation();
  return <ContentContainer>{t("labels.background")}</ContentContainer>;
};
