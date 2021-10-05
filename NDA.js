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

          // ...add an HTML radio button
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

    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {

      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

     
      if(userAnswer === currentQuestion.correctAnswer){
        
        numCorrect++;

        
        answerContainers[questionNumber].style.color = 'darkgreen';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
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
      question: "Q1. New Zealand is considered part of which one of the following island groups?",
      answers: {
        a: "Micronesia",
        b: "Melanesia",
        c: "Polynesia",
        d: "Hawaii island chain"
      },
      correctAnswer: "c"
    },
    {
      question: "Q2. Which one of the following elment's isotope is used in the treatment of cancer?",
      answers: {
        a: "Uranium",
        b: "Cobalt",
        c: "Sodium",
	d: "Iodine"
      },
      correctAnswer: "b"
    },
    {
      question: "Q3. Deendayal Port is located at",
      answers: {
        a: "Kerala",
        b: "Gujarat",
        c: "Maharashtra",
        d: "Goa"
      },
      correctAnswer: "b"
    },
    {
      question: "Q4. Which one of the following is NOT the unit of energy?",
      answers: {
        a: "Joule",
        b: "Watt-hr",
        c: "Newton-meter",
        d: "kg-metre/sec^2"
      },
      correctAnswer: "d"
    },
{
      question: "Q5. What is the number of diagonals of an octagon?",
      answers: {
        a: "48",
        b: "40",
        c: "28",
        d: "20"
      },
      correctAnswer: "d"
    }
  ];

 
  buildQuiz();

  submitButton.addEventListener('click', showResults);
})();