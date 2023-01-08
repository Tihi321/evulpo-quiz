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
      const playerData = QuizController.addPlayer(name);
      GameListeners.client.emit(generateSocketDataMessage(GAME_MESSAGES.ADD_PLAYER).response, playerData);
      SocketController.emit(generateSocketDataMessage(GAME_MESSAGES.PLAYERS_DATA).mirror, QuizController.players);
    });
    GameListeners.client.on(generateSocketDataMessage(GAME_MESSAGES.PLAYERS_DATA).command, () => {
      GameListeners.client.emit(generateSocketDataMessage(GAME_MESSAGES.PLAYERS_DATA).response, QuizController.players);
    });
    GameListeners.client.on(generateSocketDataMessage(GAME_MESSAGES.QUESTIONS).command, () => {
      GameListeners.client.emit(generateSocketDataMessage(GAME_MESSAGES.QUESTIONS).response, QuizController.questions);
    });
  }
}

module.exports = GameListeners;