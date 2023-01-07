import { isEmpty } from "lodash";
import { useEffect } from "react";
import { GAME_MESSAGES } from "../enums/socket";
import { useSocketData } from "./useSocketData";

export const useLogin = () => {
  const { sendMessage, data } = useSocketData({
    message: GAME_MESSAGES.ADD_PLAYER,
    initialState: {},
    mirror: false,
  });

  useEffect(() => {
    if (!isEmpty(data)) {
      console.log(data);
    }
  }, [data]);

  return {
    sendMessage,
  };
};
