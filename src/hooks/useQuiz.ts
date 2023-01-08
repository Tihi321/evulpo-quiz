import isEmpty from "lodash/isEmpty";
import { useEffect } from "react";
import { useStateStore, useStateSelector } from "ts-use";
import { GAME_MESSAGES } from "../enums/socket";
import { StateKeys } from "../enums/store";
import { useSocketData } from "./useSocketData";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../enums/routes";
import { getAreQuestionsReady } from "../selectors";

export const useQuiz = () => {
  const navigate = useNavigate();
  const { stateSelector, onStateObjectChange } = useStateStore();
  const questionDataReceived = useStateSelector(getAreQuestionsReady(stateSelector));

  const { sendMessage, data: questionsData } = useSocketData({
    message: GAME_MESSAGES.QUESTIONS,
    initialState: [],
    mirror: false,
  });
  const { data: score } = useSocketData({
    message: GAME_MESSAGES.SCORE,
    initialState: 0,
    mirror: true,
  });

  useEffect(() => {
    if (!questionDataReceived) {
      sendMessage();
    }
  }, []);

  useEffect(() => {
    onStateObjectChange({
      [StateKeys.Questions]: questionsData,
      [StateKeys.PlayerScore]: score,
    });
  }, [score, questionsData]);

  useEffect(() => {
    if (!isEmpty(questionsData)) {
      navigate(ROUTES.QUIZ);
    }
  }, [questionsData]);

  return {
    showLoader: !questionDataReceived,
  };
};
