const toNumber = require("lodash/toNumber");
const split = require("lodash/split");
const get = require("lodash/get");
const forEach = require("lodash/forEach");
const slice = require("lodash/slice");
const map = require("lodash/map");
const head = require("lodash/head");
const uniqueId = require("lodash/uniqueId");

class QuizController {
  static data;
  static players = {};

  static get questions() {
    const topics = head(QuizController.data);
    const questions = slice(QuizController.data, 1);
    return map(questions, values => {
      let data = {};

      forEach(topics, (topic, index) => {
        switch (topic) {
          case "answerOptions":
            data[topic] = split(get(values, [index]), ";")
            break;
          case "score":
          case "answerIndex":
            data[topic] = toNumber(get(values, [index]))
            break;
        
          default:
            data[topic] = get(values, [index])
        }
      });

      return data;
    });
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
