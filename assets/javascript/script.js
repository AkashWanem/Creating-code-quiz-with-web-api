const timer = document.querySelector("#time");

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

displayTimer();


// creating function to display questions

let score = 0;

function displayQuestion() {
    for (let i = 0; i < questions.length; i++){
        let response = window.questions[i].question;
        if (response == questions[i].answer){
            score++;
        }
    }
}

