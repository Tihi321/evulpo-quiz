const SOCKET_IO_PORT = 4567;

const SOCKET_IO_MESSAGES = {
  SERVER_LISTENERS_STARTED: "serverListenersStarted",
  SERVER_CONNECTION: "connection",
  CLIENT_CONNECT: "connect",
  DISCONNECT: "disconnect",
};

const MESSAGE_COMMAND = "Command";
const MESSAGE_RESPONSE = "Response";
const MESSAGE_MIRROR = "Mirror";


const GAME_MESSAGES = {
  ADD_PLAYER: "AddPlayer",
  PLAYER_ADDED: "PlayerAdded",
  PLAYERS_DATA: "PlayersData",
  QUESTIONS: "Questions",
  SCORE: "Score",
  SUBMIT_ANSWER: "SubmitAnswer",
};



module.exports = {
  GAME_MESSAGES,
  SOCKET_IO_MESSAGES,
  SOCKET_IO_PORT,
  MESSAGE_COMMAND,
  MESSAGE_RESPONSE,
  MESSAGE_MIRROR,
};
