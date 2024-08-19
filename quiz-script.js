// This is the correct answer function list. The functions make the webpage interactive when the user gets
// the answer correct!

function correctAns() {
    var element = document.getElementById("correct");
    element.classList.toggle("correct");
    element.innerText = "Correct!";
    var score = document.getElementById("score");
    score.innerText++;
}

function correctAns2() {
    var element2 = document.getElementById("correct2");
    element2.classList.toggle("correct");
    element2.innerText = "Correct!";
    var score = document.getElementById("score");
    score.innerText++;
}

function correctAns3() {
    var element3 = document.getElementById("correct3");
    element3.classList.toggle("correct");
    element3.innerText = "Correct!";
    var score = document.getElementById("score");
    score.innerText++;
}

function correctAns4() {
    var element4 = document.getElementById("correct4");
    element4.classList.toggle("correct");
    element4.innerText = "Correct!";
    var score = document.getElementById("score");
    score.innerText++;
}

function correctAns5() {
    var element5 = document.getElementById("correct5");
    element5.classList.toggle("correct");
    element5.innerText = "Correct!";
    var score = document.getElementById("score");
    score.innerText++;
}

// This is the wrong answer function list. The functions make the webpage interactive when the user gets
// the answer wrong!

function wrongAns() {
    var Welement = document.getElementById("wrong");
    Welement.classList.toggle("wrong");
    Welement.innerText = "Wrong!";
    score.innerText--;
}

function wrongAns2() {
    var Welement2 = document.getElementById("wrong2");
    Welement2.classList.toggle("wrong");
    Welement2.innerText = "Wrong!";
    score.innerText--;
}

function wrongAns3() {
    var Welement3 = document.getElementById("wrong3");
    Welement3.classList.toggle("wrong");
    Welement3.innerText = "Wrong!";
    score.innerText--;
}

function wrongAns4() {
    var Welement = document.getElementById("wrong4");
    Welement.classList.toggle("wrong");
    Welement.innerText = "Wrong!";
    score.innerText--;
}

function wrongAns5() {
    var Welement = document.getElementById("wrong5");
    Welement.classList.toggle("wrong");
    Welement.innerText = "Wrong!";
    score.innerText--;
}

function wrongAns6() {
    var Welement6 = document.getElementById("wrong6");
    Welement6.classList.toggle("wrong");
    Welement6.innerText = "Wrong!";
    score.innerText--;
}

function wrongAns7() {
    var Welement7 = document.getElementById("wrong7");
    Welement7.classList.toggle("wrong");
    Welement7.innerText = "Wrong!";
    score.innerText--;
}

function wrongAns8() {
    var Welement8 = document.getElementById("wrong8");
    Welement8.classList.toggle("wrong");
    Welement8.innerText = "Wrong!";
    score.innerText--;
}

function wrongAns9() {
    var Welement9 = document.getElementById("wrong9");
    Welement9.classList.toggle("wrong");
    Welement9.innerText = "Wrong!";
    score.innerText--;
}

function wrongAns10() {
    var Welement10 = document.getElementById("wrong10");
    Welement10.classList.toggle("wrong");
    Welement10.innerText = "Wrong!";
    score.innerText--;
}

function wrongAns11() {
    var Welement11 = document.getElementById("wrong11");
    Welement11.classList.toggle("wrong");
    Welement11.innerText = "Wrong!";
    score.innerText--;
}

function wrongAns12() {
    var Welement12 = document.getElementById("wrong12");
    Welement12.classList.toggle("wrong");
    Welement12.innerText = "Wrong!";
    score.innerText--;
}

function wrongAns13() {
    var Welement13 = document.getElementById("wrong13");
    Welement13.classList.toggle("wrong");
    Welement13.innerText = "Wrong!";
    score.innerText--;
}

function wrongAns14() {
    var Welement14 = document.getElementById("wrong14");
    Welement14.classList.toggle("wrong");
    Welement14.innerText = "Wrong!";
    score.innerText--;
}

function wrongAns15() {
    var Welement15 = document.getElementById("wrong15");
    Welement15.classList.toggle("wrong");
    Welement15.innerText = "Wrong!";
    score.innerText--;
}

// function to turn on dark mode!

function darkItUp() {
    var body = document.body;
    body.classList.toggle("dark-mode");
}