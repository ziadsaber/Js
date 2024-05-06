// Define an array of objects to store quiz questions, options, and correct answers
const quizQuestions = [
  {
    question: "Javascript is an _______ language?",
    options: [
      "1. Object-oriented",
      "2. Object-based",
      "3. Procedural",
      "4. None of the above",
    ],
    correctAnswer: "1",
  },
  {
    question:
      "Which of the following keywords is used to define a variable in Javascript?",
    options: ["1. var", "2. let", "3. Both of them", "4. None "],
    correctAnswer: "3",
  },
  {
    question:
      "Which of the following methods can be used to display data in some form using Javascript?",
    options: [
      "1. document.write()",
      "2. console.log()",
      "3. window.alert()",
      "4. all of the above",
    ],
    correctAnswer: "4",
  },
];

// Function to display a question and options in the console with styling
function displayQuestion(questionObj) {
  console.log(
    `%c${questionObj.question}`,
    "color: #4285F4; font-weight: bold; font-size: 18px;"
  );
  questionObj.options.forEach((option, index) => {
    console.log(
      `%c${option}`,
      "color: #0F9D58; font-size: 16px; font-weight: bold;"
    );
  });
}

// Function to validate user's answer and provide feedback
function validateAnswer(questionObj, userAnswer) {
  if (userAnswer === questionObj.correctAnswer) {
    console.log("%cCorrect!", "color: #0F9D58; font-weight: bold;");
    return 1; // Return 1 if answer is correct
  } else {
    console.log(
      "%cIncorrect. The correct answer is: " +
        questionObj.options[parseInt(questionObj.correctAnswer) - 1],
      "color: #DB4437; font-weight: bold;"
    );
    return 0; // Return 0 if answer is incorrect
  }
}

// Function to start the quiz
function startQuiz() {
  let score = 0;
  const timePerQuestion = 20; // Time per question in seconds

  // ASCII art for quiz title
  console.log(
    `%c
    ______  __  __   ______   __   __   ______  __   __   __    __    
   /\\  == \\/\\ \\/\\ \\ /\\  ___\\ /\\ \"-.\\ \\ /\\  == \\/\\ \"-.\\ \\ /\\ "-./  \\   
   \\ \\  __<\\ \\ \\_\\ \\\\ \\ \\____\\ \\ \\-.  \\\\ \\  __<\\ \\ \\-.  \\\\ \\ \\-./\\ \\  
    \\ \\_____\\\\/\\_____\\\\ \\_____\\\\ \\_\\\"\\"\\_\\\\ \\_____\\\\ \\_\"\\"\\_\\\\ \\_\\ \\ \\_\\ 
     \\/_____/ \\/_____/ \\/_____/ \\/_/ \\/_/ \\/_____/ \\/_/ \\/_/ \\/_/  \\/_/

%cWelcome to the JavaScript Quiz! Answer the following questions within the time limit to test your knowledge.\n`,
    "color: #4285F4; font-weight: bold; font-size: 16px;",
    "color: #4285F4; font-size: 14px;"
  );

  // Iterate over each question
  quizQuestions.forEach((question, index) => {
    console.log(
      `%cQuestion ${index + 1}:`,
      "color: #4285F4; font-weight: bold; font-size: 16px;"
    );
    displayQuestion(question);

    // Set up timer
    let timeLeft = timePerQuestion;
    const timer = setInterval(() => {
      console.log(
        `%cTime left: ${timeLeft} seconds`,
        "color: #4285F4; font-size: 14px;"
      );
      timeLeft--;

      if (timeLeft < 0) {
        clearInterval(timer);
        console.log("%cTime's up!", "color: #DB4437; font-weight: bold;");
        score += 0; // No points awarded if time runs out
        return;
      }
    }, 1000);

    // Ask for user's answer and validate
    let userAnswer;
    do {
      userAnswer = prompt("Enter your answer (1, 2, 3, or 4):");
      if (isNaN(userAnswer) || userAnswer < 1 || userAnswer > 4) {
        console.log(
          "%cInvalid input. Please enter a number between 1 and 4.",
          "color: #DB4437; font-weight: bold;"
        );
      }
    } while (isNaN(userAnswer) || userAnswer < 1 || userAnswer > 4);

    // Stop timer when user inputs an answer
    clearInterval(timer);

    // Validate user's answer
    score += validateAnswer(question, userAnswer);
  });

  // Display final score
  console.log(
    `%c\nYour final score is: ${score}/${quizQuestions.length}`,
    "color: #4285F4; font-weight: bold; font-size: 16px;"
  );
}

// Start the quiz
startQuiz();
