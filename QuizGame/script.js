// DOM Elements
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionsSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress");

const quizQuestions = [
  {
    question: "Which symbol is used for single-line comments in JavaScript?",
    answers: [
      { text: "//", correct: true },
      { text: "/*", correct: false },
      { text: "#", correct: false },
      { text: "<!--", correct: false },
    ],
  },
  {
    question: "Which data type is used to store true or false values?",
    answers: [
      { text: "String", correct: false },
      { text: "Boolean", correct: true },
      { text: "Number", correct: false },
      { text: "Array", correct: false },
    ],
  },
  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    answers: [
      { text: "var", correct: true },
      { text: "int", correct: false },
      { text: "string", correct: false },
      { text: "declare", correct: false },
    ],
  },
  {
    question: "What does HTML stand for?",
    answers: [
      { text: "HyperText Markup Language", correct: true },
      { text: "HighText Machine Language", correct: false },
      { text: "HyperTool Multi Language", correct: false },
      { text: "Hyper Transfer Markup Language", correct: false },
    ],
  },
  {
    question: "Which operator is used to compare values and types in JavaScript?",
    answers: [
      { text: "==", correct: false },
      { text: "===", correct: true },
      { text: "=", correct: false },
      { text: "!=", correct: false },
    ],
  },
  {
    question: "Which of the following is a JavaScript framework?",
    answers: [
      { text: "React", correct: true },
      { text: "Photoshop", correct: false },
      { text: "MySQL", correct: false },
      { text: "Linux", correct: false },
    ],
  },
  {
    question: "Which HTML tag is used to link a JavaScript file?",
    answers: [
      { text: "<link>", correct: false },
      { text: "<script>", correct: true },
      { text: "<js>", correct: false },
      { text: "<code>", correct: false },
    ],
  },
  {
    question: "Which symbol is used for strict equality in JavaScript?",
    answers: [
      { text: "==", correct: false },
      { text: "===", correct: true },
      { text: "!=", correct: false },
      { text: "!==", correct: false },
    ],
  },
  {
    question: "What is the correct way to write 'Hello World' to the console?",
    answers: [
      { text: "console.log('Hello World');", correct: true },
      { text: "print('Hello World');", correct: false },
      { text: "echo('Hello World');", correct: false },
      { text: "log.console('Hello World');", correct: false },
    ],
  },
  {
    question: "Which company developed JavaScript?",
    answers: [
      { text: "Microsoft", correct: false },
      { text: "Netscape", correct: true },
      { text: "Google", correct: false },
      { text: "Apple", correct: false },
    ],
  },
  {
    question: "Which keyword stops a loop in JavaScript?",
    answers: [
      { text: "break", correct: true },
      { text: "stop", correct: false },
      { text: "exit", correct: false },
      { text: "quit", correct: false },
    ],
  },
  {
    question: "What will `typeof 42` return in JavaScript?",
    answers: [
      { text: "integer", correct: false },
      { text: "number", correct: true },
      { text: "float", correct: false },
      { text: "string", correct: false },
    ],
  },
  {
    question: "Which symbol is used for string concatenation in JavaScript?",
    answers: [
      { text: "+", correct: true },
      { text: "&", correct: false },
      { text: "*", correct: false },
      { text: "concat()", correct: false },
    ],
  },
  {
    question: "Which function is used to parse a string to an integer in JavaScript?",
    answers: [
      { text: "parseInt()", correct: true },
      { text: "toInt()", correct: false },
      { text: "int()", correct: false },
      { text: "parseInteger()", correct: false },
    ],
  },
  {
    question: "Which HTML tag is used for the largest heading?",
    answers: [
      { text: "<h1>", correct: true },
      { text: "<h6>", correct: false },
      { text: "<heading>", correct: false },
      { text: "<head>", correct: false },
    ],
  },
  {
    question: "Which array method adds an element to the end of an array?",
    answers: [
      { text: "push()", correct: true },
      { text: "pop()", correct: false },
      { text: "shift()", correct: false },
      { text: "unshift()", correct: false },
    ],
  },
  {
    question: "Which symbol is used for logical AND in JavaScript?",
    answers: [
      { text: "&&", correct: true },
      { text: "&", correct: false },
      { text: "||", correct: false },
      { text: "and", correct: false },
    ],
  },
  {
    question: "Which method converts JSON data to a JavaScript object?",
    answers: [
      { text: "JSON.parse()", correct: true },
      { text: "JSON.stringify()", correct: false },
      { text: "JSON.convert()", correct: false },
      { text: "parse.JSON()", correct: false },
    ],
  },
  {
    question: "Which keyword is used to define a constant in JavaScript?",
    answers: [
      { text: "const", correct: true },
      { text: "let", correct: false },
      { text: "var", correct: false },
      { text: "static", correct: false },
    ],
  },
  {
    question: "Which tag is used to create a hyperlink in HTML?",
    answers: [
      { text: "<a>", correct: true },
      { text: "<link>", correct: false },
      { text: "<href>", correct: false },
      { text: "<url>", correct: false },
    ],
  },
];


// QUIZ STATE VARS
let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false;

totalQuestionsSpan.textContent = quizQuestions.length;
maxScoreSpan.textContent = quizQuestions.length;

// event listeners
startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);

function startQuiz() {
  // reset vars
  currentQuestionIndex = 0;
  score = 0;
  scoreSpan.textContent = 0;

  startScreen.classList.remove("active");
  quizScreen.classList.add("active");

  showQuestion();
}

function showQuestion() {
  // reset state
  answersDisabled = false;

  const currentQuestion = quizQuestions[currentQuestionIndex];

  currentQuestionSpan.textContent = currentQuestionIndex + 1;

  const progressPercent = (currentQuestionIndex / quizQuestions.length) * 100;
  progressBar.style.width = progressPercent + "%";

  questionText.textContent = currentQuestion.question;

  answersContainer.innerHTML = "";

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("answer-btn");

    // what is dataset? it's a property of the button element that allows you to store custom data
    button.dataset.correct = answer.correct;

    button.addEventListener("click", selectAnswer);

    answersContainer.appendChild(button);
  });
}

function selectAnswer(event) {
  // optimization check
  if (answersDisabled) return;

  answersDisabled = true;

  const selectedButton = event.target;
  const isCorrect = selectedButton.dataset.correct === "true";

  // Here Array.from() is used to convert the NodeList returned by answersContainer.children into an array, this is because the NodeList is not an array and we need to use the forEach method
  Array.from(answersContainer.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    } else if (button === selectedButton) {
      button.classList.add("incorrect");
    }
  });

  if (isCorrect) {
    score++;
    scoreSpan.textContent = score;
  }

  setTimeout(() => {
    currentQuestionIndex++;

    // check if there are more questions or if the quiz is over
    if (currentQuestionIndex < quizQuestions.length) {
      showQuestion();
    } else {
      showResults();
    }
  }, 1000);
}

function showResults() {
  quizScreen.classList.remove("active");
  resultScreen.classList.add("active");

  finalScoreSpan.textContent = score;

  const percentage = (score / quizQuestions.length) * 100;

  if (percentage === 100) {
    resultMessage.textContent = "Perfect! You're a genius!";
  } else if (percentage >= 80) {
    resultMessage.textContent = "Great job! You know your stuff!";
  } else if (percentage >= 60) {
    resultMessage.textContent = "Good effort! Keep learning!";
  } else if (percentage >= 40) {
    resultMessage.textContent = "Not bad! Try again to improve!";
  } else {
    resultMessage.textContent = "Keep studying! You'll get better!";
  }
}

function restartQuiz() {
  resultScreen.classList.remove("active");

  startQuiz();
}