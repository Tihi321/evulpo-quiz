import get from "lodash/get";
import { useStateStore, useStateSelector } from "ts-use";
import { getPlayerScore, getQuestionIndex, getQuestionsState } from "../selectors";

export const useGameInfo = () => {
  const { stateSelector } = useStateStore();

  const questionIndex = useStateSelector(getQuestionIndex(stateSelector));

  return {
    score: useStateSelector(getPlayerScore(stateSelector)),
    topic: get(useStateSelector(getQuestionsState(stateSelector)), [questionIndex, "topic"]),
  };
};
