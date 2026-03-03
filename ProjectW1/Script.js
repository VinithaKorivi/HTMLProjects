let randomNumber = Math.floor(Math.random() * 100) + 1;
let attemptsLeft = 5;
let score = 0;

function checkGuess() {

    let userGuess = Number(document.getElementById("guessInput").value);
    let message = document.getElementById("message");
    let attempts = document.getElementById("attempts");
    let scoreDisplay = document.getElementById("score");

    if (!userGuess) {
        message.innerText = "⚠ Please enter a number!";
        return;
    }

    if (attemptsLeft > 0) {

        if (userGuess === randomNumber) {
            message.innerText = "✅ Correct! You guessed it!";
            score += attemptsLeft * 10;
            scoreDisplay.innerText = score;
            attemptsLeft = 0;
        } 
        else if (userGuess > randomNumber) {
            message.innerText = "📉 Too High!";
            attemptsLeft--;
        } 
        else {
            message.innerText = "📈 Too Low!";
            attemptsLeft--;
        }

        attempts.innerText = attemptsLeft;

        if (attemptsLeft === 0 && userGuess !== randomNumber) {
            message.innerText = "❌ Game Over! Number was " + randomNumber;
        }
    }
}

function restartGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attemptsLeft = 5;
    document.getElementById("attempts").innerText = attemptsLeft;
    document.getElementById("message").innerText = "";
    document.getElementById("guessInput").value = "";
}