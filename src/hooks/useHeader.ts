import { useStateStore, useStateSelector } from "ts-use";
import { getPlayerName } from "../selectors";

export const useHeader = () => {
  const { stateSelector } = useStateStore();

  return {
    name: useStateSelector(getPlayerName(stateSelector)),
  };
};
