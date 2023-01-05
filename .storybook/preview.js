import React from "react";
import { ThemeProvider } from "styled-components";
import { StyleLayout } from "../src/components/layout/StyleLayout";
import { darkTheme } from "../src/themes/styles/dark";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => {
    return (
      <ThemeProvider theme={darkTheme}>
          <StyleLayout>
              <Story />
          </StyleLayout>
      </ThemeProvider>
    );
  },
];