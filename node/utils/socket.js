const { MESSAGE_COMMAND, MESSAGE_RESPONSE, MESSAGE_MIRROR } = require("../constants/socket");

const generateSocketDataMessage = (command) => ({
  command: `${command}-${MESSAGE_COMMAND}`,
  response: `${command}-${MESSAGE_RESPONSE}`,
  mirror: `${command}-${MESSAGE_MIRROR}`,
});


module.exports = {
  generateSocketDataMessage,
};
