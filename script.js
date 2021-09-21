// selecting all the elements
let start = document.getElementById("start");
let question = document.getElementById("question");
let questionElement = document.getElementById("questionElement");
let answerElement = document.getElementById("answerElement");
let timer = document.getElementById("timer");
let highScore = document.getElementById("highScore");

// putting all the questions/options/answers into the dictonary
var questions = [
    {
        // Question 1
        Title: 'Which element is nonsemantic?',
        Questions: ['div','form', 'header', 'footer'],
        Answer: 'div'
    },
    {
        // question 2
        Title: 'What is the purpose of  HTML?',
        Questions: ['Basic structure of website',
                    'Used to control presentation',
                    'Used to control the behaviour of different elements',
                    'footer'],
        Answer: 'Basic structure of website'
    },
    {
        // question 3
        Title: 'What is the purpose of  CSS?',
        Questions: ['Basic structure of website',
                    'Used to control presentation',
                    'Used to control the behaviour of different elements',
                    'footer'],
        Answer: 'Used to control presentation'
    },
    {
        // question 4
        Title: 'What is the purpose of  JavaScript?',
        Questions: ['Basic structure of website',
                    'Used to control presentation',
                    'Used to control the behaviour of different elements',
                    'footer'],
        Answer: 'Used to control the behaviour of different elements'
    },
    {
        // question 5
        Title: 'What does "ppl" represent in the following? ppl = ["Bob","Sam","Jill","Jo","Shawn"]',
        Questions: ['boolean','array','string','variable'],
        Answer: 'array'
    },
    {
        // question 6
        Title: 'What is a "true" element?',
        Questions: ['boolean','array','string','variable'],
        Answer: 'boolean'
    },
    {
        // quesiton 7
        Title: 'What are: ".matches",".spice",".push",".getElementById"?',
        Questions: ['Object','Method','Element','function'],
        Answer: 'Method'
    },
]

function startquiz (){
    let quizRulesBox = document.getElementById("quizRulesBox");
    quizRulesBox.setAttribute("style", "display: none");
}
start.onclick = startquiz
