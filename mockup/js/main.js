var next_button = document.getElementByID("next_button");
next_button.addEventListener("click", getNextQuestion());

var question_title = document.getElementByID("question-title");

var question = document.getElementByID("question");

function getNextQuestion() {
  question_title.textContent = "2 of 70";
  question.textContent = "2) this is question 2";
}
