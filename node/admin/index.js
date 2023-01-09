// constants
const MESSAGE_COMMAND = "Command";
const MESSAGE_RESPONSE = "Response";
const MESSAGE_MIRROR = "Mirror";

const GAME_MESSAGES = {
  PLAYERS_DATA: "PlayersData"
};

const SOCKET_IO_MESSAGES = {
  CLIENT_CONNECT: "connect",
  DISCONNECT: "disconnect",
};

const CLASS_NAMES = {
  PLAYER_ROW: "player-row",
  PLAYER_NAME: "player-name",
  PLAYER_SCORE: "player-score"
};

// helpers
const generateSocketDataMessage = (command) => ({
  command: `${command}-${MESSAGE_COMMAND}`,
  response: `${command}-${MESSAGE_RESPONSE}`,
  mirror: `${command}-${MESSAGE_MIRROR}`,
});

const getPlayersData = (data) => {
  let htmlString = "";

  data.forEach((values, index) => {
    htmlString = `${htmlString}<div class=${CLASS_NAMES.PLAYER_ROW}><div class="${CLASS_NAMES.PLAYER_NAME}">${index + 1}. ${values.name}</div><div class="${CLASS_NAMES.PLAYER_SCORE}">${values.score}</div></div>`;
  });

  return htmlString;
}

// selectros
const playersElement = document.getElementById("players");


// eslint-disable-next-line no-undef
const socket = io('http://localhost:4567', {
  origin: "http://localhost",
  transports: ["websocket"]
});

socket.on(SOCKET_IO_MESSAGES.CLIENT_CONNECT, () => {

  socket.on(SOCKET_IO_MESSAGES.DISCONNECT, () => {
    console.log('disconnected from server');
  });

  socket.emit(generateSocketDataMessage(GAME_MESSAGES.PLAYERS_DATA).command);
  socket.once(generateSocketDataMessage(GAME_MESSAGES.PLAYERS_DATA).response, (data) => {
    const playerDataHTML = getPlayersData(data);
    playersElement.innerHTML = playerDataHTML;
  });
  socket.on(generateSocketDataMessage(GAME_MESSAGES.PLAYERS_DATA).mirror, (data) => {
    const playerDataHTML = getPlayersData(data);
    playersElement.innerHTML = playerDataHTML;
  });
});