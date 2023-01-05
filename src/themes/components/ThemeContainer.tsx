import React from "react";
import { ThemeProvider } from "styled-components";

import { ETheme } from "../../enums/store";
import { useTheme } from "../../hooks/useTheme";
import { IContainerProps } from "../../types/layout";

import { darkTheme } from "../styles/dark";
import { lightTheme } from "../styles/light";

export const ThemeContainer = ({ children }: IContainerProps) => {
  const { theme } = useTheme();
  const themeData = theme === ETheme.Light ? lightTheme : darkTheme;

  return <ThemeProvider theme={themeData}>{children}</ThemeProvider>;
};
