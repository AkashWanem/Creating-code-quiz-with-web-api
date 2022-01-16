const timer = document.querySelector("#time");
const startButton = document.querySelector('#start-btn');
const quizQuestions = document.querySelector('#question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const feedback = document.querySelector('#feedback');
const scoreButton = document.querySelector('#scoreBtn');

document.querySelector('#game-card').setAttribute('style', 'display:none');
document.querySelector('#score-screen').setAttribute('style', 'display:none');
document.querySelector('#score-card').setAttribute('style', 'display:none');
document.querySelector('#game-over').setAttribute('style', 'display:none');

// creating a timer function that starts countdown as you start the quiz 

let secondsLeft = questions.length * 15;
let timeInterval;

function displayTimer() {
    timeInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = "Timer: " + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timeInterval);
            gameOver();
        }
    }, 1000);
}


// creating function to display questions
var questions = [
    {
        question: "console.log(typeof false); What will show in the console?",
        choices: ["number", "null", "undefined", "boolean"],
        answer: "boolean"
    },
    {
        question: "The x += y is the same as:",
        choices: ["y = x + y", "x = y + y", "y = x + x", "x = x + y"],
        answer: "x = x + y"
    },
    {
        question: "Which of the following is correct about features of JavaScript?",
        choices: [
            "JavaScript is is complementary to and integrated with HTML.",
            "JavaScript is open and cross-platform.",
            "Both of the above.",
            "All of the above."
        ],
        answer: "Both of the above"
    },
    {
        question: "Which built-in method removes the last element from an array and returns that element?",
        choices: ["last()", "get()", "pop()", "None of the above"],
        answer: "pop()"
    },
    {
        question: "Which of the following function of Number object returns a string value version of the current number?",
        choices: ["toString()", "toFixed()", "toLocaleString()", "toPrecision()"],
        answer: "toString()"
    }
];

let count = 0;

function displayQuestion() {
    if (count < questions.length) {
        document.querySelector('#game-card').setAttribute('style', 'display:block');
        document.querySelector('#main-screen').setAttribute('style', 'display:none');
        quizQuestions.textContent = questions[count].question;
        option1.textContent = '1.' + questions[count].choices[0];
        option2.textContent = '2.' + questions[count].choices[1];
        option3.textContent = '3.' + questions[count].choices[2];
        option4.textContent = '4.' + questions[count].choices[3];
    } else {
        gameOver();
    }
}

// function that checks and responds user if they have answered quiz correctly
let score = 0;

function answerQuestion(event) {
    if (count >= questions.length) {
        gameOver();
        clearInterval(timeInterval);
    } else {
        if (event === questions[count].answer) {
            feedback.textContent = "Correct!";
        } else {
            secondsLeft -= 15;
            feedback.textContent = "Wrong!";
        }
        score = secondsLeft;
        count++;
        displayQuestion();
    }
}

//create a game over function
function gameOver() {
    document.querySelector('#game-over').setAttribute('style', 'display:block');
    document.querySelector('#game-card').setAttribute('style', 'display:none');
    scoreButton.innerHTML = score;
    scoreButton.style.display = "inline-block";
}

// local storage to store all the scores.

// eventlisteners

startButton.addEventListener('click', function (event) {
    displayTimer();
    displayQuestion();
});
