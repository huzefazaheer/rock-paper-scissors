console.log("Javascript loaded!");

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getComputerChoice() {
  let compChoice = getRandomInt(3);

  switch (compChoice) {
    case 0:
      console.log("The computer chooses Rock");
      return "rock";
    case 1:
      console.log("The computer chooses Paper");
      return "paper";
    case 2:
      console.log("The computer chooses Scissors");
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

  console.log(result.toUpperCase() + " wins that round");
  return result;
}

function game() {
  let userWon = 0;
  let compWon = 0;

  for (i = 0; i < 5; i++) {
    result = playRound(getUserChoice(), getComputerChoice());
    if (result != "draw") {
      result == "usr" ? userWon++ : compWon++;
    }
  }

  if (userWon == compWon) {
    console.log("You both drew");
  } else {
    userWon > compWon
      ? console.log("You have won")
      : console.log("The browser has won");
  }
}

game();
