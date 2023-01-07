import { MESSAGE_COMMAND, MESSAGE_MIRROR, MESSAGE_RESPONSE } from "../enums/socket";

export const generateSocketDataMessage = (command: string) => ({
  command: `${command}-${MESSAGE_COMMAND}`,
  response: `${command}-${MESSAGE_RESPONSE}`,
  mirror: `${command}-${MESSAGE_MIRROR}`,
});
