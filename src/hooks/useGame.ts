import { useState, useEffect } from "react";
import isEqual from "lodash/isEqual";
import get from "lodash/get";
import map from "lodash/map";
import isEmpty from "lodash/isEmpty";
import { useNavigate } from "react-router-dom";
import { useStateStore, useStateSelector } from "ts-use";
import {
  getQuestionIndex,
  getQuestionsState,
  getQuestionNumber,
  getNumberOfQuestions,
  getPlayerId,
  getIsLastQuestion,
} from "../selectors";
import { TRoundButtonItem } from "../components/inputs/RoundButtonGroup";
import { GAME_MESSAGES } from "../enums/socket";
import { useSocketData } from "./useSocketData";
import { EAnswerInfo, StateKeys } from "../enums/store";
import { ROUTES } from "../enums/routes";

const getOptionsType = (
  index: number,
  selectedIndex: number,
  submited: boolean,
  correctIndex: number | undefined
) => {
  if (!submited) {
    return "primary";
  }

  if (!isEqual(index, selectedIndex)) {
    return "inactive";
  }

  return isEqual(correctIndex, selectedIndex) ? "success" : "error";
};

export const useGame = () => {
  const navigate = useNavigate();
  const { stateSelector, onStateKeyChange } = useStateStore();
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(0);

  const {
    sendMessage,
    data: answerData,
    resetData,
  } = useSocketData({
    message: GAME_MESSAGES.SUBMIT_ANSWER,
    initialState: {},
    mirror: false,
  });

  const playerId = useStateSelector(getPlayerId(stateSelector));
  const questionIndex = useStateSelector(getQuestionIndex(stateSelector));
  const currentQuestion = get(useStateSelector(getQuestionsState(stateSelector)), [questionIndex]);
  const possibleAnswers = get(currentQuestion, ["answerOptions"]);

  const questionSubmitted = !isEmpty(answerData);

  useEffect(() => {
    if (isEmpty(answerData)) {
      onStateKeyChange(StateKeys.AnswerInfoState, EAnswerInfo.Hidden);
      return;
    }
    if (get(answerData, ["isCorrect"])) {
      onStateKeyChange(StateKeys.AnswerInfoState, EAnswerInfo.Correct);
      return;
    }
    if (!get(answerData, ["isCorrect"])) {
      onStateKeyChange(StateKeys.AnswerInfoState, EAnswerInfo.Incorrect);
      return;
    }
  }, [answerData]);

  return {
    numberOfQuestions: useStateSelector(getNumberOfQuestions(stateSelector)),
    questionNumber: useStateSelector(getQuestionNumber(stateSelector)),
    questionTitle: get(currentQuestion, ["question"]),
    selected: selectedAnswerIndex,
    questionSubmitted,
    lastQuestion: useStateSelector(getIsLastQuestion(stateSelector)),
    options: map(possibleAnswers, (answer, index) => ({
      value: index,
      label: answer,
      type: getOptionsType(
        index,
        selectedAnswerIndex,
        questionSubmitted,
        get(answerData, ["answerIndex"])
      ),
      disabled: questionSubmitted,
    })) as TRoundButtonItem[],
    onAnswerChange: (values: any) => {
      setSelectedAnswerIndex(get(values, ["value"]));
    },
    onSubmit: () => {
      sendMessage({
        playerId,
        questionId: get(currentQuestion, ["id"]),
        answerIndex: selectedAnswerIndex,
      });
    },
    onNext: () => {
      resetData();
      setSelectedAnswerIndex(0);
      onStateKeyChange(StateKeys.QuestionIndex, questionIndex + 1);
    },
    onFinish: () => {
      resetData();
      setSelectedAnswerIndex(0);
      onStateKeyChange(StateKeys.QuestionIndex, 0);
      navigate(ROUTES.SUMMARY);
    },
  };
};
