import { useNavigate } from "react-router-dom";
import { useStateStore, useStateSelector } from "ts-use";
import { getPlayerName, getPlayerScore } from "../selectors";
import { StateKeys } from "../enums/store";
import { ROUTES } from "../enums/routes";

export const useSummary = () => {
  const navigate = useNavigate();
  const { stateSelector, onStateKeyChange } = useStateStore();

  return {
    name: useStateSelector(getPlayerName(stateSelector)),
    score: useStateSelector(getPlayerScore(stateSelector)),
    onReset: () => {
      onStateKeyChange(StateKeys.PlayerScore, 0);
      navigate(ROUTES.QUIZ);
    },
  };
};
