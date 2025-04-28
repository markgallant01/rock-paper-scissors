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
