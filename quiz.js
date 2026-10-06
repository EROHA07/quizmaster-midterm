const quizzes = {

    programming: [
        {
            question: "What does HTML stand for?",
            answers: [
                { text: "Hyper Text Markup Language", correct: true },
                { text: "High Tech Modern Language", correct: false },
                { text: "Home Tool Markup Language", correct: false },
                { text: "Hyper Transfer Main Language", correct: false }
            ]
        },
        {
            question: "Which language is used to style web pages?",
            answers: [
                { text: "Python", correct: false },
                { text: "CSS", correct: true },
                { text: "Java", correct: false },
                { text: "SQL", correct: false }
            ]
        },
        {
            question: "Which HTML tag creates a hyperlink?",
            answers: [
                { text: "<link>", correct: false },
                { text: "<a>", correct: true },
                { text: "<href>", correct: false },
                { text: "<url>", correct: false }
            ]
        },
        {
            question: "Which CSS property changes text color?",
            answers: [
                { text: "font-color", correct: false },
                { text: "text-color", correct: false },
                { text: "color", correct: true },
                { text: "background-color", correct: false }
            ]
        },
        {
            question: "Which keyword creates a variable in modern JavaScript?",
            answers: [
                { text: "varname", correct: false },
                { text: "let", correct: true },
                { text: "variable", correct: false },
                { text: "define", correct: false }
            ]
        }
    ],


    science: [
        {
            question: "Which planet is known as the Red Planet?",
            answers: [
                { text: "Earth", correct: false },
                { text: "Venus", correct: false },
                { text: "Mars", correct: true },
                { text: "Jupiter", correct: false }
            ]
        },
        {
            question: "What is H2O commonly called?",
            answers: [
                { text: "Oxygen", correct: false },
                { text: "Hydrogen", correct: false },
                { text: "Water", correct: true },
                { text: "Salt", correct: false }
            ]
        },
        {
            question: "Which gas do humans need to breathe?",
            answers: [
                { text: "Carbon dioxide", correct: false },
                { text: "Oxygen", correct: true },
                { text: "Helium", correct: false },
                { text: "Hydrogen", correct: false }
            ]
        },
        {
            question: "What is the center of an atom called?",
            answers: [
                { text: "Electron", correct: false },
                { text: "Nucleus", correct: true },
                { text: "Cell", correct: false },
                { text: "Proton layer", correct: false }
            ]
        },
        {
            question: "What force keeps us on Earth?",
            answers: [
                { text: "Electricity", correct: false },
                { text: "Magnetism", correct: false },
                { text: "Gravity", correct: true },
                { text: "Pressure", correct: false }
            ]
        }
    ],


    history: [
        {
            question: "In which country were the pyramids of Giza built?",
            answers: [
                { text: "Greece", correct: false },
                { text: "Egypt", correct: true },
                { text: "Italy", correct: false },
                { text: "India", correct: false }
            ]
        },
        {
            question: "Who was the first president of the United States?",
            answers: [
                { text: "Abraham Lincoln", correct: false },
                { text: "George Washington", correct: true },
                { text: "Thomas Jefferson", correct: false },
                { text: "John Kennedy", correct: false }
            ]
        },
        {
            question: "World War II ended in which year?",
            answers: [
                { text: "1942", correct: false },
                { text: "1945", correct: true },
                { text: "1950", correct: false },
                { text: "1939", correct: false }
            ]
        },
        {
            question: "Which civilization built the Colosseum?",
            answers: [
                { text: "Roman", correct: true },
                { text: "Maya", correct: false },
                { text: "Egyptian", correct: false },
                { text: "Viking", correct: false }
            ]
        },
        {
            question: "The Renaissance began in which country?",
            answers: [
                { text: "France", correct: false },
                { text: "Germany", correct: false },
                { text: "Italy", correct: true },
                { text: "Spain", correct: false }
            ]
        }
    ],


    geography: [
        {
            question: "What is the capital of Kazakhstan?",
            answers: [
                { text: "Almaty", correct: false },
                { text: "Astana", correct: true },
                { text: "Aktobe", correct: false },
                { text: "Shymkent", correct: false }
            ]
        },
        {
            question: "What is the largest ocean on Earth?",
            answers: [
                { text: "Atlantic Ocean", correct: false },
                { text: "Indian Ocean", correct: false },
                { text: "Pacific Ocean", correct: true },
                { text: "Arctic Ocean", correct: false }
            ]
        },
        {
            question: "Which is the largest continent?",
            answers: [
                { text: "Europe", correct: false },
                { text: "Africa", correct: false },
                { text: "Asia", correct: true },
                { text: "Australia", correct: false }
            ]
        },
        {
            question: "What is the capital of Japan?",
            answers: [
                { text: "Seoul", correct: false },
                { text: "Beijing", correct: false },
                { text: "Tokyo", correct: true },
                { text: "Kyoto", correct: false }
            ]
        },
        {
            question: "Which country is famous for the Eiffel Tower?",
            answers: [
                { text: "Italy", correct: false },
                { text: "France", correct: true },
                { text: "Germany", correct: false },
                { text: "Spain", correct: false }
            ]
        }
    ],


    movies: [
        {
            question: "Which movie features the character Jack Sparrow?",
            answers: [
                { text: "Titanic", correct: false },
                { text: "Pirates of the Caribbean", correct: true },
                { text: "Avatar", correct: false },
                { text: "Gladiator", correct: false }
            ]
        },
        {
            question: "Who is Batman's secret identity?",
            answers: [
                { text: "Peter Parker", correct: false },
                { text: "Clark Kent", correct: false },
                { text: "Bruce Wayne", correct: true },
                { text: "Tony Stark", correct: false }
            ]
        },
        {
            question: "Which movie series features Hogwarts?",
            answers: [
                { text: "Star Wars", correct: false },
                { text: "Harry Potter", correct: true },
                { text: "The Matrix", correct: false },
                { text: "Jurassic Park", correct: false }
            ]
        },
        {
            question: "Which superhero is also known as Tony Stark?",
            answers: [
                { text: "Batman", correct: false },
                { text: "Superman", correct: false },
                { text: "Iron Man", correct: true },
                { text: "Spider-Man", correct: false }
            ]
        },
        {
            question: "Which movie is about a sinking passenger ship?",
            answers: [
                { text: "Titanic", correct: true },
                { text: "Avatar", correct: false },
                { text: "Joker", correct: false },
                { text: "Rocky", correct: false }
            ]
        }
    ],


    sports: [
        {
            question: "How many players does one football team have on the field?",
            answers: [
                { text: "9", correct: false },
                { text: "10", correct: false },
                { text: "11", correct: true },
                { text: "12", correct: false }
            ]
        },
        {
            question: "Which sport uses a racket and a shuttlecock?",
            answers: [
                { text: "Tennis", correct: false },
                { text: "Badminton", correct: true },
                { text: "Football", correct: false },
                { text: "Basketball", correct: false }
            ]
        },
        {
            question: "How many points is a free throw worth in basketball?",
            answers: [
                { text: "1", correct: true },
                { text: "2", correct: false },
                { text: "3", correct: false },
                { text: "4", correct: false }
            ]
        },
        {
            question: "Which sport is played at Wimbledon?",
            answers: [
                { text: "Football", correct: false },
                { text: "Tennis", correct: true },
                { text: "Golf", correct: false },
                { text: "Basketball", correct: false }
            ]
        },
        {
            question: "The Olympic Games are normally held every how many years?",
            answers: [
                { text: "2 years", correct: false },
                { text: "3 years", correct: false },
                { text: "4 years", correct: true },
                { text: "5 years", correct: false }
            ]
        }
    ]
};


// GET CATEGORY FROM URL

const params = new URLSearchParams(window.location.search);

const selectedCategory =
    params.get("category") || "programming";

const questions =
    quizzes[selectedCategory] || quizzes.programming;


// HTML ELEMENTS

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

    nextButton.innerHTML = "Next Question";

    scoreDisplay.innerHTML = "Score: 0";

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

        if (answer.correct) {
            button.dataset.correct = "true";
        }

        button.addEventListener(
            "click",
            selectAnswer
        );

        answerButtons.appendChild(button);
    });
}


function resetState() {

    nextButton.style.display = "none";

    while (answerButtons.firstChild) {

        answerButtons.removeChild(
            answerButtons.firstChild
        );
    }
}


function selectAnswer(event) {

    const selectedButton =
        event.target;

    const isCorrect =
        selectedButton.dataset.correct === "true";


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
            button.dataset.correct === "true"
        ) {
            button.classList.add(
                "correct"
            );
        }

        button.disabled = true;
    });


    nextButton.style.display = "block";
}


function showScore() {

    resetState();

    questionElement.innerHTML =
        `You scored ${score} out of ${questions.length}!`;

    questionCounter.innerHTML =
        "Quiz Completed";

    progressBar.style.width = "100%";


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