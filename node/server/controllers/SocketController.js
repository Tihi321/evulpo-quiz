const map = require("lodash/map");

const { Server } = require("socket.io");

const { SOCKET_IO_MESSAGES, SOCKET_IO_PORT } = require("../../constants/socket");

let socketIo;

class SocketController {
  static getSocketIO() {
    return socketIo;
  }

  static emit(...args) {
    return socketIo.local.emit(...args);
  }

  static connect() {
    socketIo = new Server({
      cors: { origin: "http://localhost" },
      maxHttpBufferSize: 1e11,
      pingTimeout: 10000000,
    });

    socketIo.listen(SOCKET_IO_PORT);
    console.log("Socket Server listening on port", SOCKET_IO_PORT);
  }

  static onClientConnection(listeners) {
    socketIo.on(SOCKET_IO_MESSAGES.SERVER_CONNECTION, client => {
      Promise.all(map(listeners, callback => callback(client))).then(() => {
        client.emit(SOCKET_IO_MESSAGES.SERVER_LISTENERS_STARTED);
        client.on(SOCKET_IO_MESSAGES.DISCONNECT, () => {
          client.disconnect(true);
        });
      });
    });
  }
}

module.exports = SocketController;