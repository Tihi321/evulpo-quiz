const uniqueId = require("lodash/uniqueId");

class QuizController {
  static data;
  static players = {};

  static get questions() {
    return QuizController.data;
  }

  static get playersData() {
    return QuizController.players;
  }

  static addPlayer(name) {
    const playerId = `${uniqueId()}-${name}`;
    const playerData = {
      id: playerId,
      name,
      score: 0,
    };

    QuizController.players = {
      ...QuizController.players,
      [playerId]: {
        id: playerId,
        name,
        score: 0,
      }
    };

    return playerData;
  }

}

module.exports = QuizController;
