import isEqual from "lodash/isEqual";
import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import { ETheme } from "../../enums/store";
import { useTheme } from "../../hooks/useTheme";
import { RoundIcon } from "../common/RoundIcon";
import { whiteColor } from "../../themes/selectors";
import { useHeader } from "../../hooks/useHeader";
import { EXTERNAL_LINKS } from "../../enums/routes";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: end;
  color: ${whiteColor};
  flex-wrap: wrap;
`;

const InfoContainer = styled.div`
  flex: 1;
`;

const TextStyled = styled.div`
  color: ${whiteColor};
  font-size: 14px;
  margin: 0 8px;
  width: 100%;
`;

const Link = styled.a`
  text-decoration: none;
  color: ${whiteColor};
  font-size: 14px;
  margin: 0 8px;
`;

const ButtonStyled = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-left: 8px;
`;

export const Header = () => {
  const { t } = useTranslation();
  const { theme, styledTheme, setTheme } = useTheme();
  const { name } = useHeader();
  return (
    <HeaderContainer>
      <InfoContainer>
        <Link href={EXTERNAL_LINKS.ASSETS} target={"_blank"}>
          {t("labels.assets")}
        </Link>
        <Link href={EXTERNAL_LINKS.HALL_OF_FAME} target={"_blank"}>
          {t("labels.hall_of_fame")}
        </Link>
      </InfoContainer>
      {t("labels.background")}
      <ButtonStyled onClick={() => setTheme(ETheme.Light)}>
        <RoundIcon
          borderColor={styledTheme.colors.white}
          bgColor={
            isEqual(theme, ETheme.Light) ? styledTheme.colors.white : styledTheme.colors.transparent
          }
        />
      </ButtonStyled>
      <ButtonStyled onClick={() => setTheme(ETheme.Dark)}>
        <RoundIcon
          borderColor={styledTheme.colors.white}
          bgColor={
            isEqual(theme, ETheme.Dark) ? styledTheme.colors.white : styledTheme.colors.transparent
          }
        />
      </ButtonStyled>
      {name && (
        <TextStyled>
          {t("labels.user")}: {name}
        </TextStyled>
      )}
    </HeaderContainer>
  );
};
