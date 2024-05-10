// Define an array of objects to store quiz questions, options, and correct answers
const questions = [
  {
    question: "What kind of language is Javascript?",
    options: [
      "Object-oriented",
      " Object-based",
      " Procedural",
      " None of the above",
    ],
    answer: 1, // Index of the correct answer (0-based)
  },
  {
    question: "How do you define a variable in Javascript?",
    options: [" var", " let", "Both", " None"],
    answer: 2,
  },
  {
    question: "What methods can display data in Javascript?",
    options: [
      " document.write()",
      " console.log()",
      " window.alert()",
      " All of the above",
    ],
    answer: 3,
  },
];

// First function to show the questions and format of it8
function showQuestion(q) {
  // q parameter for making obkject
  console.log(
    "%c" + q.question,
    "color: #4CAF50; font-size: 18px; font-weight: bold"
  ); // Display the question
  q.options.forEach(
    (
      option,
      index // for each loop to iterate over every option
    ) =>
      console.log(
        `  - %c${index + 1}. ${option}`,
        "color: #2196F3; font-size: 16px;"
      ) // beacuse the array start with index zero we +1 to index and show questions
  );
}

// Second function to ask the question with input
function askQuestion(q) {
  //give q parameter
  showQuestion(q); // recal function to display question
  let userAnswer; // var to store input
  do {
    userAnswer = parseInt(
      // to change the string to number
      prompt("Enter your answer (number between 1 and 4):")
    ); // NAN : NOT A NUMBER
  } while (isNaN(userAnswer) || userAnswer < 1 || userAnswer > 4); // to check invalid inputs
  return userAnswer - 1; // Adjust for 0-based indexing
}

// Third function to check the answer and provide informative feedback
function checkAnswer(q, answer) {
  // two parameters : q and the answer from prev function
  if (answer === q.answer) {
    // if user input = answer from array
    console.log(
      "%cCorrect!",
      "color: #4CAF50; font-size: 16px; font-weight: bold"
    ); // output
    return 1;
  } else {
    // if answer is incorrect
    console.log(
      `%cIncorrect. The correct answer is: ${q.options[q.answer]}`,
      "color: #F44336; font-size: 16px;"
    ); // print the question with the correct answer of it
    return 0;
  }
}

// Fourth function to start the quiz, greet the user, and keep track of score
function startQuiz() {
  let userName = prompt("Welcome to the JavaScript Quiz! What is your name?"); // first output to get users input
  let score = 0; // start score with zero initial value
  for (const question of questions) {
    // loop inside questions array
    const answer = askQuestion(question); // restored answer stored in this const,
    score += checkAnswer(question, answer); // see if returned with 1 or zero then add
    console.log(
      `\n%cYour current score is: ${score} out of ${questions.length}`,
      "color: #795548; font-size: 16px; font-weight: bold;"
    ); // score track after every question
  }
  const finalMessage = `${userName}, your final score is: ${score}/${questions.length}`;
  console.log(
    `\n%c${finalMessage}`,
    "color: #FF5722; font-size: 18px; font-weight: bold;"
  );
  alert(finalMessage); // Display final message in an alert box
}

// Start the quiz
startQuiz(); // call the function
