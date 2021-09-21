let start = document.getElementById("start");

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
