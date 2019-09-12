var questions = [
    {
        question: 'What is the capital of Mongolia?',
        answers: [
            { answer: 'A. Mörön', value: false },
            { answer: 'B. Kuala Lumpur', value: false },
            { answer: 'C. Ulaanbaatar', value: true },
            { answer: 'D. Moscow', value: false },
        ]
    },

    {
        question: 'Which of these cities was NOT ranked as an Alpha+ Global City by the Globalization and World Cities Research Network in 2018?',
        answers: [
            { answer: 'A. Hong Kong', value: false },
            { answer: 'B. London', value: true },
            { answer: 'C. Dubai', value: false },
            { answer: 'D. Tokyo', value: false },
        ]
    },

    {
        question: 'Which of these countries is a member of both the Schengen Zone AND the EU?',
        answers: [
            { answer: 'A. Czech Republic', value: true },
            { answer: 'B. United Kingdom', value: false },
            { answer: 'C. Norway', value: false },
            { answer: 'D. Turkey', value: false },
        ]
    },

    {
        question: 'Which of the following landlocked countries has the largest area?',
        answers: [
            { answer: 'A. Afghanistan', value: false },
            { answer: 'B. Mongolia', value: false },
            { answer: 'C. Mali', value: false },
            { answer: 'D. Kazakhstan', value: true },
        ]
    },

    {
        question: 'Which continent is home to the driest place on Earth?',
        answers: [
            { answer: 'A. Antarctica', value: true },
            { answer: 'B. South America', value: false },
            { answer: 'C. Africa', value: false },
            { answer: 'D. North America', value: false },
        ]
    },

    {
        question: 'Before its name change in 2018, what was the Kingdom of eSwatini known as?',
        answers: [
            { answer: 'A. Ethiopia', value: false },
            { answer: 'B. Lesotho', value: false },
            { answer: 'C. Mauritania', value: false },
            { answer: 'D. Swaziland', value: true },
        ]
    },

    {
        question: 'Which two countries were signatories of the Treaty of Tordesillas?',
        answers: [
            { answer: 'A. Castile and Leon', value: false },
            { answer: 'B. Portugal and Brazil', value: false },
            { answer: 'C. Spain and Portugal', value: true },
            { answer: 'B. Spain and Mexico', value: false },
        ]
    },

    {
        question: 'How many member states does the EEU have?',
        answers: [
            { answer: 'A. 5', value: true },
            { answer: 'B. 26', value: false },
            { answer: 'C. 28', value: false },
            { answer: 'D. 9', value: false },
        ]
    },
];

var wrongCounter = 0;
var correctCounter = 0;
var unansweredCounter = 0;
var clock;
var quizTimeout;
var answer;

function loadQuestions() {
    console.log("Load question function called");
    // $("#question1").html(questions[0].question);
    for (var i = 0; i < questions.length; i++) {
        for (letter in questions[i].answers) {

            // ...add an html radio button
            answers.push(
                '<label>'
                + '<input type="radio" name="question' + i + '" value="' + letter + '">'
                + letter + ': '
                + questions[i].answers[letter]
                + '</label>'
            );
        }

        // add this question and its answers to the output
        output.push(
            '<div class="question">' + questions[i].question + '</div>'
            + '<div class="answers">' + answers.join('') + '</div>'
        );
    }

    // finally combine our output list into one string of html and put it on the page
    quizContainer.innerHTML = output.join('');
}

    

    



function startGame() {
    $('#start-page').css('display', 'none');
    // $('#game-page').css('visibility', 'visible');
    quizTimeout = setTimeout(function () {
        alert("Time's up!");
    }, 90000); loadQuestions();

};


$(document).ready(function () {
    $('#startbutton').click(function () {
        startGame();
    });

})