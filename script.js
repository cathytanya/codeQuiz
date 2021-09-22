// selecting all the elements
let start = document.getElementById("start");
let question = document.getElementById("question");
let questionElement = document.getElementById("questionElement");
let optionsElement = document.getElementById("options")
let answerElement = document.getElementById("answerElement");
let timer = document.getElementById("timer");
let highScore = document.getElementById("highScore");

let questions = [
    {
        // Question 1
        questionElement: 'Which element is nonsemantic?',
        optionsElement: ['div','form','header','footer'],
        answerElement: 'div'
    },
    {
        // question 2
        questionElement: 'What is the purpose of  HTML?',
        optionsElement: ['Basic structure of website','Used to control presentation','Used to control the behaviour of different elements','Task automation'],
        answerElement: 'Basic structure of website'
    },
    {
        // question 3
        questionElement: 'What is the purpose of  CSS?',
        optionsElement: ['Basic structure of website','Used to control presentation','Used to control the behaviour of different elements','Task automation'],
        answerElement: 'Used to control presentation'
    },
    {
        // question 4
        questionElement: 'What is the purpose of  JavaScript?',
        optionsElement: ['Basic structure of website','Used to control presentation','Used to control the behaviour of different elements','Task automation'],
         answer: 'Used to control the behaviour of different elements'
    },
    {
        // question 5
        questionElement: 'What does "ppl" represent in the following? ppl = ["Bob","Sam","Jill","Jo","Shawn"]',
        optionsElement: ['boolean','array','string','variable'],
        answerElement: 'array'
    },
    {
        // question 6
        questionElement: 'What is a "true" element?',
        optionsElement: ['boolean','array','string','variable'],
        answerElement: 'boolean'
    },
    {
        // quesiton 7
        questionElement: 'What are: ".matches",".spice",".push",".getElementById"?',
        optionsElement: ['Object','Method','Element','Function'],
        answerElement: 'Method'
    },
]


function startBtn (){
    let quizRulesBox = document.getElementById("quizRulesBox");
    quizRulesBox.setAttribute("style", "display: none");
    setTime();
}


let timerLeft = 60;

function setTime() {
  let timerInterval = setInterval(function() {
    timerLeft--;
    timer.textContent = "Time: " + timerLeft + " sec left";
    if(timerLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }
  }, 1000);
}
function sendMessage() {
  timer.textContent = " ";
}

start.onclick = startBtn;