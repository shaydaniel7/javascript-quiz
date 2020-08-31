var startButton = document.getElementById("start-button");
var beginScreen = document.getElementById("begin-screen");
var quesScreen = document.getElementById("ques-screen");
var quesText = document.getElementById("ques-text");
var options = document.getElementById("options");
var answer = document.getElementById("answer");
var quesStatus = document.getElementById("ques-status");
var allDone = document.getElementById("all-done")

var questionIndex = 0;
var answer = [];
var nextQuestion = 0;
var ansButton;
var correct = [];

startButton.addEventListener("click", function () {
    beginScreen.setAttribute("class", "hide");
    quesScreen.removeAttribute("class", "hide");
    beginQuiz();
});

function beginQuiz() {
    getQuestions()
};

function getQuestions() {
    var runQuestions = questions[questionIndex];
    quesText.textContent = runQuestions.quesText;
    options.textContent = "";
    runQuestions.options.forEach(function (option, i) {
        var answerBtn = document.createElement("button");
        answerBtn.setAttribute("class", "option");
        answerBtn.setAttribute("value", "option");
        answerBtn.textContent = option;
        answerBtn.onclick = myOption;
        console.log("clicked")
        options.appendChild(answerBtn);
    })
}

// function chooseAnswer() {

//     for (var i = 0; i < options.length; i++) {
//         ansButton = $("<button>");
//         ansButton.addClass("btn btn-light");
//         ansButton.text(options[i]);
//         $("#ques-text").append(ansButton);

//         ansButton.on("click", function (e) {

//             if (e.target.innerText === answer) {
//                 quesStatus.innerHTML = "<hr>" + "Correct!";
//                 quesText.innerHTML = "";
//                 nextQuestion++;
//                 getQuestions();
//             } else {
//                 quesStatus.innerHTML = "<hr>" + "Wrong!";
//             };
//         });
//     }
// }

function myOption() {
    // var runQuestions = questions[questionIndex];
    console.log(this.value)

    if (this.value == questions[questionIndex].answer) {
        console.log("wrong")

    } else {
        console.log("right")
        correct.push(questions[questionIndex]);
    }

    questionIndex++;
    if (questionIndex === questions.length) {
        endGame();
    } else {
        getQuestions();
    }  
    function endGame() {
        quesScreen.setAttribute("class", "hide");
        // allDone.removeAttribute("class", "show");
           
    }


//----------------------------------------------------------------------------------
//class time  re this quiz 

// var quizOptions = {
//     totalScore = 0,
//     questionIndex = 0
// }

// var questionText = document.querySelector("#question-text")
// var questionsContainer = document.querySelector("#questions")

// function generateQuestion() {
//     var question = questionsArray[quizOptions.questionIndex]
//     console.log(question)
//     questionText.textContent = question.question
//     for (i = 0; i < question.questions.length; i++);
//     var questionAnswer = document.createElement("p");
//     questionAnswer.textContent = question.answers[i].answer;
//     questionAnswer.setAttribute("data-value", question.answers[i].correct)
//     questionsContainer.append(questionAnswer);
// }
// generateQuestion()

// questionsContainer.addEventListener("click"),
//     function (event) {
//         console.log("clicked" + event.target.getAttribute("data-value"));
//         var correctAnswer = event.target.getAttribute("data-value");
//         if (correctAnswer) {
//             quizOptions.totalScore += 10;
//             quizOptions.correctCount++;
//         } else {
//             quizOptions.totalScore -= 5;
//         }
//         alert(correctAnswer + "" + quizOptions.totalScore);
//         quizOptions.questionIndex++;
//         questionsContainer.innerHTML = ""
//         generateQuestion();

//         function checkAnswer() {
//             if (answer) {
//                 quizOptions.totalScore += 10
//                 quizOptions.correctCount++;
//             } else {
//                 quizOptions.totalScore -= 5;
//             }
//         }
// if(quizOptions.questionIndex===questionsArray.length-1){
//     gamerOver();
//     return
// }

//end class time re this quiz
//----------------------------------------------------------------------------------

    // questionIndex++;
    // if (questionIndex === questions.length) {
    //     endGame();
    // } else {
    //     console.log("clicked")
    //     getQuestions;
    // }  
}





var questions = [{
        quesText: "Inside which HTML element do we put the JavaScript?",
        options: ["<scripting>", "<js>", "<script>", "<javascript>"],
        answer: "<script>"
    },

    {
        quesText: "Which of the following will write the message “Hello World!” in an alert box?",
        options: ["alertBox(“Hello World!”)", "alert(Hello World!)", "msgAlert(“Hello World!”)", "alert(“Hello World!”)"],
        answer: "alert(“Hello World!”)"
    },

    {
        quesText: "What is the correct syntax when referring to an external script called 'xxx.js'?",
        options: ["<script href='xxx.js'></script>", "<script src='xxx.js'></script>", "<script link='xxx.js'></script>"],
        answer: "<script src='xxx.js'></script>"
    },

    {
        quesText: "How can you add a comment in Javascript?",
        options: ["//This is a comment.", "'This is a comment.", "<!--This is a comment.-->"],
        answer: "//This is a comment."
    },

    {
        quesText: "How do you call a function named 'myFunction'?",
        options: ["myFunction()", "call function myFunction()", "call myFunction()"],
        answer: "myFunction()"
    },

];