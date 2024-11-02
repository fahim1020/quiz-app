//*All questions
const questions = [
  {
    question: "What is the capital of France?",
    choices: ["Berlin", "Madrid", "Paris", "Lisbon"],
    correctAnswer: "Paris",
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    choices: ["Harper Lee", "Jane Austen", "Mark Twain", "J.K. Rowling"],
    correctAnswer: "Harper Lee",
  },
  {
    question: "What is 2 + 2?",
    choices: ["3", "4", "5", "6"],
    correctAnswer: "4",
  },
  {
    question: "Which planet is known as the Red Planet?",
    choices: ["Earth", "Mars", "Jupiter", "Venus"],
    correctAnswer: "Mars",
  },
  {
    question: "What is the chemical symbol for water?",
    choices: ["H2O", "CO2", "O2", "NaCl"],
    correctAnswer: "H2O",
  },
  {
    question: "In what year did World War II end?",
    choices: ["1945", "1918", "1939", "1965"],
    correctAnswer: "1945",
  },
  {
    question: "Who painted the Mona Lisa?",
    choices: [
      "Vincent van Gogh",
      "Pablo Picasso",
      "Leonardo da Vinci",
      "Claude Monet",
    ],
    correctAnswer: "Leonardo da Vinci",
  },
  {
    question: "What is the largest mammal?",
    choices: ["Elephant", "Blue whale", "Giraffe", "Shark"],
    correctAnswer: "Blue whale",
  },
  {
    question: "What is the currency of Japan?",
    choices: ["Dollar", "Yen", "Won", "Euro"],
    correctAnswer: "Yen",
  },
  {
    question: "Who discovered gravity?",
    choices: [
      "Albert Einstein",
      "Isaac Newton",
      "Galileo Galilei",
      "Nikola Tesla",
    ],
    correctAnswer: "Isaac Newton",
  },
  {
    question: "What is the square root of 64?",
    choices: ["6", "8", "7", "10"],
    correctAnswer: "8",
  },
  {
    question: "In which country is the Great Pyramid of Giza?",
    choices: ["Mexico", "Peru", "Egypt", "China"],
    correctAnswer: "Egypt",
  },
  {
    question: "Who wrote 'Pride and Prejudice'?",
    choices: ["Emily Bronte", "Charles Dickens", "Jane Austen", "George Eliot"],
    correctAnswer: "Jane Austen",
  },
  {
    question: "What is the capital of Canada?",
    choices: ["Toronto", "Ottawa", "Vancouver", "Montreal"],
    correctAnswer: "Ottawa",
  },
  {
    question: "How many continents are there?",
    choices: ["5", "6", "7", "8"],
    correctAnswer: "7",
  },
  {
    question: "What is the hardest natural substance on Earth?",
    choices: ["Gold", "Iron", "Diamond", "Quartz"],
    correctAnswer: "Diamond",
  },
  {
    question: "Which planet has the most moons?",
    choices: ["Earth", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Saturn",
  },
  {
    question: "Who invented the telephone?",
    choices: [
      "Alexander Graham Bell",
      "Thomas Edison",
      "Nikola Tesla",
      "Albert Einstein",
    ],
    correctAnswer: "Alexander Graham Bell",
  },
  {
    question: "What is the capital of Italy?",
    choices: ["Venice", "Rome", "Florence", "Milan"],
    correctAnswer: "Rome",
  },
  {
    question: "How many sides does a hexagon have?",
    choices: ["5", "6", "7", "8"],
    correctAnswer: "6",
  },
  {
    question: "Which element has the atomic number 1?",
    choices: ["Oxygen", "Hydrogen", "Carbon", "Nitrogen"],
    correctAnswer: "Hydrogen",
  },
  {
    question: "What is the smallest prime number?",
    choices: ["1", "2", "3", "5"],
    correctAnswer: "2",
  },
  {
    question: "Which ocean is the largest?",
    choices: ["Atlantic", "Indian", "Arctic", "Pacific"],
    correctAnswer: "Pacific",
  },
  {
    question: "Who was the first man to walk on the moon?",
    choices: ["Yuri Gagarin", "Buzz Aldrin", "Neil Armstrong", "John Glenn"],
    correctAnswer: "Neil Armstrong",
  },
  {
    question: "What is the tallest mountain in the world?",
    choices: ["K2", "Kangchenjunga", "Mount Everest", "Lhotse"],
    correctAnswer: "Mount Everest",
  },
  {
    question: "How many colors are in a rainbow?",
    choices: ["5", "6", "7", "8"],
    correctAnswer: "7",
  },
  {
    question: "What is the capital of Australia?",
    choices: ["Sydney", "Melbourne", "Brisbane", "Canberra"],
    correctAnswer: "Canberra",
  },
  {
    question: "Who was known as the Iron Lady?",
    choices: [
      "Angela Merkel",
      "Margaret Thatcher",
      "Hillary Clinton",
      "Indira Gandhi",
    ],
    correctAnswer: "Margaret Thatcher",
  },
  {
    question: "What is the boiling point of water in Celsius?",
    choices: ["50°C", "90°C", "100°C", "120°C"],
    correctAnswer: "100°C",
  },
  {
    question: "In what year did the Titanic sink?",
    choices: ["1905", "1912", "1923", "1898"],
    correctAnswer: "1912",
  },
  {
    question: "What is the capital of Russia?",
    choices: ["Moscow", "St. Petersburg", "Kiev", "Novosibirsk"],
    correctAnswer: "Moscow",
  },
  {
    question: "What gas do plants absorb from the atmosphere?",
    choices: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"],
    correctAnswer: "Carbon Dioxide",
  },
];

//*Score
let currentQuestionIndex = 0;
let score = 0;

//*Function for display questions
function displayQuestion() {
  const questionElement = document.getElementById("question");
  const choicesElement = document.getElementById("choices");
  const nextButton = document.getElementById("next-button");

  const currentQuestion = questions[currentQuestionIndex];

  questionElement.textContent = currentQuestion.question;
  choicesElement.innerHTML = currentQuestion.choices
    .map(
      (choice) =>
        `<button class="choice-button" onclick="selectChoice('${choice}')">${choice}</button>`
    )
    .join("");

  nextButton.style.display = "none";
}

//*Function for selecting
function selectChoice(choice) {
  const previouslySelectedButton = document.querySelector("#choices .selected");
  if (previouslySelectedButton) {
    previouslySelectedButton.classList.remove("selected");
  }

  const selectedButton = Array.from(
    document.querySelectorAll("#choices button")
  ).find((btn) => btn.textContent === choice);
  selectedButton.classList.add("selected");

  if (choice === questions[currentQuestionIndex].correctAnswer) {
    score++;
  }

  // Show the next button after selection
  document.getElementById("next-button").style.display = "block";
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    displayQuestion();
  } else {
    showScore();
  }
}

//*Function for showing the score
function showScore() {
  document.getElementById("quiz-section").style.display = "none";
  document.getElementById("score-section").style.display = "block";
  document.getElementById(
    "score"
  ).textContent = `You scored ${score} out of ${questions.length}`;
}

//*Function for restart questions
function restartQuiz() {
  score = 0;
  currentQuestionIndex = 0;
  document.getElementById("score-section").style.display = "none";
  document.getElementById("quiz-section").style.display = "block";
  displayQuestion();
}

//*Function for limitation
function limitAttempts() {
  const lastAttempt = localStorage.getItem("lastAttempt");
  const now = Date.now();

  if (lastAttempt && now - lastAttempt < 24 * 60 * 60 * 1000) {
    showModal();
    document.getElementById("quiz-section").style.display = "none";
  } else {
    localStorage.setItem("lastAttempt", now);
    displayQuestion();
  }
}

//*Function for showing modal
function showModal() {
  document.getElementById("modal").style.display = "flex";
}

//*Function for closing modal
function closeModal() {
  document.getElementById("modal").style.display = "none";
}

//*Check limit
window.onload = limitAttempts;
