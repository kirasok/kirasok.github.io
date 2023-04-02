"use strict";

const startupScore = 20;
const startupHighscore = 0;
const startupMessage = "Start guessing...";
const startupGuess = "";
const newSecretNumber = () => {
  return Math.floor(Math.random() * 20) + 1;
};

function displayMassage(message) {
  document.querySelector(".message").textContent = message;
}

let score = startupScore;
let highscore = startupHighscore;
let secretNumber = newSecretNumber();
document.querySelector(".number").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMassage("No number!");
  } else if (guess === secretNumber) {
    displayMassage("Correct number!");
    if (score > highscore) {
      document.querySelector(".highscore").textContent = score;
      highscore = score;
    }
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
  } else if (guess > secretNumber) {
    score--;
    displayMassage("Too high!");
  } else if (guess < secretNumber) {
    score--;
    displayMassage("Too low!");
  }

  document.querySelector(".score").textContent = score;
  if (score <= 0) {
    displayMassage("You have lost the game!");
  }
});

document.querySelector(".again").addEventListener("click", () => {
  score = startupScore;
  secretNumber = newSecretNumber();
  displayMassage(startupMessage);
  document.querySelector(".guess").value = startupGuess;
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = secretNumber;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
