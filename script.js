console.log("Javascript loaded!");

function getComputerChoice() {
  let compChoice = Math.floor(Math.random(3));

  switch (compChoice) {
    case 0:
      console.log("The computer choose Rock");
      break;
    case 1:
      console.log("The computer choose Paper");
      break;
    case 2:
      console.log("The computer choose Scissors");
      break;
    default:
      console.log("An unexpected error has occured");
      break;
  }
  return compChoice;
}

function getUserChoice() {
  let userChoice = prompt("Enter your choice");

  switch (userChoice.toLowerCase()) {
    case "rock":
      console.log("You choose Rock");
      return 0;
    case "paper":
      console.log("You choose Paper");
      return 1;
    case "scissors":
      console.log("You choose Scissors");
      return 2;
    default:
      console.log("invalid choice");
      getUserChoice();
  }
}

getUserChoice();
getComputerChoice();
