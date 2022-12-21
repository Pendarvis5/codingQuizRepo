let challengeButton = document.getElementById("btn btn-secondary btn-lg")
let countdown = document.getElementById("countdown")
let answer = document.getElementById("answer")
let introCard = document.querySelector(".intro-card");
let choices = document.querySelectorAll("ol li");

const questions = [
    {
        question: "Where does the attachment for an external .css stylesheet go in HTML?",
        options: {
            
            a: "css can be placed at the bottom of the page outside the body",
            b: "css must be placed in the head of the HTML code",
            c: "External .css stylesheets are attached no matter where they are placed",
        },
        answer: "b"  // this is pointed to the key in the options field
    },
    {
        question: "What does HTML stand for?",
        options: {
            a: "Hyper Top Making Language",
            b: "Hyper Text Mark Up Language",
            c: "Hyper Time Mark Line",
            d: "Hyper Text Making Language",
        },
        answer: "b"
    },
    {
        question: "What are the data types supported by Java Script?",
        options: {
            a: "strings",
            b: "booleans",
            c: "neither",
            d: "A and B",
        },
        answer: 'd'
    }
]

function generateQuestionView(questionIndex) {
    if (questions.length === questionIndex) {
        // placeholder must add end game state
        alert("Game Over");
        return;    
    }

    const questionObject = questions[questionIndex];
    
    // clear the questions
    const options = document.querySelector('#options');
    options.innerHTML = "";

    const questionHeader = document.querySelector('#question');
    // this is how you update the text of an element
    console.log(questionObject);
    questionHeader.innerText = questionObject.question
    createOptions(questionObject.options, questionObject.answer, questionIndex)
}

function createOptions(optionsObject, answer, questionIndex) {
    const options = document.querySelector('#options');
    
    const unorderedList = document.createElement('ul');
    const optionsKeys = Object.keys(optionsObject);
    for (let optionKey of optionsKeys) {
        const listItem = document.createElement('li');
        const button = document.createElement('button');
        
        button.innerText = optionsObject[optionKey] // the string for the option
        button.addEventListener('click',  function() {
            const answerDiv = document.querySelector('#answer');

            console.log(optionKey, answer)
            if (optionKey === answer) {
                answerDiv.innerText = "Correct";
               
            } else {
                answerDiv.innerText = "Wrong!"
            }

            setTimeout(function() {
                answerDiv.innerText = "";
            }, 1000);

            generateQuestionView(questionIndex+1)

        })

        listItem.append(button)
        unorderedList.append(listItem)
    }
    options.append(unorderedList);
}



function game() {
    const startGameButton = document.getElementById('startGameButton');

    startGameButton.addEventListener('click', function() {
        const inftroCard = document.querySelector('.intro-card');
        const mainSection = document.querySelector('#game-card');
        inftroCard.style.display = "none";
        mainSection.style.display = "block";

        const questionsDiv = document.querySelector('.questions');
        questionsDiv.style.display = "block";

        generateQuestionView(0)
    });
}

game()