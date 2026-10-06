const questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            {
                text: "Hyper Text Markup Language",
                correct: true
            },
            {
                text: "High Tech Modern Language",
                correct: false
            },
            {
                text: "Home Tool Markup Language",
                correct: false
            },
            {
                text: "Hyper Transfer Main Language",
                correct: false
            }
        ]
    },

    {
        question: "Which language is used to style a web page?",
        answers: [
            {
                text: "Python",
                correct: false
            },
            {
                text: "CSS",
                correct: true
            },
            {
                text: "Java",
                correct: false
            },
            {
                text: "SQL",
                correct: false
            }
        ]
    },

    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            {
                text: "Earth",
                correct: false
            },
            {
                text: "Venus",
                correct: false
            },
            {
                text: "Mars",
                correct: true
            },
            {
                text: "Jupiter",
                correct: false
            }
        ]
    },

    {
        question: "What is the capital of Kazakhstan?",
        answers: [
            {
                text: "Almaty",
                correct: false
            },
            {
                text: "Astana",
                correct: true
            },
            {
                text: "Shymkent",
                correct: false
            },
            {
                text: "Aktobe",
                correct: false
            }
        ]
    },

    {
        question: "How many players are on the field in one football team?",
        answers: [
            {
                text: "9",
                correct: false
            },
            {
                text: "10",
                correct: false
            },
            {
                text: "11",
                correct: true
            },
            {
                text: "12",
                correct: false
            }
        ]
    }
];


const questionElement =
    document.getElementById("question");

const answerButtons =
    document.getElementById("answerButtons");

const nextButton =
    document.getElementById("nextButton");

const questionCounter =
    document.getElementById("questionCounter");

const scoreDisplay =
    document.getElementById("scoreDisplay");

const progressBar =
    document.getElementById("progressBar");


let currentQuestionIndex = 0;

let score = 0;


function startQuiz() {

    currentQuestionIndex = 0;

    score = 0;

    nextButton.innerHTML =
        "Next Question";

    scoreDisplay.innerHTML =
        "Score: 0";

    showQuestion();
}


function showQuestion() {

    resetState();


    const currentQuestion =
        questions[currentQuestionIndex];


    questionElement.innerHTML =
        currentQuestion.question;


    questionCounter.innerHTML =
        `Question ${currentQuestionIndex + 1} of ${questions.length}`;


    const progress =
        ((currentQuestionIndex + 1) /
            questions.length) * 100;


    progressBar.style.width =
        progress + "%";


    currentQuestion.answers.forEach(answer => {

        const button =
            document.createElement("button");


        button.innerHTML =
            answer.text;


        button.classList.add(
            "answer-btn"
        );


        answerButtons.appendChild(
            button
        );


        if (answer.correct) {

            button.dataset.correct =
                "true";
        }


        button.addEventListener(
            "click",
            selectAnswer
        );

    });

}


function resetState() {

    nextButton.style.display =
        "none";


    while (
        answerButtons.firstChild
    ) {

        answerButtons.removeChild(
            answerButtons.firstChild
        );

    }

}


function selectAnswer(event) {

    const selectedButton =
        event.target;


    const isCorrect =
        selectedButton.dataset.correct ===
        "true";


    if (isCorrect) {

        selectedButton.classList.add(
            "correct"
        );

        score++;

        scoreDisplay.innerHTML =
            `Score: ${score}`;

    } else {

        selectedButton.classList.add(
            "wrong"
        );

    }


    Array.from(
        answerButtons.children
    ).forEach(button => {

        if (
            button.dataset.correct ===
            "true"
        ) {

            button.classList.add(
                "correct"
            );

        }

        button.disabled = true;

    });


    nextButton.style.display =
        "block";

}


function showScore() {

    resetState();


    questionElement.innerHTML =
        `You scored ${score} out of ${questions.length}!`;


    questionCounter.innerHTML =
        "Quiz Completed";


    progressBar.style.width =
        "100%";


    if (score === questions.length) {

        answerButtons.innerHTML =
            "<p>Excellent! Perfect score! 🎉</p>";

    } else if (score >= 3) {

        answerButtons.innerHTML =
            "<p>Good job! Keep learning! 👏</p>";

    } else {

        answerButtons.innerHTML =
            "<p>Keep practicing and try again! 💪</p>";

    }


    nextButton.innerHTML =
        "Play Again";


    nextButton.style.display =
        "block";

}


function handleNextButton() {

    currentQuestionIndex++;


    if (
        currentQuestionIndex <
        questions.length
    ) {

        showQuestion();

    } else {

        showScore();

    }

}


nextButton.addEventListener(
    "click",
    () => {

        if (
            currentQuestionIndex <
            questions.length
        ) {

            handleNextButton();

        } else {

            startQuiz();

        }

    }
);


startQuiz();