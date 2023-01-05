import { useEffect } from "react";
import { useStateStore } from "ts-use";
import { useLocalStorage } from "ts-use";
import { LocalStorageKeys } from "../enums/localStorage";
import { StateKeys } from "../enums/store";
import { initialState } from "./initialState";

export const useContextStateProvider = () => {
  const { onStateObjectChange } = useStateStore();
  const { data: theme } = useLocalStorage(LocalStorageKeys.Theme, initialState.theme);

  useEffect(() => {
    onStateObjectChange({
      [StateKeys.Theme]: theme,
    });
    // eslint-disable-next-line
  }, [theme]);
};
