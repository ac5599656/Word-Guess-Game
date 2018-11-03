var wordList = ["javascript", "array", "loops", "functions", "methods"];
var acceptableGuesses = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var win = 0;
var lose = 0;
var strWin = "";
var strLose = "";
var tempStr = " ";
var errors = 0;
var leftGuess;
var totalErrors;
var chancesLeft = "";
var guessedLetters = [];
var seenLetters = [];
var concatStr = "";
var word;

var totalWin = document.getElementById("win");
var totalLose = document.getElementById("lose");
var randomWord = document.getElementById("word");
var remainGuess = document.getElementById("chance");
var targetDiv = document.getElementById("guess");




function generateWord() {
    word = wordList[Math.floor(Math.random() * wordList.length)];
    totalErrors = word.length;
    remainGuess.textContent = totalErrors.toString();
    generateUnderscore();
}

function reset() {

    guessedLetters = [];
    seenLetters = [];
    totalErrors = word.length;
    concatStr = "";
    appearStr = "";
}
function generateUnderscore() {

    console.log(word);
    var underScore = " ";
    for (var i = 0; i < word.length; i++) {
        seenLetters.push(false);
        underScore += " " + "_" + " ";
    }
    randomWord.textContent = underScore;
}

document.onkeyup = function (event) {

    var userInput = event.key;
    console.log(userInput);
    console.log(word);
    console.log(word.length);

    if (guessedLetters.indexOf(userInput) === -1 && word.split('').indexOf(userInput) === -1 && acceptableGuesses.includes(userInput)) {
        guessedLetters.push(userInput);
        totalErrors--;
    }

    if (guessedLetters.indexOf(userInput) === -1 && acceptableGuesses.includes(userInput)) {
        guessedLetters.push(userInput);
    }
    var tries = totalErrors.toString();
    remainGuess.textContent = tries;

    var appearStr = "";
    for (var i = 0; i < guessedLetters.length; i++) {
        console.log(guessedLetters);
        appearStr += (guessedLetters[i].toUpperCase()) + " ";
        concatStr = appearStr;
    }
    targetDiv.textContent = concatStr;
    checkGuess(userInput, appearStr, concatStr);

}

function checkGuess(userInput, appearStr) {
    var notPart = false;
    for (var i = 0; i < word.length; i++) {

        if (word[i] === userInput) {
            seenLetters[i] = true;
            notPart = true;
        }
    }

    console.log(errors);
    console.log(totalErrors);
    if (errors >= totalErrors) {
        console.log("insidefirst");
        lose++;
        setTimeout(function () {
            alert("You lose");
            reset();
            generateWord();

        }, 100)

    }
    strLose = lose.toString();
    totalLose.textContent = strLose;
    console.log(seenLetters);
    if (!seenLetters.includes(false)) {
        console.log("insidesecond");
        win++;
        setTimeout(function () {
            alert("You win");
            reset();
            generateWord();

        }, 100)


    }
    strWin = win.toString();
    totalWin.textContent = strWin;
    currentStatus();
}

function currentStatus() {
    var currentStr = " ";
    var currentLetter = " ";
    for (var i = 0; i < seenLetters.length; i++) {

        if (seenLetters[i] === true) {
            currentStr = (word.charAt(i).toUpperCase()) + " ";

        }
        if (seenLetters[i] === false) {
            currentStr = " " + "_" + " ";
        }
        currentLetter += (currentStr);
        console.log(currentLetter)
    }
    randomWord.textContent = currentLetter;


}
generateWord();
