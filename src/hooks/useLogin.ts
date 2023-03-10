import get from "lodash/get";
import isEmpty from "lodash/isEmpty";
import { useEffect, useState } from "react";
import { useStateStore } from "ts-use";
import { GAME_MESSAGES } from "../enums/socket";
import { StateKeys } from "../enums/store";
import { useSocketData } from "./useSocketData";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../enums/routes";
import { SocketClient } from "../controllers/SocketClient";

export const useLogin = () => {
  const navigate = useNavigate();
  const { onStateObjectChange } = useStateStore();
  const [socketConnected, setSocketConnected] = useState(false);

  const { sendMessage, data } = useSocketData({
    message: GAME_MESSAGES.ADD_PLAYER,
    initialState: {},
    mirror: false,
  });

  useEffect(() => {
    SocketClient.onConnection(() => {
      setSocketConnected(true);
    });
  }, []);

  useEffect(() => {
    if (!isEmpty(data)) {
      onStateObjectChange({
        [StateKeys.PlayerInfo]: {
          id: get(data, ["id"]),
          name: get(data, ["name"]),
        },
        [StateKeys.PlayerScore]: get(data, ["score"]),
      });
      navigate(ROUTES.QUIZ);
    }
  }, [data]);

  return {
    register: sendMessage,
    disableSubmit: !socketConnected,
  };
};
