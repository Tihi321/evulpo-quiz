import { useTheme as useStyledTheme } from "styled-components";
import { useStateStore, useStateSelector, useLocalStorage } from "ts-use";
import { getThemeWith } from "../selectors";
import { ETheme, StateKeys } from "../enums/store";
import { LocalStorageKeys } from "../enums/localStorage";

export const useTheme = () => {
  const styledTheme: any = useStyledTheme();
  const { stateSelector, onStateKeyChange } = useStateStore();
  const { setLocalStorage } = useLocalStorage(LocalStorageKeys.Theme, "", false);

  const theme = useStateSelector(getThemeWith(stateSelector)) as ETheme;

  const setTheme = (theme: ETheme) => {
    setLocalStorage(theme);
    onStateKeyChange(StateKeys.Theme, theme);
  };

  return {
    styledTheme,
    theme,
    setTheme,
  };
};
