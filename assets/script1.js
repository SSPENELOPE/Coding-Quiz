// Questions for the quiz using an Array of Objects
var questions = [
    {
        question: "What do we use to change the style of an elment in JavaScript?",
        answer: [{ text: ".setAttribut()", isCorrect: true },
        { text: ".splice()", isCorrect: false },
        { text: ".querySelector", isCorrect: false },
        { text: ".elementStyle", isCorrect: false }
        ]

    },
    {
        question: "How do you declare a string in JavaScript?",
        answer: [{ text: "var myVar = []", isCorrect: false, },
        { text: "var myVar = {}", isCorrect: false },
        { text: "var myVar = \"\"", isCorrect: true },
        { text: "var myVar = ()", isCorrect: false }
        ]

    },
    {
        question: "How do we tell a number to \"increment\" in JavaScript?",
        answer: [{ text: "i--", isCorrect: false },
        { text: "i-=", isCorrect: false },
        { text: "i+=", isCorrect: false },
        { text: "i++", isCorrect: true }
        ]

    },
    {
        question: "How do you delare function in JavaScript?",
        answer: [{ text: "function\"\"", isCorrect: false },
        { text: "function()", isCorrect: true },
        { text: "function{}", isCorrect: false },
        { text: "function[]", isCorrect: false }
        ]

    },

    {
        question: "What is the method for removing the last item from an array?",
        answer: [{ text: ".unshift()", isCorrect: false },
        { text: ".slice()", isCorrect: false },
        { text: ".pop()", isCorrect: true },
        { text: ".push()", isCorrect: false }
        ]

    },

    {
        question: "What is the correct operator symbol to use a \"or\" comparison?",
        answer: [{ text: "&&", isCorrect: false },
        { text: "||", isCorrect: true },
        { text: "++", isCorrect: false },
        { text: "--", isCorrect: false }
        ]

    },

    {
        question: "What is the comparison operator used to tell if something is equal in \"type\" and \"value\"",
        answer: [{ text: "=", isCorrect: false },
        { text: "==", isCorrect: false },
        { text: "===", isCorrect: true },
        { text: "====", isCorrect: false }
        ]

    },

    {
        question: "Which of these is the correct way to create an element in JavaScript?",
        answer: [{ text: "document.createTag", isCorrect: false },
        { text: "document.createDiv", isCorrect: false },
        { text: "document.elementCreate", isCorrect: false },
        { text: "document.createElement", isCorrect: true }
        ]

    },

    {
        question: "Which of these is the correct way to declare a boolean in JavaScript?",
        answer: [{ text: "var myVar = true;", isCorrect: true },
        { text: "var myVar = 9;", isCorrect: false },
        { text: "var myVar = \"nine\"", isCorrect: false },
        { text: "var myVar = [\"1\", \"2\"]", isCorrect: false }
        ]

    },

    {
        question: "What is the unit of meaurment when setting time intervals for a timer in JavaScript?",
        answers: [{ text: "seconds", isCorrect: false },
        { text: "milliseconds", isCorrect: true },
        { text: "minutes", isCorrect: false },
        { text: "hours", isCorrect: false }
        ]
    },
];




// Variables
var timer = document.getElementById("timer");
var start = document.querySelector(".start-button");
var startBtn = document.getElementById("startBtn");
var quiz = document.getElementById("quiz");
var result = document.getElementById("result");
var answerBtn = document.querySelector(".answer");
var timeLeft = 120;

var answers = document.querySelectorAll(".answer");
var answer1 = document.getElementById("ans1");
var answer2 = document.getElementById("ans2");
var answer3 = document.getElementById("ans3");
var answer4 = document.getElementById("ans4");
var question = document.getElementById("question");
var score = document.getElementById("score");
var scoreText = document.getElementById("score-text");
var tryAgain = document.querySelector(".try-again");



// Functions
function countdown() {
    var timeInterval = setInterval(function () {
        timeLeft--;
        timer.textContent = timeLeft;
        if (timeLeft === 0) {
            clearInterval(timeInterval);
            timer.textContent = "0";
            quiz.style.display = "none";
            score.style.display = "flex";
            scoreText.innerText = "Sorry you ran out of time, Better luck next time!";
        }
        if (questions.length === 0) {
            clearInterval(timeInterval);
            timer.textContent = timeLeft;
            quiz.style.display = "none"
            score.style.display = "flex";
            tryAgain.style.display = "none";
            scoreText.innerText = "Congratulations your score is: " + timeLeft;
        }
    }, 1000);
};


// Function to obtain a object randomly from questions array
function getRandomQuestion() {
    console.log(questions)
    return randomIndex = Math.floor(Math.random() * questions.length);
};


// Iterate Function to cylce the questions at a randomIndex from getRandomNumber function
function iterate(randomIndex) {
    //console.log(questions);
    questions.pop(randomIndex);

    // Add the text we want to display from our Questions array
    question.innerText = questions["0", "1", "2", "3", "4", "5", "6", "7", "8"].question;


    // Add the text we want to display from our Questions array
    answer1.innerText = questions["0", "1", "2", "3", "4", "5", "6", "7", "8"].answer[0].text;
    answer2.innerText = questions["0", "1", "2", "3", "4", "5", "6", "7", "8"].answer[1].text;
    answer3.innerText = questions["0", "1", "2", "3", "4", "5", "6", "7", "8"].answer[2].text;
    answer4.innerText = questions["0", "1", "2", "3", "4", "5", "6", "7", "8"].answer[3].text;



    // Add true or false using isCorrect boolean
    answer1.value = questions["0", "1", "2", "3", "4", "5", "6", "7", "8"].answer[0].isCorrect;
    answer2.value = questions["0", "1", "2", "3", "4", "5", "6", "7", "8"].answer[1].isCorrect;
    answer3.value = questions["0", "1", "2", "3", "4", "5", "6", "7", "8"].answer[2].isCorrect;
    answer4.value = questions["0", "1", "2", "3", "4", "5", "6", "7", "8"].answer[3].isCorrect;
};




// Start button to start the quiz with iterate and countdown function within
startBtn.addEventListener("click", function () {
    if (quiz.style.display === "none") {
        quiz.style.display = "flex";

    } else {
        quiz.style.display = "none";
    }
    start.setAttribute("style", "display: none;");
    countdown();
    iterate();
});


// Answer buttons
answers.forEach(answer => {
    answer.addEventListener("click", function () {
        if (answer.value == "true" && questions.length > 0) {
            iterate(getRandomQuestion());
            result.innerText = "True!";
            result.style.color = "green";
        } else if (answer.value == "false" && questions.length > 0) {
            iterate(getRandomQuestion());
            timeLeft -= 10;
            result.innerText = "False!";
            result.style.color = "red";
        }
    });
});


// Try again button end of quiz
tryAgain.addEventListener("click", function () {
    timeLeft = 120;
    countdown();
    iterate(randomIndex);
    quiz.style.display = "flex";
    score.style.display = "none";
});




















