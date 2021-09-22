// selecting all the elements
let start = document.getElementById("start");
let question = document.getElementById("question");
let questionEl = document.getElementById("questionElement");
let optionsEl = document.getElementById("optionsElement")
let answerEl = document.getElementById("answersElement");
let timer = document.getElementById("timer");
let highScore = document.getElementById("highScore");

let questions = [
    {
        // Question 1
        statement: 'Which element is nonsemantic?',
        choice: ['div','form','header','footer'],
        right: 'div'
    },
    {
        // question 2
        statement: 'What is the purpose of  HTML?',
        choice: ['Basic structure of website','Used to control presentation','Used to control the behaviour of different elements','Task automation'],
        right: 'Basic structure of website'
    },
    {
        // question 3
        questionElement: 'What is the purpose of  CSS?',
        optionsElement: ['Basic structure of website','Used to control presentation','Used to control the behaviour of different elements','Task automation'],
        right: 'Used to control presentation'
    },
    {
        // question 4
        questionElement: 'What is the purpose of  JavaScript?',
        optionsElement: ['Basic structure of website','Used to control presentation','Used to control the behaviour of different elements','Task automation'],
        right: 'Used to control the behaviour of different elements'
    },
    {
        // question 5
        questionElement: 'What does "ppl" represent in the following? ppl = ["Bob","Sam","Jill","Jo","Shawn"]',
        optionsElement: ['boolean','array','string','variable'],
        right: 'array'
    },
    {
        // question 6
        questionElement: 'What is a "true" element?',
        optionsElement: ['boolean','array','string','variable'],
        right: 'boolean'
    },
    {
        // quesiton 7
        questionElement: 'What are: ".matches",".spice",".push",".getElementById"?',
        optionsElement: ['Object','Method','Element','Function'],
        right: 'Method'
    },
]


function startBtn (){
    let quizRulesBox = document.getElementById("quizRulesBox");
    quizRulesBox.setAttribute("style", "display: none");
    // setTime();
}
// function presentQuestion(){
// questionEl.textContent = questions[0].statement;
// console.log(question)
// }

// function presentOptions(){
// optionsEl.textContent = questions[0].choice
// }
function present(){
    for(let i=0;i < questions.length;i++) {
    questionEl.textContent = questions[i].statement;
    optionsEl.textContent = questions[i].choice;
    answerEl.textContent = questions[i].right
    }
}

present();
// let timerLeft = 60;

// function setTime() {
//   let timerInterval = setInterval(function() {
//     timerLeft--;
//     timer.textContent = "Time: " + timerLeft + " sec left";
//     if(timerLeft === 0) {
//       clearInterval(timerInterval);
//       sendMessage();
//     }
//   }, 1000);
// }
// function sendMessage() {
//   timer.textContent = " ";
// }

start.onclick = startBtn;