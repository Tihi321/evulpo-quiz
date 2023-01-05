import { get } from "lodash";
import { createSelector } from "reselect";
import { ThemeProps } from "styled-components";

const themeColors = (state: ThemeProps<any>) => get(state, ["theme", "colors"], {});

export const focusColor = createSelector(themeColors, (colors: object) => get(colors, "focus"));

export const primaryColor = createSelector(
  themeColors,
  (colors: object) => get(colors, "primary")
);

export const secondaryColor = createSelector(
  themeColors,
  (colors: object) => get(colors, "secondary")
);

export const defaultTextColor = primaryColor;
export const headerBGColor = focusColor;
export const headerTextColor = primaryColor;
export const asideBackgroundColor = secondaryColor;
export const searchBorderColor = focusColor;
export const searchBackgroundColor = primaryColor;
export const searchTextColor = focusColor;