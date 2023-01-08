const quizQuestions = [
    {
        question: "What breed of dog is most cited to be the insperation of the ancient Egyptian God Anubis?", 
        a: "Xoloitzcuintli", 
        b: "Basenji",
        c: "Pharaoh Hound",
        d: "Doberman Pinscher",
        correct: "b"
    },
    {
      question: "Which cat weighs the most?",
      a: "Lions",
      b: "Siberian Tigers",
      c: "Pumas", 
      d: "Bengal Tigers",
      correct: "b"
    },
    {
     question: "What animal has the highest blood pressure?",
     a: "African bush elephant",
     b: "Cheetah",
     c: "Hippo",
     d: "Giraffe",
     correct: "d"
    },
    {
        question: "What head shape does the dog breed `Boxer` have?",
        a: "Brachycephalic",
        b: "Dolichocephalic",
        c: "Mesocephalic",
        d: "Zygocephalic",
        correct: "a"
    },
];

const quiz = document.getElementById("quiz-app")
const answerOpt = document.querySelectorAll(".answer")
const questionOpt = document.getElementById("questionair")
const a_text = document.getElementById("a_answer")
const b_text = document.getElementById("b_answer")
const c_text = document.getElementById("c_answer")
const d_text = document.getElementById("d_answer")
const submitBtn = document.getElementById("submit")


let currentQuestion = 0
let score = 0
loadQuestion()
function loadQuestion(){
    deselectAnswers()
    const currentQuestionData = quizQuestions[currentQuestion]
    questionOpt.innerText = currentQuestionData.question
    a_text.innerText = currentQuestionData.a
    b_text.innerText = currentQuestionData.b
    c_text.innerText = currentQuestionData.c
    d_text.innerText = currentQuestionData.d
}

function deselectAnswers(){
    answerOpt.forEach(answerEL => answerEL.checked = false)
}


function getSelectedOpt(){
    let answer 
    answerOpt.forEach(answerEL => {
        if(answerEL.checked) {
            answer = answerEL.id
        }
    })
    return answer
}


submitBtn.addEventListener("click", function(){
    const answer = getSelectedOpt()
     if(answer) {
        if(answer === quizQuestions[currentQuestion].correct){
            score++
        }
        currentQuestion++
        if(currentQuestion < quizQuestions.length){
            loadQuestion()
        } else {
            quiz.innerHTML = `<h2>You answered ${score}/${quizQuestions.length} questions correctly!</h2>
            <button class="btn" onclick="location.reload()">Test Again?</button>`
        }
     }
} )