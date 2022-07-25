// Create an array of objects that hold questions and answers
var Questions = [{
    id: 0,
    q: "What do we use to change the style of an elment in JavaScript?",
    a: [{ text: ".setAttribut()", isCorrect: true },
    { text: ".splice()", isCorrect: false },
    { text: ".querySelector", isCorrect: false },
    { text: ".elementStyle", isCorrect: false }
    ]

},
{
    id: 1,
    q: "How do you declare a string in JavaScript?",
    a: [{ text: "var myVar = []", isCorrect: false, },
    { text: "var myVar = {}", isCorrect: false },
    { text: "var myVar = \"\"", isCorrect: true },
    { text: "var myVar = ()", isCorrect: false }
    ]

},
{
    id: 2,
    q: "How do we tell a number to \"increment\" in JavaScript?",
    a: [{ text: "i--", isCorrect: false },
    { text: "i-=", isCorrect: false },
    { text: "i+=", isCorrect: false },
    { text: "i++", isCorrect: true }
    ]

},

{
    id: 3,
    q: "How do you delare function in JavaScript?",
    a: [{ text: "function\"\"", isCorrect: false },
    { text: "function()", isCorrect: true },
    { text: "function{}", isCorrect: false },
    { text: "function[]", isCorrect: false }
    ]

},

{
    id: 4,
    q: "What is the method for removing the last item from an array?",
    a: [{ text: ".unshift()", isCorrect: false },
    { text: ".slice()", isCorrect: false },
    { text: ".pop()", isCorrect: true },
    { text: ".push()", isCorrect: false }
    ]

},

{
    id: 5,
    q: "What is the correct operator symbol to use a \"or\" comparison?",
    a: [{ text: "&&", isCorrect: false },
    { text: "||", isCorrect: true },
    { text: "++", isCorrect: false },
    { text: "--", isCorrect: false }
    ]

},

{
    id: 6,
    q: "What is the comparison operator used to tell if something is equal in \"type\" and \"value\"",
    a: [{ text: "=", isCorrect: false },
    { text: "==", isCorrect: false },
    { text: "===", isCorrect: true },
    { text: "====", isCorrect: false }
    ]

},

{
    id: 7,
    q: "Which of these is the correct way to create an element in JavaScript?",
    a: [{ text: "document.createTag", isCorrect: false },
    { text: "document.createDiv", isCorrect: false },
    { text: "document.elementCreate", isCorrect: false },
    { text: "document.createElement", isCorrect: true }
    ]

},

{
    id: 8,
    q: "Which of these is the correct way to declare a boolean in JavaScript?",
    a: [{ text: "var myVar = true;", isCorrect: true },
    { text: "var myVar = 9;", isCorrect: false },
    { text: "var myVar = \"nine\"", isCorrect: false },
    { text: "var myVar = [\"1\", \"2\"]", isCorrect: false }
    ]

},

{
    id: 9,
    q: "What is the unit of meaurment when setting time intervals for a timer in JavaScript?",
    a: [{ text: "seconds", isCorrect: false },
    { text: "milliseconds", isCorrect: true },
    { text: "minutes", isCorrect: false },
    { text: "hours", isCorrect: false }
    ]

},

{
    id: 10,
    q: "END OF QUIZ"
}
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
var id = 0;





// Functions
function countdown() {
    var timeInterval = setInterval(function () {
        timeLeft--;
        timer.textContent = timeLeft;
        if (timeLeft === 0) {
            clearInterval(timeInterval);
            timer.textContent = "0";
        } else if (id === 10 && score.style.display === "none" ) {
            clearInterval(timeInterval);
            timer.textContent = timeLeft;
            quiz.style.display = "none"
            score.style.display = "flex";
            scoreText.innerText = "Congratulations your score is : " + timeLeft;
        }
    }, 1000);
};


function iterate(id) {    

    // Add the text we want to display from our Questions array
    question.innerText = Questions[id].q;

    // Add the text we want to display from our Questions array
    answer1.innerText = Questions[id].a[0].text;
    answer2.innerText = Questions[id].a[1].text;
    answer3.innerText = Questions[id].a[2].text;
    answer4.innerText = Questions[id].a[3].text;

    // Add true or false using isCorrect boolean
    answer1.value = Questions[id].a[0].isCorrect;
    answer2.value = Questions[id].a[1].isCorrect;
    answer3.value = Questions[id].a[2].isCorrect;
    answer4.value = Questions[id].a[3].isCorrect;

};



// Event Listners

// Add start button to start the quiz with iterate and countdown function within
startBtn.addEventListener("click", function () {
    if (quiz.style.display === "none" && id <= 9) {
        quiz.style.display = "flex";

    } else {
        quiz.style.display = "none";
    }
    start.setAttribute("style", "display: none;");
    countdown();
    iterate(id);
   
});


// Event Listener for answer buttons
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























