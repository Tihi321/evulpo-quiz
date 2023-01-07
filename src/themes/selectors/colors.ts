import { get } from "lodash";
import { createSelector } from "reselect";
import { ThemeProps } from "styled-components";

const themeColors = (state: ThemeProps<any>) => get(state, ["theme", "colors"], {});

export const whiteColor = createSelector(themeColors, (colors: object) => get(colors, "white"));
export const backgroundColor = createSelector(themeColors, (colors: object) =>
  get(colors, "background")
);
