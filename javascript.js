// console.log("Hello, World!");

const CHOICE_ROCK = "rock";
const CHOICE_PAPER = "paper";
const CHOICE_SCISSORS = "scissors";

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

// console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection == computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection == CHOICE_ROCK && computerSelection == CHOICE_PAPER) ||
    (playerSelection == CHOICE_PAPER && computerSelection == CHOICE_SCISSORS) ||
    (playerSelection == CHOICE_SCISSORS && computerSelection == CHOICE_ROCK)
  ) {
    return `You lose, ${computerSelection} beats ${playerSelection}!`;
  } else if (
    (playerSelection == CHOICE_ROCK && computerSelection == CHOICE_SCISSORS) ||
    (playerSelection == CHOICE_PAPER && computerSelection == CHOICE_ROCK) ||
    (playerSelection == CHOICE_SCISSORS && computerSelection == CHOICE_PAPER)
  ) {
    return `You win, ${playerSelection} beats ${computerSelection}!`;
  } else {
    return "Inappropriate player selection!";
  }
}

// const playerSelection = "RoCk";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));
