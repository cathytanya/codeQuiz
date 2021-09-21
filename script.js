let start = document.getElementById("start");
let question = document.getElementById("question");
let questionElement = document.getElementById("questionElement");
let answerElement = document.getElementById("answerElement");
let timer = document.getElementById("timer");
let highScore = document.getElementById("highScore");



var questions = [
    {
        Title: 'what is tje nonsemantic element',
        Questions: ['div','form', 'header', 'footer'],
        Answer: 'div'
    },

]

function startquiz (){
    let quizRulesBox = document.getElementById("quizRulesBox");
    quizRulesBox.setAttribute("style", "display: none");
}
start.onclick = startquiz
