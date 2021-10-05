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
           
        }
    }, 1000);
}

window.onload = function () {
    var time = 600 / 2,
        display = document.querySelector('#safeTimerDisplay');
    startTimer(time, display);
};
(function(){
  function buildQuiz(){

    const output = [];

    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        const answers = [];

        for(letter in currentQuestion.answers){

          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );

    quizContainer.innerHTML = output.join('');
  }

  function showResults(){

    const answerContainers = quizContainer.querySelectorAll('.answers');

    let numCorrect = 0;

    myQuestions.forEach( (currentQuestion, questionNumber) => {

      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      if(userAnswer === currentQuestion.correctAnswer){
       
        numCorrect++;

        answerContainers[questionNumber].style.color = 'darkgreen';
      }
  
      else{
  
        answerContainers[questionNumber].style.color = 'red';
      }
    });

    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [
    {
      question: "Q1. What is the full form of ‘ATM’?",
      answers: {
        a: "Automatic Teller Machine",
        b: "Automated Tallying Machine",
        c: "Automated Transaction of Money",
        d: "Automated Totalling Machine"
      },
      correctAnswer: "a"
    },
    {
      question: "Q2. Who was the writer of ‘The Jungle Book’?",
      answers: {
        a: "John Kipling",
        b: "Rudyard Kipling",
        c: "Ruskin Bond",
	      d: "Joseph"
      },
      correctAnswer: "b"
    },
    {
      question: "Q3. Which one of the following is the largest waterfall in the world?",
      answers: {
        a: "Victoria Falls",
        b: "Niagara Falls",
        c: "Angel Falls",
        d: "Sutherland Falls"
      },
      correctAnswer: "c"
    },
    {
      question: "Q4. Which mineral required by the plants to make proteins?",
      answers: {
        a: "Iodine",
        b: "Potassium",
        c: "Nitrogen",
        d: "Calcium"
      },
      correctAnswer: "c"
    },
{
      question: "Q5. Find the square root of 529?",
      answers: {
        a: "33",
        b: "23",
        c: "43",
        d: "63"
      },
      correctAnswer: "b"
    }
  ];

  // Kick things off
  buildQuiz();

  submitButton.addEventListener('click', showResults);
})();