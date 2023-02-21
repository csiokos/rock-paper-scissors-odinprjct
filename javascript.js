let playerScore = 0;
let computerScore = 0;
const winningScore = 5;


function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

    
    if (playerSelection === computerSelection) {
        return "Draw!";
    } else if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
      playerScore++;
        return "You Win! Rock beats Scissors";
    } else {
      computerScore++;
      return "You Lose! Paper beats Rock";
    }
    } else if (playerSelection === "paper") {
      if (computerSelection === "rock") {
        playerScore++;
        return "You Win! Paper beats Rock";
      } else {
        computerScore++;
          return "You Lose! Scissors beats Paper";
      }
    } else if (playerSelection === "scissors") {
      if (computerSelection === "paper") {
        playerScore++;
        return "You Win! Scissors beats Paper";
      } else {
        computerScore++;
        return "You Lose! Rock beats Scissors";
          }
    } else {
          return "Invalid input. Please enter Rock, Paper, or Scissors.";
    }
}

function updateScore() {
  const scoreDiv = document.querySelector('#score');
  scoreDiv.innerHTML = `Player: ${playerScore} - Computer: ${computerScore}`;

    if (playerScore === winningScore || computerScore === winningScore) {
        const winnerDiv = document.querySelector('#winner');
        const playAgainButton = document.querySelector('#play-again-button');
        if (playerScore > computerScore) {
          winnerDiv.innerHTML = "You Win!";
        } else {
          winnerDiv.innerHTML = "You Lose!";
        }
        playAgainButton.style.display = 'block';
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
    }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  const resultDiv = document.querySelector('#result');
  const winnerDiv = document.querySelector('#winner');
  const playAgainButton = document.querySelector('#play-again-button');
  resultDiv.innerHTML = '';
  winnerDiv.innerHTML = '';
  playAgainButton.style.display = 'none';
  rockButton.disabled = false;
  paperButton.disabled = false;
  scissorsButton.disabled = false;
}

const rockButton = document.querySelector('#rock-button');
const paperButton = document.querySelector('#paper-button');
const scissorsButton = document.querySelector('#scissors-button');
const playAgainButton = document.querySelector('#play-again-button');

rockButton.addEventListener('click', () => {
  const result = playRound('rock', getComputerChoice());
  updateScore();
  const resultDiv = document.querySelector('#result');
  resultDiv.innerHTML = result;
});

paperButton.addEventListener('click', () => {
  const result = playRound('paper', getComputerChoice());
  updateScore();
  const resultDiv = document.querySelector('#result');
  resultDiv.innerHTML = result;
});

scissorsButton.addEventListener('click', () => {
  const result = playRound('scissors', getComputerChoice());
  updateScore();
  const resultDiv = document.querySelector('#result');
  resultDiv.innerHTML = result;
});

playAgainButton.addEventListener('click', () => {
  resetGame();
});

//den exo xrisimopoiisei tin teleutaia protasi tou chatgpt