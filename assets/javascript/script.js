const timer = document.querySelector("#time");
const startButton = document.querySelector('#start-btn');
const quizQuestions = document.querySelector('#question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');

var secondsLeft = 115;

function displayTimer() {
    timeInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = "Timer: " + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timeInterval);
        }
    }, 1000);
}


// creating function to display questions

let count = 0;

function displayQuestion() {
    if (count < questions.length) {
        quizQuestions.textContent = questions[count].question;
        option1.textContent = questions[count].choices[0];
        option2.textContent = questions[count].choices[1];
        option3.textContent = questions[count].choices[2];
        option4.textContent = questions[count].choices[3];
    }
    console.log(quizQuestions);
}



// function that hecks and responds user if they have answered quiz correctly

//create a game over function

// local storage to store all the scores.

// eventlisteners

startButton.addEventListener('click', function (event) {
    displayTimer();
    displayQuestion();
});
