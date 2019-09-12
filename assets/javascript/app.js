var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

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

function sub() {
    document.myform.submit();
}

function tableRow() {
    for (i in questions) {
        var currentQuestion = questions[i].question;
        var currentAnswers = questions[i].answers;

        $(".questions").append(currentQuestion + "<br> <br>");

        for (letter in currentAnswers) {
            $(".questions").append('<input type="radio" name=question-' + i + 'value=' + letter + '>' + letter + ": " + currentAnswers[letter]);
            // $(".questions").addClass("mx-");
            if (letter === "d") {
                $(".questions").append("<br> <br>");
            }
        };

        console.log(currentQuestion);
        console.log(currentAnswers);
    };
    $(".sub").append('<input type="button" onclick="sub()" value="submit form">');
};

tableRow(questions);

var time = 60;

var inter;


function timeRemaining() {
    clearInterval(inter);
    inter = setInterval(decrement, 1000);
};

function decrement() {

    time--;
    $(".countdown").html("Time Remaining: " + time);

    if (time === 0) {
        stop();
        alert("Time Up!");
    }
};

function stop() {
    clearInterval(inter);
};

timeRemaining();


function results() {

    var correctAnswers = [];
    for (i in questions) {
        // currentQuestion = questions[i].correctAnswer;
        correctAnswers.push(questions[i].correctAnswer);
    };

};

results();
