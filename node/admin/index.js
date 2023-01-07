const MESSAGE_COMMAND = "Command";
const MESSAGE_RESPONSE = "Response";
const MESSAGE_MIRROR = "Mirror";

const generateSocketDataMessage = (command) => ({
  command: `${command}-${MESSAGE_COMMAND}`,
  response: `${command}-${MESSAGE_RESPONSE}`,
  mirror: `${command}-${MESSAGE_MIRROR}`,
});


const GAME_MESSAGES = {
  PLAYERS_DATA: "PlayersData"
};

const SOCKET_IO_MESSAGES = {
  CLIENT_CONNECT: "connect",
  DISCONNECT: "disconnect",
};


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
    console.log('players data', data);
  });
  socket.on(generateSocketDataMessage(GAME_MESSAGES.PLAYERS_DATA).mirror, (data) => {
    console.log('players data', data);
  });
});