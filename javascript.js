// console.log("Hello, World!");

const CHOICE_ROCK = "rock";
const CHOICE_PAPER = "paper";
const CHOICE_SCISSORS = "scissors";
const ROCK_ID = "1";
const PAPER_ID = "2";
const SCISSORS_ID = "3";
const PLAY_ROUNDS = 5;

function getComputerChoice() {
  let result = Math.random();
  if (result < 0.33) {
    return CHOICE_ROCK;
  } else if (result < 0.66) {
    return CHOICE_PAPER;
  } else {
    return CHOICE_SCISSORS;
  }
}

function getPlayerSelection(buttonID) {
  let playerSelection = "";
  switch (buttonID) {
    case ROCK_ID:
      playerSelection = CHOICE_ROCK;
      break;
    case PAPER_ID:
      playerSelection = CHOICE_PAPER;
      break;
    case SCISSORS_ID:
      playerSelection = CHOICE_SCISSORS;
      break;
    default:
      alert("Something wrong with getting player selections!");
  }
  return playerSelection;
}

// play a single round of game, return player's score
function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return 0;
  } else if (
    (playerSelection == CHOICE_ROCK && computerSelection == CHOICE_PAPER) ||
    (playerSelection == CHOICE_PAPER && computerSelection == CHOICE_SCISSORS) ||
    (playerSelection == CHOICE_SCISSORS && computerSelection == CHOICE_ROCK)
  ) {
    return -1;
  } else if (
    (playerSelection == CHOICE_ROCK && computerSelection == CHOICE_SCISSORS) ||
    (playerSelection == CHOICE_PAPER && computerSelection == CHOICE_ROCK) ||
    (playerSelection == CHOICE_SCISSORS && computerSelection == CHOICE_PAPER)
  ) {
    return 1;
  } else {
    alert("Inappropriate player selection!");
    return 0;
  }
}

let playerScore = 0;
let computerScore = 0;
let count = 0;

function initialization() {
  count = 0;
  playerScore = 0;
  computerScore = 0;
  rounds.textContent = "Rounds: " + count;
  scores.textContent =
    "You win: " + playerScore + "; You lose: " + computerScore;
  finalWinner.textContent = "";
}

function finalResult() {
  if (playerScore == 5) {
    finalWinner.textContent = "You Win the Game by 5 Scores!";
  } else {
    finalWinner.textContent = "You Lose the Game!";
  }
}

const startBtn = document.querySelector("#start");
startBtn.style.fontSize = "25px";
startBtn.style.margin = "10px";
startBtn.addEventListener("click", initialization);

const selectBtn = document.querySelectorAll(".player-selection");
selectBtn.forEach((button) => {
  button.style.fontSize = "50px";
  button.addEventListener("click", () => {
    if (playerScore == PLAY_ROUNDS || computerScore == PLAY_ROUNDS) {
      alert("Please start a new game!");
    } else {
      count++;
      rounds.textContent = "Rounds: " + count;
      let temp = playRound(getPlayerSelection(button.id), getComputerChoice());
      if (temp > 0) {
        playerScore++;
        scores.textContent =
          "You win: " + playerScore + "; You lose: " + computerScore;
      }
      if (temp < 0) {
        computerScore++;
        scores.textContent =
          "You win: " + playerScore + "; You lose: " + computerScore;
      }
      if (playerScore == PLAY_ROUNDS || computerScore == PLAY_ROUNDS) {
        finalResult();
      }
    }
  });
});

const resultContainer = document.querySelector("#resultContainer");

const resultPanel = document.createElement("div");
const panelTitle = document.createElement("h3");
panelTitle.textContent = "Results";
resultPanel.appendChild(panelTitle);

const rounds = document.createElement("div");
rounds.textContent = "Rounds: " + count;
resultPanel.appendChild(rounds);

const scores = document.createElement("div");
scores.textContent = "You win: " + playerScore + "; You lose: " + computerScore;
resultPanel.appendChild(scores);

const finalWinner = document.createElement("h3");
resultPanel.appendChild(finalWinner);

resultContainer.appendChild(resultPanel);
