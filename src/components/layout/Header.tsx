import React from "react";
import styled from "styled-components";
import { useTheme } from "../../hooks/useTheme";
import { headerBGColor, headerTextColor } from "../../themes";
import { Button } from "../common/Button";

const HeaderContainer = styled.header`
  grid-area: header;
  padding: 1em;
  background-color: ${headerBGColor};
  color: ${headerTextColor};
  text-align: center;
  font-weight: bold;
  display: flex;
`;

const HeaderTitle = styled.h1`
  flex: 1;
  text-align: center;
  margin: 0;
  padding: 0;
`;

const ButtonStyled = styled(Button)`
  max-width: 80px;
  text-transform: capitalize;
  font-weight: bold;
`;

export const Header = () => {
  const { theme, switchTheme } = useTheme();
  return (
    <HeaderContainer>
      <HeaderTitle>The Recipe Collection</HeaderTitle>
      <ButtonStyled onClick={switchTheme}>{theme}</ButtonStyled>
    </HeaderContainer>
  );
};
