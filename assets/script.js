var questions = [{
    id: 0,
    question: "What do we use to change the style of an elment in JavaScript?",
    answer: [{ text: ".setAttribut()", isCorrect: true },
    { text: ".splice()", isCorrect: false },
    { text: ".querySelector", isCorrect: false },
    { text: ".elementStyle", isCorrect: false }
    ]

},
{
    id: 1,
    question: "How do you declare a string in JavaScript?",
    answer: [{ text: "var myVar = []", isCorrect: false, },
    { text: "var myVar = {}", isCorrect: false },
    { text: "var myVar = \"\"", isCorrect: true },
    { text: "var myVar = ()", isCorrect: false }
    ]

},
{
    id: 2,
    question: "How do we tell a number to \"increment\" in JavaScript?",
    answer: [{ text: "i--", isCorrect: false },
    { text: "i-=", isCorrect: false },
    { text: "i+=", isCorrect: false },
    { text: "i++", isCorrect: true }
    ]

},

{
    id: 3,
    question: "How do you delare function in JavaScript?",
    answer: [{ text: "function\"\"", isCorrect: false },
    { text: "function()", isCorrect: true },
    { text: "function{}", isCorrect: false },
    { text: "function[]", isCorrect: false }
    ]

},

{
    id: 4,
    question: "What is the method for removing the last item from an array?",
    answer: [{ text: ".unshift()", isCorrect: false },
    { text: ".slice()", isCorrect: false },
    { text: ".pop()", isCorrect: true },
    { text: ".push()", isCorrect: false }
    ]

},

{
    id: 5,
    question: "What is the correct operator symbol to use a \"or\" comparison?",
    answer: [{ text: "&&", isCorrect: false },
    { text: "||", isCorrect: true },
    { text: "++", isCorrect: false },
    { text: "--", isCorrect: false }
    ]

},

{
    id: 6,
    question: "What is the comparison operator used to tell if something is equal in \"type\" and \"value\"",
    answer: [{ text: "=", isCorrect: false },
    { text: "==", isCorrect: false },
    { text: "===", isCorrect: true },
    { text: "====", isCorrect: false }
    ]

},

{
    id: 7,
    question: "Which of these is the correct way to create an element in JavaScript?",
    answer: [{ text: "document.createTag", isCorrect: false },
    { text: "document.createDiv", isCorrect: false },
    { text: "document.elementCreate", isCorrect: false },
    { text: "document.createElement", isCorrect: true }
    ]

},

{
    id: 8,
    question: "Which of these is the correct way to declare a boolean in JavaScript?",
    answer: [{ text: "var myVar = true;", isCorrect: true },
    { text: "var myVar = 9;", isCorrect: false },
    { text: "var myVar = \"nine\"", isCorrect: false },
    { text: "var myVar = [\"1\", \"2\"]", isCorrect: false }
    ]

},

{
    id: 9,
    question: "What is the unit of meaurment when setting time intervals for a timer in JavaScript?",
    answer: [{ text: "seconds", isCorrect: false },
    { text: "milliseconds", isCorrect: true },
    { text: "minutes", isCorrect: false },
    { text: "hours", isCorrect: false }
    ]

},

{
    id: 10,
    question: "END OF QUIZ",
    answer: [{ text: "Thank You", isCorrect: true },
    { text: "For Taking", isCorrect: true },
    { text: "My", isCorrect: true },
    { text: "Coding Quiz", isCorrect: true }
    ]
}
];


/*        Variables         */

// General variables
var timer =document.getElementById("timer");
var start = document.querySelector(".start-button");
var quiz = document.getElementById("quiz");
var timeLeft = 120;



// Question and Answer button variables
var question = document.getElementById("question");
var id = 0;

var answers = document.querySelectorAll(".answer");
var answer1 = document.getElementById("ans1");
var answer2 = document.getElementById("ans2");
var answer3 = document.getElementById("ans3");
var answer4 = document.getElementById("ans4");
var result = document.getElementById("result");

// Score results at end of quiz variables
var scoreWrapper = document.getElementById("score");
var scoreText = document.getElementById("score-text");

// Scoreboard variables 
var scoreBoard = document.querySelector(".score-board");
var form = document.getElementById("form");
var userInitials = document.getElementById("intials");
var scoreList = document.getElementById("score-list");
var userScores = [];

// Button variables
var viewHighscoresBtn = document.querySelector(".highscore");
var answerBtn = document.querySelector(".answer");
var tryAgain = document.querySelector(".try-again");
var startBtn = document.getElementById("startBtn");
var returnBtn = document.getElementById("returnBtn");
var clearBtn = document.getElementById("clearBtn");
var returnStrtBtn = document.querySelector(".return-start");




/*                 Functions              */

// Function to add the userscores to the scoreboard
function loadUserScores() {
    scoreList.innerHTML = "";

    for (var i = 0; i < userScores.length; i++) {
        var score = userScores[i];

        var li = document.createElement("li");
        li.textContent = score;
        li.setAttribute("data-index", i);

        scoreList.appendChild(li);
    }
};

// Load scores on page start
function loadScores() {
    var storedScores = JSON.parse(localStorage.getItem("userScores"));
        if (storedScores !== null) {
            userScores = storedScores;
         };
         // Add loadUserScores function to add the scores on page start
    loadUserScores();
};

// Function to save the users score at quiz end
function storeScore() {
    localStorage.setItem("userScores", JSON.stringify(userScores));
};

function clearScores() {
    localStorage.clear()
}

// Function for the timer
function countdown() {
    var timeInterval = setInterval(function () {
        timeLeft--;
        timer.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timeInterval);
            timer.textContent = "0";
            quiz.style.display = "none";
            scoreWrapper.style.display = "flex";
            scoreText.innerText = "Sorry you ran out of time, Better luck next time!";
            form.style.display = "none";
        } else if (id === 10 && scoreWrapper.style.display === "none") {
            clearInterval(timeInterval);
            timer.textContent = timeLeft;
            quiz.style.display = "none"
            scoreWrapper.style.display = "flex";
            tryAgain.style.display = "none";
            returnStrtBtn.style.display = "none";
            form.style.display = "flex";
            scoreText.innerText = "Congratulations your score is: " + timeLeft;
        }
    }, 1000);
};

// Function to cycle through the questions
function iterate(id) {

    // Add the text we want to display from our Questions array
    question.innerText = questions[id].question;

    // Add the text we want to display from our Questions array
    answer1.innerText = questions[id].answer[0].text;
    answer2.innerText = questions[id].answer[1].text;
    answer3.innerText = questions[id].answer[2].text;
    answer4.innerText = questions[id].answer[3].text;

    // Add true or false using isCorrect boolean
    answer1.value = questions[id].answer[0].isCorrect;
    answer2.value = questions[id].answer[1].isCorrect;
    answer3.value = questions[id].answer[2].isCorrect;
    answer4.value = questions[id].answer[3].isCorrect;

};

// Function to clear the scoreboard in highscores
function reloadScoreboard() {
   while (scoreList.hasChildNodes()) {
    scoreList.removeChild(scoreList.firstChild);
   };
   clearScores();
};



/*           Event Listners           */
// Submit button on for input at end of quiz
form.addEventListener("submit", function(event){
    event.preventDefault();
    
    var initalsText = userInitials.value.trim().toUpperCase() + ":" + " " + timeLeft;
    if (initalsText === "") {
        return;
    };

    if (scoreBoard.style.display === "none") {
        scoreBoard.style.display = "flex";
        scoreWrapper.style.display = "none";
    } else {
        scoreBoard.style.display = "none";
    };

    if (viewHighscoresBtn.disabled = true) {
        viewHighscoresBtn.disabled = false;
    }

    userScores.push(initalsText);

    storeScore();
    loadUserScores();
});

// Start button
startBtn.addEventListener("click", function () {
    if (quiz.style.display === "none" && id <= 9) {
        quiz.style.display = "flex";
        viewHighscoresBtn.disabled = true;
        scoreWrapper.style.display = "none";
    } else {
        quiz.style.display = "none";
    }
    start.setAttribute("style", "display: none;");
    countdown();
    iterate(id);

});

// Answer buttons
answers.forEach(answer => {
    answer.addEventListener("click", function () {
        if (answer.value == "true" && id <= 10) {
            id++;
            iterate(id);
            result.innerText = "True!";
            result.style.color = "green";
        } else if (answer.value == "false") {
            timeLeft -= 10;
            result.innerText = "False!";
            result.style.color = "red";
            id++;
            iterate(id);
        };

    });
});

// Try Agian button
tryAgain.addEventListener("click", function () {
    timeLeft = 120;
    id = 0;
    countdown();
    iterate(id);
    quiz.style.display = "flex";
    scoreWrapper.style.display = "none";
});

// View Highscores button
viewHighscoresBtn.addEventListener("click", function () {
    if (scoreBoard.style.display === "none") {
        scoreBoard.style.display = "flex";
        start.style.display = "none";
    }
});

// Return button
returnBtn.addEventListener("click", function(){
    if (scoreBoard.style.display === "flex") {
        scoreBoard.style.display = "none";
        scoreWrapper.style.display = "none";
        start.style.display = "flex";
        timeLeft = 120;
        iterate(id);
    };
});

// Return to start button
returnStrtBtn.addEventListener("click", function(){
    if (scoreWrapper.style.display === "flex") {
        scoreWrapper.style.display = "none";
        start.style.display = "flex";
        viewHighscoresBtn.disabled = false;
        timeLeft = 120; 
        iterate(id);
    }
})



// Imediatly load scores
loadScores();



