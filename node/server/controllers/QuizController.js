class QuizController {
  static data;

  static set questions(values) {
    QuizController.data = values;
  }

  static get questions() {
    return QuizController.data;
  }

}

module.exports = QuizController;
