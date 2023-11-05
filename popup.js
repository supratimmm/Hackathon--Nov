// popup.js
let currentQuestion, selectedOption;

document.addEventListener('DOMContentLoaded', () => {
  loadQuestion();
});

// Difficulty level event listeners
document.getElementById('easy').addEventListener('click', () => setDifficulty('easy'));
document.getElementById('medium').addEventListener('click', () => setDifficulty('medium'));
document.getElementById('hard').addEventListener('click', () => setDifficulty('hard'));

let difficulty = 'easy'; // default difficulty

function setDifficulty(level) {
  difficulty = level;
  loadQuestion(); // Load a question for the selected difficulty
}
function loadQuestion() {
  // Reset selectedOption
  selectedOption = null;


  // Filter questions by difficulty
  let filteredQuestions = questions.filter(question => question.difficulty === difficulty);




  // Use the getRandomQuestion function to get a random question
  currentQuestion = getRandomQuestion();
  document.getElementById('question').textContent = currentQuestion.question;
  
  // Clear previous options
  const optionsList = document.getElementById('answer-options');
  optionsList.innerHTML = '';

  // Populate new options
  currentQuestion.options.forEach(option => {
    const li = document.createElement('li');
    li.textContent = option;
    li.addEventListener('click', selectOption);
    optionsList.appendChild(li);
  });

  // Reset feedback
  const feedbackElement = document.getElementById('feedback');
  feedbackElement.textContent = '';
  feedbackElement.className = '';
}

function selectOption(event) {
  // Remove selection from all options
  const options = document.querySelectorAll('#answer-options li');
  options.forEach(option => {
    option.classList.remove('selected');
  });

  // Add selection to clicked option
  event.target.classList.add('selected');
  selectedOption = event.target.textContent;
}

document.getElementById('submit-answer').addEventListener('click', () => {
  const feedbackElement = document.getElementById('feedback');

  if (selectedOption) {
    let feedbackText = '';
    if (selectedOption === currentQuestion.answer) {
      // Correct answer
      feedbackText = 'Correct! ' + currentQuestion.info;
      feedbackElement.className = 'correct';
    } else {
      // Wrong answer
      feedbackText = 'Wrong! ' + currentQuestion.info;
      feedbackElement.className = 'wrong';
    }
    feedbackElement.textContent = feedbackText;

    // Use setTimeout to load new question after 5 seconds
    setTimeout(() => {
      loadQuestion();
    }, 5000); // 5000 milliseconds delay
  } else {
    // No answer selected
    feedbackElement.textContent = 'Please select an option.';
    feedbackElement.className = 'warning';
    // Set a timeout for the warning as well, if you want
  }
});
