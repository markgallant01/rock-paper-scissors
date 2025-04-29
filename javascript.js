function getComputerChoice() {
  // return random number in range [0..2]
  const choice = Math.floor(Math.random() * 3);

  if (choice === 0) {
    return "rock";
  }
  else if (choice === 1) {
    return "paper";
  }
  else if (choice === 2) {
    return "scissors";
  }
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerChoice) {
  const computerChoice = getComputerChoice();

  // clear info section
  const info = document.querySelector(".info");
  while (info.firstChild) {
    info.removeChild(info.firstChild);
  }

  // display both choices
  const playerChoiceP = document.createElement("p");
  playerChoiceP.textContent = `You chose... ${playerChoice}!`;

  const computerChoiceP = document.createElement("p");
  computerChoiceP.textContent = `Computer chose... ${computerChoice}!`;

  info.appendChild(playerChoiceP);
  info.appendChild(computerChoiceP);

  const outcomeP = document.createElement("p");
  if (computerChoice === "rock") {
    if (playerChoice === "paper") {
      outcomeP.textContent = "You win! Paper covers rock!";
      playerScore++;
    }
    else if (playerChoice === "scissors") {
      outcomeP.textContent = "You lose! Rock smashes scissors!";
      computerScore++;
    }
    else {
      outcomeP.textContent = "Tie! Go another round!";
    }
  }
  else if (computerChoice === "paper") {
    if (playerChoice === "rock") {
      outcomeP.textContent = "You lose! Paper covers rock!";
      computerScore++;
    } 
    else if (playerChoice === "scissors") {
      outcomeP.textContent = "You win! Scissors cuts paper!";
      playerScore++;
    }
    else {
      outcomeP.textContent = "Tie! Go another round!";
    }
  }
  else if (computerChoice === "scissors") {
    if (playerChoice === "rock") {
      outcomeP.textContent = "You win! Rock smashes scissors!";
      playerScore++;
    }
    else if (playerChoice === "paper") {
      outcomeP.textContent = "You lose! Scissors cuts paper!";
      computerScore++;
    }
    else {
      outcomeP.textContent = "Tie! Go another round!";
    }
  }

  // display outcome
  info.appendChild(outcomeP);

  // update score displays
  const playerScoreSpan = document.querySelector("#player-score");
  playerScoreSpan.textContent = `${playerScore}`;

  const computerScoreSpan = document.querySelector("#computer-score");
  computerScoreSpan.textContent = `${computerScore}`;

  // check for game over
  if (computerScore === 5 || playerScore === 5) {
    gameOver();
  }
}

function gameOver() {
  // wipe display
  const info = document.querySelector(".info");
  while (info.firstChild) {
    info.removeChild(info.firstChild);
  }

  if (computerScore < playerScore) {
    info.textContent = "You win! Good job!";
  }
  else if (computerScore > playerScore) {
    info.textContent = "You lose! Better luck next time!";
  }
}

function chooseRock() {
  playRound("rock");
}

function choosePaper() {
  playRound("paper");
}

function chooseScissors() {
  playRound("scissors");
}

const rockBtn = document.querySelector("#rock-btn");
rockBtn.addEventListener("click", () => chooseRock());

const paperBtn = document.querySelector("#paper-btn");
paperBtn.addEventListener("click", () => choosePaper());

const scissorsBtn = document.querySelector("#scissors-btn");
scissorsBtn.addEventListener("click", () => chooseScissors());
