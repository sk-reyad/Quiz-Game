// DOM Elements
const startScreen = document.getElementById("start-screen")
const quizScreen = document.getElementById("quiz-screen")
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
    // --- LEVEL 1: General Tech & Basic Acronyms (Easiest) ---
  // --- LEVEL 1: General Tech & Basic Acronyms (Easiest) ---
  {
    question: "What does HTML stand for in web development?",
    answers: [
      { text: "A. HyperText Markup Language", correct: true },
      { text: "B. HighTech Modern Language", correct: false },
      { text: "C. Hyperlink and Text Markup Language", correct: false },
      { text: "D. Home Tool Markup Language", correct: false },
    ],
  },
  {
    question: "Which of the following refers to the main circuit board of a computer that connects all components?",
    answers: [
      { text: "A. CPU", correct: false },
      { text: "B. Motherboard", correct: true },
      { text: "C. Hard Drive", correct: false },
      { text: "D. Power Supply", correct: false },
    ],
  },
  {
    question: "What does IP stand for in the context of computer networking?",
    answers: [
      { text: "A. Internal Process", correct: false },
      { text: "B. Internet Protocol", correct: true },
      { text: "C. Intranet Provider", correct: false },
      { text: "D. Information Path", correct: false },
    ],
  },
  {
    question: "What does HTTP stand for in web communication?",
    answers: [
      { text: "A. HyperText Transfer Protocol", correct: true },
      { text: "B. High-level Text Translation Process", correct: false },
      { text: "C. HyperText Transmission Path", correct: false },
      { text: "D. Hyperlink Transfer Technology", correct: false },
    ],
  },
  
  // --- LEVEL 2: Core Computer Science Concepts (Intermediate) ---
  {
    question: "Which of the following types of computer memory is considered 'volatile' (loses data when power is turned off)?",
    answers: [
      { text: "A. ROM (Read-Only Memory)", correct: false },
      { text: "B. SSD (Solid State Drive)", correct: false },
      { text: "C. RAM (Random Access Memory)", correct: true },
      { text: "D. HDD (Hard Disk Drive)", correct: false },
    ],
  },
  {
    question: "Which of the following is NOT a core pillar of Object-Oriented Programming?",
    answers: [
      { text: "A. Encapsulation", correct: false },
      { text: "B. Polymorphism", correct: false },
      { text: "C. Compilation", correct: true },
      { text: "D. Inheritance", correct: false },
    ],
  },

  // --- LEVEL 3: Java Specifics (Hardest) ---
  {
    question: "In Java, which keyword is used by a class to inherit from a superclass?",
    answers: [
      { text: "A. implements", correct: false },
      { text: "B. inherits", correct: false },
      { text: "C. super", correct: false },
      { text: "D. extends", correct: true },
    ],
  },
  {
    question: "In Java, which primitive data type is used to store a single 16-bit Unicode character?",
    answers: [
      { text: "A. String", correct: false },
      { text: "B. byte", correct: false },
      { text: "C. char", correct: true },
      { text: "D. short", correct: false },
    ],
  },
  {
    question: "In Java, what is the default value of a boolean instance variable if it is not explicitly initialized?",
    answers: [
      { text: "A. true", correct: false },
      { text: "B. null", correct: false },
      { text: "C. 0", correct: false },
      { text: "D. false", correct: true },
    ],
  },
  {
    question: "In Java, what is the correct syntax for the main method?",
    answers: [
      { text: "A. public void main(String args)", correct: false },
      { text: "B. public static void main(String [] args)", correct: true },
      { text: "C. static public void main(String args[])", correct: false },
      { text: "D. public static main(String[] args)", correct: false },
    ],
  },
];

// QUIZ STATE VARS
let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false;

totalQuestionsSpan.textContent = quizQuestions.length;
maxScoreSpan.textContent = quizQuestions.length;

// EVENT LISTENERS
startButton.addEventListener("click", startQuiz)
restartButton.addEventListener("click", restartQuiz)

function startQuiz(){
    // reset vars
    currentQuestionIndex = 0;
    score = 0;
    scoreSpan.textContent = score;
    startScreen.classList.remove("active");
    quizScreen.classList.add("active");
    showQuestion ();
    console.log("quiz started");
}

function showQuestion(){
    // reset state
    answersDisabled = false;
    const currentQuestion = quizQuestions[currentQuestionIndex];
    currentQuestionSpan.textContent = currentQuestionIndex + 1;
    const progressPercent = (currentQuestionIndex / quizQuestions.length) * 100;
    progressBar.style.width = progressPercent + "%";
    questionText.textContent = currentQuestion.question;
    
    answersContainer.innerHTML = "";
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.textContent = answer.text;
        button.classList.add("answer-btn");
        button.dataset.correct = answer.correct;
        button.addEventListener("click",selectAnswer);
        answersContainer.appendChild(button);
    });
}

function selectAnswer(event){
if(answersDisabled) {return};
answersDisabled = true;
const selectedButton = event.target;
const isCorrect = selectedButton.dataset.correct === "true";

Array.from(answersContainer.children).forEach(button =>{
    if(button.dataset.correct === "true"){
        button.classList.add("correct");
    } else if (button === selectedButton) {
        button.classList.add("incorrect");
    }
});

if(isCorrect){
    score++;
    scoreSpan.textContent = score;
}

setTimeout(() => {
    currentQuestionIndex++;
    // check if there are more questions or if the quiz is over
    if(currentQuestionIndex < quizQuestions.length){
         showQuestion();
    } else {
      showResults();
    }
}, 500)
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