function getComputerChoice(){
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex]
}

let playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
let computerSelection = (getComputerChoice()).toLowerCase();
console.log(computerSelection);
console.log(playerSelection);

console.log(playRound(playerSelection,computerSelection));

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      return "Draw!";
    } else if (playerSelection === "rock") {
      if (computerSelection === "scissors") {
        return "You Win! Rock beats Scissors";
      } else {
        return "You Lose! Paper beats Rock";
      }
    } else if (playerSelection === "paper") {
      if (computerSelection === "rock") {
        return "You Win! Paper beats Rock";
      } else {
        return "You Lose! Scissors beats Paper";
      }
    } else if (playerSelection === "scissors") {
      if (computerSelection === "paper") {
        return "You Win! Scissors beats Paper";
      } else {
        return "You Lose! Rock beats Scissors";
      }
    } else {
      return "Invalid input. Please enter Rock, Paper, or Scissors.";
    }
  }

  
  
