const get = require("lodash/get");
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
      GameListeners.client.emit(generateSocketDataMessage(GAME_MESSAGES.QUESTIONS).response, QuizController.playerQuestions);
    });
    GameListeners.client.on(generateSocketDataMessage(GAME_MESSAGES.SUBMIT_ANSWER).command, ({
      playerId,
      answerIndex,
      questionId
    }) => {
      QuizController.addScoreById(playerId, QuizController.getAnswerScoreById(questionId, answerIndex));

      GameListeners.client.emit(generateSocketDataMessage(GAME_MESSAGES.SUBMIT_ANSWER).response, {
        isCorrect: QuizController.getIsAnswerCorrect(questionId, answerIndex),
        answerIndex: get(QuizController.getQuestionById(questionId), ["answerIndex"])
      });
      GameListeners.client.emit(generateSocketDataMessage(GAME_MESSAGES.SCORE).mirror, QuizController.getScoreById(playerId));
      SocketController.emit(generateSocketDataMessage(GAME_MESSAGES.PLAYERS_DATA).mirror, QuizController.players);
    });
  }
}

module.exports = GameListeners;