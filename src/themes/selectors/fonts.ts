import { ThemeProps } from "styled-components";
import { get } from "lodash";

export const themeFonts = (state: ThemeProps<any>) => get(state, ["theme", "fonts"]);
