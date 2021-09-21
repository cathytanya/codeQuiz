// selecting all the elements
let start = document.getElementById("start");
let question = document.getElementById("question");
let questionElement = document.getElementById("questionElement");
let answerElement = document.getElementById("answerElement");
let timer = document.getElementById("timer");
let highScore = document.getElementById("highScore");
// each of these choices will hold the options the user have
let choiceA = document.getElementById("A");
let choiceB = document.getElementById("B");
let choiceC = document.getElementById("C");
let choiceD = document.getElementById("D");
// will help with moving from one question to the next
let lastQuestionIndex = question.length-1;
let runningQuestionIndex = 0;
// putting all the questions/options/answers into the dictonary
let questions = [
    {
        // Question 1
        question: 'Which element is nonsemantic?',
        choiceA: 'div',
        choiceB: 'form',
        choiceC: 'header',
        choiceD:'footer',
        answer: 'A'
    },
    {
        // question 2
        question: 'What is the purpose of  HTML?',
        choiceA: 'Basic structure of website',
        choiceB: 'Used to control presentation',
        choiceC: 'Used to control the behaviour of different elements',
        choiceD: 'Task automation',
        answer: 'A'
    },
    {
        // question 3
        question: 'What is the purpose of  CSS?',
        choiceA: 'Basic structure of website',
        choiceB: 'Used to control presentation',
        choiceC: 'Used to control the behaviour of different elements',
        choiceD: 'Task automation',
        answer: 'B'
    },
    {
        // question 4
        question: 'What is the purpose of  JavaScript?',
        choiceA: 'Basic structure of website',
        choiceB: 'Used to control presentation',
        choiceC: 'Used to control the behaviour of different elements',
        choiceD: 'Task automation',
        answer: 'C'
    },
    {
        // question 5
        question: 'What does "ppl" represent in the following? ppl = ["Bob","Sam","Jill","Jo","Shawn"]',
        choiceA: 'boolean',
        choiceB: 'array',
        choiceC: 'string',
        choiceD: 'variable',
        answer: 'B'
    },
    {
        // question 6
        question: 'What is a "true" element?',
        choiceA: 'boolean',
        choiceB: 'array',
        choiceC: 'string',
        choiceD: 'variable',
        answer: 'A'
    },
    {
        // quesiton 7
        question: 'What are: ".matches",".spice",".push",".getElementById"?',
        choiceA: 'Object',
        choiceB: 'Method',
        choiceC: 'Element',
        choiceD: 'Function',
        answer: 'B'
    },
]

function renderQuestion(){
    let q = question[runningQuestionIndex];
    question.innerHTML = "<p>"+q.question+"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}
runningQuestionIndex++
renderQuestion();
// function startquiz (){
//     let quizRulesBox = document.getElementById("quizRulesBox");
//     quizRulesBox.setAttribute("style", "display: none");
// }
// start.onclick = startquiz
