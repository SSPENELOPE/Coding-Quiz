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

}

];


// Variables From HTML
var timer = document.getElementById("timer");
var start = document.querySelector(".start-button");
var startBtn = document.getElementById("startBtn");
var quiz = document.getElementById("quiz");
var result = document.getElementById("result");
var answerBtn = document.querySelector(".answer")
//var isCorrect = document.Questions[a].isCorrect;


// Functions
function countdown(){
    var timeLeft = 120; 
    var timeInterval = setInterval(function () {
    timeLeft --;
    timer.textContent = timeLeft;
    if (timeLeft === 0){
        clearInterval(timeInterval);
    }
    }, 1000);
};

// Add question iteration so we can rotate through questions
var startIterate = true;
function iterate(id) {
    // Get the question from HTML
    const question = document.getElementById("question");
    // Add the text we want to display from our Questions array
    question.innerText = Questions[id].q;

   // Get the answers from HTML
    var answer1 = document.getElementById("ans1");
    var answer2 = document.getElementById("ans2");
    var answer3 = document.getElementById("ans3");
    var answer4 = document.getElementById("ans4");

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

    // event listener for answer buttons
   

};

    

// Add start button to start the quiz with iterate function within
startBtn.addEventListener("click", function (){
    if (quiz.style.display === "none") {
        quiz.style.display = "flex";
        
    } else {
        quiz.style.display = "none";
    }
    start.setAttribute("style", "display: none;");
    countdown();
    if (startIterate) {
        iterate("0")
    }

    answerBtn.addEventListener("click", function(){
        if (isCorrect) {
         timeLeft--;
        } 
     });
});
