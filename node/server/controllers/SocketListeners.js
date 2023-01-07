const GameListeners = require("../listeners/GameListeners");

class SocketListeners {
  static game(client) {
    const gameListeners = new GameListeners(client);
    gameListeners.listen();
  }
}

module.exports = SocketListeners;
