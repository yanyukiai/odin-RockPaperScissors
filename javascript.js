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

// play a single round of game, return player's score
function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    console.log("It's a tie!");
    return 0;
  } else if (
    (playerSelection == CHOICE_ROCK && computerSelection == CHOICE_PAPER) ||
    (playerSelection == CHOICE_PAPER && computerSelection == CHOICE_SCISSORS) ||
    (playerSelection == CHOICE_SCISSORS && computerSelection == CHOICE_ROCK)
  ) {
    console.log(`You lose, ${computerSelection} beats ${playerSelection}!`);
    return -1;
  } else if (
    (playerSelection == CHOICE_ROCK && computerSelection == CHOICE_SCISSORS) ||
    (playerSelection == CHOICE_PAPER && computerSelection == CHOICE_ROCK) ||
    (playerSelection == CHOICE_SCISSORS && computerSelection == CHOICE_PAPER)
  ) {
    console.log(`You win, ${playerSelection} beats ${computerSelection}!`);
    return 1;
  } else {
    console.log("Inappropriate player selection!");
    return 0;
  }
}

function getPlayerSelection() {
  let playerSelection = prompt(
    "Please input your choice among rock, paper and scissors: "
  );
  playerSelection = playerSelection.toLowerCase();
  return playerSelection;
}

// const playerSelection = "RoCk";
// let playerSelection = getPlayerSelection();
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));

function game(playRounds) {
  let playerScore = 0;
  for (let i = 0; i < playRounds; i++) {
    playerScore += playRound(getPlayerSelection(), getComputerChoice());
  }
  if (playerScore > 0) {
    console.log("You win the game!");
  } else if (playerScore < 0) {
    console.log("You lose the game!");
  } else {
    console.log("It's a tie!");
  }
  return playerScore;
}

console.log("Your score is " + game(5));
