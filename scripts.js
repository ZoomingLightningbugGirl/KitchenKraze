var instructions = document.getElementById("instructions");
var quiz = document.getElementById("quiz");
var startBtn = document.getElementById("startBtn");
var askQuestion = document.getElementById("askQuestion");
var submitBtn = document.getElementById("submitBtn");
var resetBtn = document.getElementById("resetBtn");
var form = document.getElementById("form");
var quiz = document.getElementById("quiz");
var inform = document.getElementById("inform");
var showScore = document.getElementById("showScore");
var displayScore = document.getElementById("displayScore");
var displayQCount = document.getElementById("displayQCount");
var checkedRadio;
var allRadios;
var i;
var score;

/*The correct answer is the position in the array (answer list) However, the first position is actually 0, so if you wanted the answer in the third position to be the correct one, you’d need to make 2 the correct choice.*/

var questions = [
 {
  question: "What is your favorite flavor/taste?",
  choices: ["vanilla", "Chocolate", "Strawberry", "Salty"],
  correct: 2,0,3,1
 },
 {
  question: "Do you have allergies/dietary restrictions?",
  choices: ["Gluten", "Dairy", "Peanuts", "Vegitarian","No allergies"],
  correct: 2,0,3,1,5
 },
 {
  question: "Which do you like doing more?",
  choices: ["Cooking", "Baking"],
  correct: 0,1
 },
 ];

window.onload = beginQuiz;

function beginQuiz() {
 form.style.display = "block";
 instructions.style.display = "block";
 showScore.style.display = "none";
 quiz.style.display = "none";
 submitBtn.style.display = "none";
 i = 0;
 score = 0;
 displayQCount.innerHTML = 1;
 displayScore.innerHTML = 0;
}

startBtn.addEventListener("click", function () {
 instructions.style.display = "none";
 submitBtn.style.display = "block";
 quiz.style.display = "block";
 getQAs();
});

submitBtn.addEventListener("click", function () {
 allRadios = document.getElementsByName("option");
 var isChecked = false;
 for (var j = 0; j < allRadios.length; j++) {
  if (allRadios[j].checked) {
   isChecked = true;
   checkedRadio = j;
   break;
  }
 }
 if (!isChecked) {
  alert("Please select an answer before moving on");
 } else {
  getResults();
  deselectRadios();
  i++;
  displayQCount.innerHTML = i + 1;
  getQAs();
 }
});

function deselectRadios() {
 allRadios = document.getElementsByName("option");
 for (var p = 0; p < allRadios.length; p++) {
  allRadios[p].checked = false;
 }
}

function getResults() {
 if (allRadios[checkedRadio].value === questions[i].choices[questions[i].correct]) {
  score++;
  displayScore.innerHTML = score;
 }
}

function getQAs() {
 if (i < 5) {
  askQuestion.innerHTML = questions[i].question;
  for (var k = 0; k < 4; k++) {
   document.getElementById("answer" + k).innerHTML = questions[i].choices[k];
   document.getElementById("answer" + k).setAttribute("for", questions[i].choices[k]);
   document.getElementById("label" + k).setAttribute("value", questions[i].choices[k]);
  }
 } else {
  displayResults();
 }
}

function displayResults() {
 quiz.style.display = "none";
 showScore.style.display = "block";
 inform.innerHTML = "See our catalouge for some yummy recipes and keep your allergies in mind!";
}

resetBtn.addEventListener("click", function () {
 beginQuiz();
});