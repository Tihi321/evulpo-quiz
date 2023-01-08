import { useEffect, useState } from "react";
import { generateSelector } from "tsl-utils";

import { SocketClient } from "../controllers/SocketClient";
import { generateSocketDataMessage } from "../utils/socket";

export const useSocketData = ({
  message,
  mirror = true,
  initialState,
}: {
  message: string;
  mirror: boolean;
  initialState: any;
}) => {
  const [data, setData] = useState(initialState);

  useEffect(() => {
    if (mirror) {
      SocketClient.on(generateSocketDataMessage(message).mirror, setData);
    }

    return () => {
      SocketClient.off(generateSocketDataMessage(message).mirror);
    };
  }, [message, mirror]);

  const sendMessage = (args?: any) => {
    SocketClient.emit(generateSocketDataMessage(message).command, args);
    SocketClient.once(generateSocketDataMessage(message).response, setData);
  };

  return {
    selector: generateSelector(data),
    data,
    sendMessage,
    resetData: () => {
      setData(initialState);
    },
  };
};
