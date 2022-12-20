let challengeButton = document.getElementById("btn btn-secondary btn-lg")
let countdown = document.getElementById("countdown")
let answer = document.getElementById("answer")
let introCard = document.querySelector(".intro-card");
let choices = document.querySelectorAll("ol li");


let questions = [
    {
        question: "Where does the attachment for an external .css stylesheet go in HTML?",
        a: "css must be placed in the head of the HTML code",
        b: "css can be placed at the bottom of the page outside the body",
        c: "External .css stylesheets are attached no matter where they are placed",
        answer: ".css must be placed in the head of the HTML code"
    },
    {
        question: "What does HTML stand for?",
        a: "Hyper Top Making Language",
        b: "Hyper Text Mark Up Language",
        c: "Hyper Time Mark Line",
        d: "Hyper Text Making Language",
        answer: "Hyper Text Mark Up Language"
    },
    {
        question: "What are the data types supported by Java Script?",
        a: "strings",
        b: "booleans",
        c: "neither",
        d: "A and B",
        answer: "A and B"
    }
]
function displytimer() {
         timerid = setInterval(() => {
        totaltime--
        time.textContent = totaltime;
        if (totaltime === 0) {
            clearInterval(timerid)
        }
    }, 1000)
}
function displyquestions(questionNumber) {
    quizWraper.innerHTML = "";
    if (questionNumber >= questions.length) {
        finalSCore.textContent = score;
        allDone.style.display = "block";
        clearInterval(timerid)
        time.textContent = 0;
    } else {
        let div = document.createElement("div");
        let h2 = document.createElement("h2");
        let ol = document.createElement("ol");
        let firstLi = document.createElement("li");
        let secondLi = document.createElement("li");
        let thirdLi = document.createElement("li");
        let fourthLi = document.createElement("li");
        correctAnswer.id = "answer";
        h2.textContent = questions[questionNumber].question;
        firstLi.textContent = questions[questionNumber].a;
        secondLi.textContent = questions[questionNumber].b
        thirdLi.textContent = questions[questionNumber].c
        fourthLi.textContent = questions[questionNumber].d
        ol.appendChild(firstLi)
        ol.appendChild(secondLi)
        ol.appendChild(thirdLi)
        ol.appendChild(fourthLi)
        div.appendChild(h2)
        div.appendChild(ol)
        div.classList.add("questions");
        let hr = document.createElement("hr");
        div.appendChild(hr)
        div.appendChild(correctAnswer)
        firstLi.addEventListener("click", checkAnswer)
        secondLi.addEventListener("click", checkAnswer)
        thirdLi.addEventListener("click", checkAnswer)
        fourthLi.addEventListener("click", checkAnswer)
        quizWraper.appendChild(div);
    }
}
function checkAnswer(e) {
    if (e.target.textContent === questions[currentQuestion].answer) {
        score += 10;
        correctAnswer.textContent = "Correct!"
    } else {
        correctAnswer.textContent = "Incorrect!"
    }
    currentQuestion++
    displyquestions(currentQuestion)
}
startbutton.addEventListener("click", function (e) {
    btnbtn-secondarybtn-lg.style.display = "none";
    quizWraper.style.display = "block";
    displytimer();
    displyquestions(currentQuestion)
})
