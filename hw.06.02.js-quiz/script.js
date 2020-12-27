var startButton = document.getElementById("start-btn")
var nextButton = document.getElementById("next-btn")
var containerEl = document.getElementById("container")
var questionElement = document.getElementById("question")
var answerButtonsEl = document.getElementById("answer-btn")
let shuffledQuestions, currentQuestionIndex

startButton.addEventListener("click", startGame)
nextButton.addEventListener("click", () => {
    currentQuestionIndex++
    setNextQuestion()
})
function startGame() {
    console.log("started")
    startButton.classList.add("hide")
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    containerEl.classList.remove("hide")
    setNextQuestion()
}
function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}
function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        var button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtonsEl.appendChild(button)
    })
}
function resetState() {
    nextButton.classList.add("hide")
    while (answerButtonsEl.firstChild) {
        answerButtonsEl.removeChild(answerButtonsEl.firstChild)
    }
}
function selectAnswer(e) {
    var selectedButton = e.target
    var correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsEl.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove("hide")
    } else {
        startButton.innerText = "Game Over"
        startButton.classList.remove("hide")
    }
}
    function setStatusClass(element, correct) {
        clearStatusClass(element)
        if (correct) {
            element.classList.add("correct")
        } else {
            element.classList.add("wrong")
        }
    }
    function clearStatusClass(element) {
        element.classList.remove("correct")
        element.classList.remove("wrong")
    }
    var questions = [{
            question: "Inside which HTML element do we put the JavaScript?",
            answers: [
                {text: "<scripting>",correct: false},
                {text: "<js>", correct: false},
                {text: "<script>", correct: true}
            ]
        },
        {
            question: "Which of the following will write the message “Hello World!” in an alert box?",
            answers: [
                {text: "alertBox(“Hello World!”)", correct: false},
                {text: "alert(Hello World!)", correct: false},
                {text: "alert(“Hello World!”)", correct: true},
            ]
        },
        {
            question: "What is the correct syntax when referring to an external script called 'xxx.js'?",
            answers: [
                {text: "<script href='xxx.js'></script>", correct: false},
                {text: "<script src='xxx.js'></script>", correct: true},
                {text: "<script link='xxx.js'></script>", correct: false}
            ]
        },
        {
            question: "How can you add a comment in Javascript?",
            answers: [
                {text: "//This is a comment.", correct: true},
                {text: "'This is a comment.", correct: false},
                {text: "<!--This is a comment.-->", correct: false}
            ]
        },
        {
            question: "How do you call a function named 'myFunction'?",
            answers: [
                {text: "myFunction()", correct: true},
                {text: "call function myFunction()", correct: false},
                {text: "call myFunction()", correct: false}
            ]
        }
    ]