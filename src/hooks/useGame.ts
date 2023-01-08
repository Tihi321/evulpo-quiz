import { useState } from "react";
import get from "lodash/get";
import map from "lodash/map";
import { useStateStore, useStateSelector } from "ts-use";
import {
  getQuestionIndex,
  getQuestionsState,
  getQuestionNumber,
  getNumberOfQuestions,
} from "../selectors";
import { TRoundButtonItem } from "../components/inputs/RoundButtonGroup";

export const useGame = () => {
  const { stateSelector } = useStateStore();
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(0);

  const questionIndex = useStateSelector(getQuestionIndex(stateSelector));
  const currentQuestion = get(useStateSelector(getQuestionsState(stateSelector)), [questionIndex]);
  const possibleAnswers = get(currentQuestion, ["answerOptions"]);

  return {
    numberOfQuestions: useStateSelector(getNumberOfQuestions(stateSelector)),
    questionNumber: useStateSelector(getQuestionNumber(stateSelector)),
    questionTitle: get(currentQuestion, ["question"]),
    selected: selectedAnswerIndex,
    options: map(possibleAnswers, (answer, index) => ({
      value: index,
      label: answer,
      type: "primary",
      disabled: false,
    })) as TRoundButtonItem[],
    onAnswerChange: (values: any) => {
      setSelectedAnswerIndex(get(values, ["value"]));
    },
    onSubmit: () => {
      const questionId = get(currentQuestion, ["id"]);
      console.log({
        questionId,
        selectedAnswerIndex,
      });
    },
  };
};
