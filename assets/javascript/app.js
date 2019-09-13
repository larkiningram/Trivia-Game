
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
        answers: ["dog", "cat", "parrot", "wolverine"],
        solution: 3
    },
    {
        question: "Which does not belong?",
        answers: ["1", "2", "t", "6"],
        solution: 2
    },
    {
        question: "Which does not belong?",
        answers: ["orange", "bird", "yellow", "red"],
        solution: 1
    },
    {
        question: "Which does not belong?",
        answers: ["baker", "cake", "bread", "pie"],
        solution: 0
    },
    {
        question: "Which does not belong?",
        answers: ["dog", "cat", "parrot", "wolverine"],
        solution: 3
    },
    {
        question: "Which does not belong?",
        answers: ["dog", "cat", "parrot", "wolverine"],
        solution: 3
    },
    {
        question: "Which does not belong?",
        answers: ["1", "2", "t", "6"],
        solution: 2
    },
    {
        question: "Which does not belong?",
        answers: ["orange", "bird", "yellow", "red"],
        solution: 1
    },
    {
        question: "Which does not belong?",
        answers: ["baker", "cake", "bread", "pie"],
        solution: 0
    },
    {
        question: "Which does not belong?",
        answers: ["dog", "cat", "parrot", "wolverine"],
        solution: 3
    }
];

//// determine score
var correctAnswers = [];
var userAnswers = [];
var score = 0;

for (var i = 0; i < questions.length; i++) {
    userAnswers[i] = null;
};

function answerKey() {
    for (i in questions) {
        var right = questions[i].solution;
        currentQuestion = (parseInt(i) + parseInt(1))
        correctAnswers.push(currentQuestion + ": " + questions[i].answers[right]);
    };

    return correctAnswers;
};


function userKey() {
    for (i in questions) {   
        currentQuestion = (parseInt(i) + parseInt(1))
        userIndex = ($("input[name=" + currentQuestion + "]:checked").val());
        userAnswers[i] =(currentQuestion + ": " + questions[i].answers[userIndex]);
        console.log(userAnswers);
    }

    // console.log(userAnswers);
    return userAnswers;
};

function userScore() {
    for (i in userAnswers) {
        if (userAnswers[i] === correctAnswers[i]) {
            score++;
        }
        else if (userAnswers[i] === null) {
            userAnswers[i] = "You forgot this one!";
        }
    }
    return score;
};


function results() {
    answerKey();
    userKey();
    userScore();
    var num = parseInt(questions.length);

    $(".questions").html("<h2>Your score: " + score + "/" + num + "</h2> <br></br>");
    $(".correct").html("Correct Answers <br></br>");
    $(".user").html("User Answers <br></br>");
    for (i in correctAnswers) {
        $(".user").append(userAnswers[i] + "<br></br>");
        $(".correct").append(correctAnswers[i] + "<br></br>");

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
            $(".answers").append('<input id="q" type="radio" name=' + currentQuestionNumber + ' value=' + letter + '> \t' + currentAnswers[letter] + "\t");
            if (letter === "3") {
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

