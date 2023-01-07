const { GAME_MESSAGES } = require("../../constants/socket");
const { generateSocketDataMessage } = require("../../utils/socket");
const QuizController = require("../controllers/QuizController");
const SocketController = require("../controllers/SocketController");

class GameListeners {
  client;

  constructor(client) {
    GameListeners.client = client;
  }

  listen() {
    GameListeners.client.on(generateSocketDataMessage(GAME_MESSAGES.ADD_PLAYER).command, ({ name }) => {
      const playerData = QuizController.addPlayer(name)
      GameListeners.client.emit(generateSocketDataMessage(GAME_MESSAGES.ADD_PLAYER).response, {
        value: playerData,
      });
      SocketController.emit(generateSocketDataMessage(GAME_MESSAGES.PLAYERS_DATA).mirror, {
        value: QuizController.players,
      });
    });
    GameListeners.client.on(generateSocketDataMessage(GAME_MESSAGES.PLAYERS_DATA).command, () => {
      GameListeners.client.emit(generateSocketDataMessage(GAME_MESSAGES.PLAYERS_DATA).response, {
        value: QuizController.players,
      });
    });
  }
}

module.exports = GameListeners;