console.log("Javascript loaded!");

function getComputerChoice() {
  let compChoice = Math.floor(Math.random(3));

  switch (compChoice) {
    case 0:
      console.log("The computer choose Rock");
      return "rock";
    case 1:
      console.log("The computer choose Paper");
      return "paper";
    case 2:
      console.log("The computer choose Scissors");
      return "scissor";
    default:
      console.log("An unexpected error has occured");
      break;
  }
}

function getUserChoice() {
  let userChoice = prompt("Enter your choice");
  correctedChoice = userChoice.toLowerCase();
  switch (correctedChoice) {
    case "rock":
      console.log("You choose Rock");
      break;
    case "paper":
      console.log("You choose Paper");
      break;
    case "scissor":
      console.log("You choose Scissors");
      break;
    default:
      console.log("invalid choice");
      getUserChoice();
  }
  return correctedChoice;
}

function playRound(playerSel, compSel) {
  let result = "null";

  if (playerSel === compSel) {
    result = "draw";
  } else if (playerSel === "rock") {
    compSel === "paper" ? (result = "comp") : (result = "usr");
  } else if (playerSel === "paper") {
    compSel === "scissor" ? (result = "comp") : (result = "usr");
  } else if (playerSel === "scissor") {
    compSel === "rock" ? (result = "comp") : (result = "usr");
  }

  console.log(result);
}

playRound(getUserChoice(), getComputerChoice());
