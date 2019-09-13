var clock;
let numCorrect = 0;
let numIncorrect = 0;
let numUnanswered = 0;
let playerAnswer = [];

var questions = [
    {
        question: 'What is the capital of Mongolia?',
        answers: [
            'Mörön',
            'Kuala Lumpur',
            'Ulaanbaatar',
            'Moscow',
        ],
        solution: 2
    },

    {
        question: 'Which of these cities was NOT ranked as an Alpha+ Global City by the Globalization and World Cities Research Network in 2018?',
        answers: [
            'Hong Kong',
            'London',
            'Dubai',
            'Tokyo',
        ],
        solution: 1
    },

    {
        question: 'Which of these countries is a member of both the Schengen Zone AND the EU?',
        answers: [
            'Czech Republic',
            'United Kingdom',
            'Norway',
            'Turkey',
        ],
        solution: 0
    },

    {
        question: 'Which of the following landlocked countries has the largest area?',
        answers: [
            'Afghanistan',
            'Mongolia',
            'Mali',
            'Kazakhstan',
        ],
        solution: 3
    },

    {
        question: 'Which continent is home to the driest place on Earth?',
        answers: [
            'Antarctica',
            'South America',
            'Africa',
            'North America',
        ],
        solution: 0
    },

    {
        question: 'Before its name change in 2018, what was the Kingdom of eSwatini known as?',
        answers: [
            'Ethiopia',
            'Lesotho',
            'Mauritania',
            'Swaziland',
        ],
        solution: 3
    },

    {
        question: 'Which two countries were signatories of the Treaty of Tordesillas?',
        answers: [
            'Castile and Leon',
            'Portugal and Brazil',
            'Spain and Portugal',
            'Spain and Mexico',
        ],
        solution: 2
    },

    {
        question: 'How many member states does the EEU have?',
        answers: [
            '5',
            '26',
            '28',
            '9',
        ],
        solution: 0
    },
];




$(document).ready(function () {
    $("#start-button").click(startGame());
    $("#submit-button").click(getResults());
});

function loadQuestions() {
    for (var i = 0; i < questions.length; i++) {
        $("#quiz-page").append(questions[i].question + "<br>");
        for (var j = 0; j < questions[i].answers.length; j++) {
            $("#quiz-page").append("<label class='radio'><input value='" + j + "' type='radio' name='" + i + "'>" + questions[i].answers[j] + "</label>" + "<br><br>");
        }
    }
};

function loadSubmit() {
    $("#quiz-page").append('<button id="submit-button">Submit</button>');
};

function startGame() {
    $("#start-page").hide();
    quizTimeout = setTimeout(function () {
        alert("Time's up!");
    }, 90000);
    loadQuestions();
    loadSubmit();

};

function getResults() {
    $("#quiz-page").hide();
    for (i = 0; i < questions.length; i++) {
        if (questions[i].solution == playerAnswer[i]) {
            numCorrect++;
        }
        else if (playerAnswer[i] === null) {
            numUnanswered++;
        }
        else {
            numIncorrect++;
        }
    }
}