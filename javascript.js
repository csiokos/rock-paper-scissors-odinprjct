function getComputerChoice(){
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex]
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      return "Draw!";
    } else if (playerSelection === "rock") {
      if (computerSelection === "scissors") {
        return "winner";
      } else {
        return "loser";
      }
    } else if (playerSelection === "paper") {
      if (computerSelection === "rock") {
        return "winner";
      } else {
        return "loser";
      }
    } else if (playerSelection === "scissors") {
      if (computerSelection === "paper") {
        return "winner";
      } else {
        return "loser";
      }
    } else {
      return "Invalid input. Please enter Rock, Paper, or Scissors.";
    }
  }

  function game(){
    let scorePlayer = 0;
    let scoreComp = 0;
    for (let i=0; i<5; i++ ){
        let playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
        let computerSelection = (getComputerChoice()).toLowerCase();
        let result = playRound(playerSelection,computerSelection)
        if(result === 'winner'){
            scorePlayer= scorePlayer+1

        } else if(result==='loser'){
            scoreComp = scoreComp +1;
            
        }else{
            i=i-1;
        }
    }
    let final;
    if(scoreComp>scorePlayer){
        final = "You lose";
        return final;
    } else if(scoreComp<scorePlayer) {
        final = "You win"; 
        return final;

    } else {
        final = "tie";
        return final;
    }

  }


  console.log(game());
  
  
