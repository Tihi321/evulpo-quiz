import { isEmpty } from "lodash";
import { useEffect } from "react";
import { useStateStore } from "ts-use";
import { GAME_MESSAGES } from "../enums/socket";
import { StateKeys } from "../enums/store";
import { useSocketData } from "./useSocketData";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../enums/routes";

export const useLogin = () => {
  const navigate = useNavigate();
  const { onStateKeyChange } = useStateStore();
  const { sendMessage, data } = useSocketData({
    message: GAME_MESSAGES.ADD_PLAYER,
    initialState: {},
    mirror: false,
  });

  useEffect(() => {
    if (!isEmpty(data)) {
      console.log(data);
      onStateKeyChange(StateKeys.PlayerInfo, data);
      navigate(ROUTES.QUIZ);
    }
  }, [data, navigate]);

  return {
    register: sendMessage,
  };
};
