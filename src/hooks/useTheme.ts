import { useStateStore, useStateSelector, useLocalStorage } from "ts-use";
import { getThemeWith } from "../selectors";
import { ETheme, StateKeys } from "../enums/store";
import { LocalStorageKeys } from "../enums/localStorage";

export const useTheme = () => {
  const { stateSelector, onStateKeyChange } = useStateStore();
  const { setLocalStorage } = useLocalStorage(LocalStorageKeys.Theme, "", false);

  const theme = useStateSelector(getThemeWith(stateSelector)) as ETheme;

  const switchTheme = () => {
    const newTheme = theme === ETheme.Dark ? ETheme.Light : ETheme.Dark;
    setLocalStorage(newTheme);
    onStateKeyChange(StateKeys.Theme, newTheme)
  };

  return {
    theme,
    switchTheme
  };
}