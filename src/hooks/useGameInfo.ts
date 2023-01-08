import get from "lodash/get";
import isEqual from "lodash/isEqual";
import { useStateStore, useStateSelector } from "ts-use";
import { EAnswerInfo } from "../enums/store";
import {
  getPlayerScore,
  getQuestionIndex,
  getQuestionsState,
  getAnswerInfoState,
} from "../selectors";

export const useGameInfo = () => {
  const { stateSelector } = useStateStore();

  const questionIndex = useStateSelector(getQuestionIndex(stateSelector));
  const answerInfoState = useStateSelector(getAnswerInfoState(stateSelector));

  return {
    score: useStateSelector(getPlayerScore(stateSelector)),
    topic: get(useStateSelector(getQuestionsState(stateSelector)), [questionIndex, "topic"]),
    answerInfoCorrect: isEqual(answerInfoState, EAnswerInfo.Correct),
    answerInfoIncorrect: isEqual(answerInfoState, EAnswerInfo.Incorrect),
  };
};
