
function start() {
    $(".countdown").html("<button class='start btn-lg btn-warning'> <h2>Start </h2> </button>");

    $(".start").on("click", function () {
        tableRow(questions)
    });
};

start();


const questions = [
    {
        question: "Which does not belong?",
        answers: {
            a: "dog",
            b: "cat",
            c: "parrot",
            d: "wolverine"
        },
        correctAnswer: "d"
    },
    {
        question: "Which does not belong?",
        answers: {
            a: "1",
            b: "2",
            c: "t",
            d: "6"
        },
        correctAnswer: "c"
    },
    {
        question: "Which does not belong?",
        answers: {
            a: "orange",
            b: "bird",
            c: "yellow",
            d: "red"
        },
        correctAnswer: "b"
    },
    {
        question: "Which does not belong?",
        answers: {
            a: "baker",
            b: "cake",
            c: "bread",
            d: "pie"
        },
        correctAnswer: "a"
    },
    {
        question: "Which does not belong?",
        answers: {
            a: "dog",
            b: "cat",
            c: "parrot",
            d: "wolverine"
        },
        correctAnswer: "d"
    },
    {
        question: "Which does not belong?",
        answers: {
            a: "1",
            b: "2",
            c: "t",
            d: "6"
        },
        correctAnswer: "c"
    },
    {
        question: "Which does not belong?",
        answers: {
            a: "orange",
            b: "bird",
            c: "yellow",
            d: "red"
        },
        correctAnswer: "b"
    },
    {
        question: "Which does not belong?",
        answers: {
            a: "baker",
            b: "cake",
            c: "bread",
            d: "pie"
        },
        correctAnswer: "a"
    },
    {
        question: "Which does not belong?",
        answers: {
            a: "dog",
            b: "cat",
            c: "parrot",
            d: "wolverine"
        },
        correctAnswer: "d"
    },
    {
        question: "Which does not belong?",
        answers: {
            a: "1",
            b: "2",
            c: "t",
            d: "6"
        },
        correctAnswer: "c"
    },
    {
        question: "Which does not belong?",
        answers: {
            a: "orange",
            b: "bird",
            c: "yellow",
            d: "red"
        },
        correctAnswer: "b"
    },
    {
        question: "Which does not belong?",
        answers: {
            a: "baker",
            b: "cake",
            c: "bread",
            d: "pie"
        },
        correctAnswer: "a"
    }
];

//// determine score
var correctAnswers = [];
var userAnswers = [];
var score = 0;


function answerKey() {

    var allAnswers = [];
    for (i in questions) {
        currentQuestion = (parseInt(i) + parseInt(1))
        correctAnswers.push(currentQuestion + ": " + questions[i].correctAnswer);
        allAnswers.push(questions[i].answers);
    };
    // console.log(correctAnswers);
    // console.log(allAnswers);

    for (i in questions) {
        if (questions[i]) {

        }
    };
    return correctAnswers;
};

function userKey() {
    console.log($("input"));

    $("input").on("focus", function () {
        userAnswers.push($("input").val());
    });
    // console.log(userAnswers);
    return userAnswers;
};

function userScore() {
    for (i in userAnswers) {
        if (userAnswers[i] === correctAnswers[i]) {
            score++;
        }
    }
    return score;
};


function results() {
    answerKey();
    userKey();
    userScore();

    $(".questions").html("<h2>Your score: " + score + "/10 </h2> <br></br>");
    $(".correct").html("Correct Answers <br></br>");
    $(".user").html("User Answers <br></br>");
    for (i in correctAnswers) {
        $(".user").append(userAnswers[i] + "<br></br>");
        $(".correct").append(correctAnswers[i] + "<br></br>");
        // if (userAnswers[i] !== correctAnswers[i]) {

        // }

    }

};

//// displaying questions and answers

function tableRow() {
    timeRemaining();
    for (i in questions) {
        var currentQuestion = questions[i].question;
        var currentAnswers = questions[i].answers;
        var currentQuestionNumber = (parseInt(i) + parseInt(1))

        $(".questions").append("<strong>" + currentQuestionNumber + ": " + currentQuestion + "</strong><br> <br>");

        for (letter in currentAnswers) {
            $(".answers").append('<input type="radio" name=question-' + i + 'value=' + letter + '>' + letter + ": " + currentAnswers[letter]);
            if (letter === "d") {
                $(".answers").append("<br> <br>");
            }
        };

        // console.log(currentQuestion);
        // console.log(currentAnswers);
    };
};

// tableRow();


/// timing functions 

var time = 10;
var inter;


function timeRemaining() {
    $(".countdown").html("");
    clearInterval(inter);
    inter = setInterval(decrement, 1000);
};

function decrement() {

    time--;
    $(".countdown").html("Time Remaining: " + time);

    if (time === 0) {
        stop();
        results();
    }
};

function stop() {
    clearInterval(inter);
};

