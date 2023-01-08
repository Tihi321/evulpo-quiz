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
  const { onStateKeyChange, stateSelector } = useStateStore();
  const { sendMessage, data } = useSocketData({
    message: GAME_MESSAGES.QUESTIONS,
    initialState: [],
    mirror: false,
  });

  useEffect(() => {
    sendMessage();
  }, []);

  useEffect(() => {
    if (!isEmpty(data)) {
      console.log(data);
      onStateKeyChange(StateKeys.Questions, data);
      navigate(ROUTES.QUIZ);
    }
  }, [data]);

  return {
    showLoader: !useStateSelector(getAreQuestionsReady(stateSelector)),
  };
};
