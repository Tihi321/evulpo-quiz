const reverse = require("lodash/reverse");
const sortBy = require("lodash/sortBy");
const shuffle = require("lodash/shuffle");
const pick = require("lodash/pick");
const find = require("lodash/find");
const toNumber = require("lodash/toNumber");
const split = require("lodash/split");
const get = require("lodash/get");
const forEach = require("lodash/forEach");
const slice = require("lodash/slice");
const map = require("lodash/map");
const head = require("lodash/head");
const isEqual = require("lodash/isEqual");
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

  static get playerQuestions() {
    return shuffle(map(QuizController.questions, values => pick(values, ["topic", "id", "question", "answerOptions"])))
  }

  static get playersData() {
    return reverse(sortBy(map(QuizController.players, values => values), values => get(values, ["score"])));
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

  static getPlayerById(playerId) {
    return get(QuizController.players, [playerId])
  }

  static getScoreById(playerId) {
    return get(QuizController.getPlayerById(playerId), ["score"])
  }

  static getQuestionById(questionId) {
    return find(QuizController.questions, values => isEqual(get(values, ["id"]), questionId))
  }

  static getIsAnswerCorrect(questionId, answerIndex) {
    const questionData = QuizController.getQuestionById(questionId);
    return isEqual(get(questionData, ["answerIndex"]), answerIndex);
  }

  static getAnswerScoreById(questionId, answerIndex) {
    return QuizController.getIsAnswerCorrect(questionId, answerIndex) ? get(QuizController.getQuestionById(questionId), ["score"]) : 0;
  }

  static addScoreById(playerId, score) {
    const player = QuizController.getPlayerById(playerId)
    QuizController.players[playerId] = {
      ...player,
      score: QuizController.getScoreById(playerId) + score
    }
  }


}

module.exports = QuizController;
