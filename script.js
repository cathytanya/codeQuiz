// selecting all the elements
let start = document.getElementById("start");
let questionSection = document.getElementById("question");
let questionEl = document.getElementById("questionElement");
let optionsEl = document.getElementById("optionsElement")
let answerEl = document.getElementById("answersElement");
let timer = document.getElementById("timer");
let highScore = document.getElementById("highScore");
let index = 0
let correct = " "
let shuffleQuestions
let currentQuestions

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
        statement: 'What is the purpose of  CSS?',
        choice: ['Basic structure of website','Used to control presentation','Used to control the behaviour of different elements','Task automation'],
        right: 'Used to control presentation'
    },
    {
        // question 4
        statement: 'What is the purpose of  JavaScript?',
        choice: ['Basic structure of website','Used to control presentation','Used to control the behaviour of different elements','Task automation'],
        right: 'Used to control the behaviour of different elements'
    },
    {
        // question 5
        statement: 'What does "ppl" represent in the following? ppl = ["Bob","Sam","Jill","Jo","Shawn"]',
        choice: ['boolean','array','string','variable'],
        right: 'array'
    },
    {
        // question 6
        statement: 'What is a "true" element?',
        choice: ['boolean','array','string','variable'],
        right: 'boolean'
    },
    {
        // quesiton 7
        statement: 'What are: ".matches",".spice",".push",".getElementById"?',
        choice: ['Object','Method','Element','Function'],
        right: 'Method'
    },
]

// start button once pressed
function startBtn (){
    let quizRulesBox = document.getElementById("quizRulesBox");
    start.addEventListener("click",present);
    quizRulesBox.setAttribute("style", "display: none");
    setTime();
    present();
}

function present(){
    let currentQuestions = questions[index]
    questionEl.textContent = currentQuestions.statement;
    optionsElement.innerHTML = " "
    currentQuestions.choice.forEach((choice, i )=> {
        var choiceBtn = document.createElement("Button")
        choiceBtn.setAttribute('value', choice);
        choiceBtn.textContent = i + 1 + "." + choice;
        choiceBtn.onclick = verifyAnswer;
        optionsEl.appendChild(choiceBtn);
   });
    // optionsEl.addEventListener("click", verifyAnswer(index))
}

function verifyAnswer(){
    if (this.value === questions[index].right){
        timerLeft = timerLeft + 10
    }else{
        timerLeft = timerLeft - 10
    }
    index++
    present();
}






// this is the timer for the quiz
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
console.log(timerLeft)

function sendMessage() {
  timer.textContent = " ";
}

start.onclick = startBtn;