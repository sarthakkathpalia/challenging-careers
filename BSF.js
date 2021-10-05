function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = 0;
            // timer = duration; // uncomment this line to reset timer automatically after reaching 0
        }
    }, 1000);
}

window.onload = function () {
    var time = 600 / 2, // your time in seconds here
        display = document.querySelector('#safeTimerDisplay');
    startTimer(time, display);
};
(function(){
  function buildQuiz(){
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        // variable to store the list of possible answers
        const answers = [];

        // and for each available answer...
        for(letter in currentQuestion.answers){

          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

  function showResults(){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {

      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if(userAnswer === currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = 'darkgreen';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [
    {
      question: "Q1. The world’s largest Peninsula is:",
      answers: {
        a: "Indian Peninsula",
        b: "Arabian Peninsula",
        c: "Greenland Peninsula",
        d: "None of these"
      },
      correctAnswer: "a"
    },
    {
      question: "Q2. Who appoints a governor in states?",
      answers: {
        a: "Prime Minister",
        b: "Vice President",
        c: "Chief Minister",
	d: "President"
      },
      correctAnswer: "d"
    },
    {
      question: "Q3. When was Pluto removed from list of planets?",
      answers: {
        a: "August 2005",
        b: "July 2006",
        c: "August 2006",
        d: "June 2006"
      },
      correctAnswer: "c"
    },
    {
      question: "‘Q4. World Health Day’ is celebrated on which day?",
      answers: {
        a: "8th April",
        b: "7th April",
        c: "16th September",
        d: "11th July"
      },
      correctAnswer: "b"
    },
{
      question: "Q5. Which is the largest bone in the human body?",
      answers: {
        a: "Humerus",
        b: "Spinal Cord",
        c: "Femur",
        d: "Hip bone"
      },
      correctAnswer: "c"
    }
  ];

  // Kick things off
  buildQuiz();

  // Event listeners
  submitButton.addEventListener('click', showResults);
})();