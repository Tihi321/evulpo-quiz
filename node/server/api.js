const fetch = require("node-fetch");

const { FETCH_URL } = require("../constants/api");
const QuizController = require("./controllers/QuizController");

// google data
fetch(FETCH_URL).then(response => response.json()).then(response => {
  QuizController.data = response.values;
});

module.exports = {};