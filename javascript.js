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

function getHumanChoice() {
  return window.prompt("Enter your choice [rock, paper, scissors]: ");
}

let humanScore = 0;
let computerScore = 0;

function playRound(computerChoice, humanChoice) {
  console.log(`You chose... ${humanChoice}`);
  console.log(`Computer chose... ${computerChoice}`);

  if (computerChoice === "rock") {
    if (humanChoice === "paper") {
      console.log("You win! Paper covers rock!");
      humanScore++;
    }
    else if (humanChoice === "scissors") {
      console.log("You lose! Rock smashes scissors!");
      computerScore++;
    }
    else {
      console.log("Tie! Go another round!");
    }
  }
  else if (computerChoice === "paper") {
    if (humanChoice === "rock") {
      console.log("You lose! Paper covers rock!");
      computerScore++;
    } 
    else if (humanChoice === "scissors") {
      console.log("You win! Scissors cuts paper!");
      humanScore++;
    }
    else {
      console.log("Tie! Go another round!");
    }
  }
  else if (computerChoice === "scissors") {
    if (humanChoice === "rock") {
      console.log("You win! Rock smashes scissors!");
      humanScore++;
    }
    else if (humanChoice === "paper") {
      console.log("You lose! Scissors cuts paper!");
      computerScore++;
    }
    else {
      console.log("Tie! Go another round!");
    }
  }
}

function playGame() {
  while (humanScore < 5 && computerScore < 5) {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice().toLowerCase();

    playRound(computerChoice, humanChoice);
  }

  console.log(`Computer's score... ${computerScore}`);
  console.log(`Your score... ${humanScore}`);

  if (computerScore < humanScore) {
    console.log("You win! Good job!");
  }
  else if (computerScore > humanScore) {
    console.log("You lose! Better luck next time!");
  }
}

playGame();
