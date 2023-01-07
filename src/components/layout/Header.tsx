import isEqual from "lodash/isEqual";
import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import { ETheme } from "../../enums/store";
import { useTheme } from "../../hooks/useTheme";
import { RoundIcon } from "../common/RoundIcon";
import { whiteColor } from "../../themes/selectors";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: end;
`;

const LabelStyled = styled.div`
  color: ${whiteColor};
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
  return (
    <HeaderContainer>
      <LabelStyled>{t("labels.background")}</LabelStyled>
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
    </HeaderContainer>
  );
};
