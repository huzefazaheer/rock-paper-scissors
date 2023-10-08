console.log("Javascript loaded!");

const compchoicetxt = document.querySelector(".compchoice");
const userchoicetxt = document.querySelector(".usrchoice");
const resulttxt = document.querySelector(".result");
const gamenotxt = document.querySelector(".gameno");

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getComputerChoice() {
  let compChoice = getRandomInt(3);
  let correctedCompChoice = "null";

  switch (compChoice) {
    case 0:
      correctedCompChoice = "rock";
      break;
    case 1:
      correctedCompChoice = "paper";
      break;
    case 2:
      correctedCompChoice = "scissor";
      break;
    default:
      console.log("An unexpected error has occured");
      break;
  }

  compchoicetxt.innerHTML = "You choose " + correctedCompChoice;
  return compChoice;
}

function getUserChoice(e) {
  let userChoice = "null";
  switch (e.target.id) {
    case "rock":
      userChoice = "rock";
      break;
    case "paper":
      userChoice = "paper";
      break;
    case "scissor":
      userChoice = "scissor";
      break;
  }
  userchoicetxt.innerHTML = "You choose " + userChoice;
  return userChoice;
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

  resulttxt.innerHTML = result.toUpperCase() + " wins that round";
  return result;
}

function game() {
  let userWon = 0;
  let compWon = 0;

  for (i = 0; i < 5; i++) {
    result = playRound(userChoice, getComputerChoice());
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

const buttons = document.querySelector(".buttons");

let i = 0;
buttons.addEventListener("click", (e) => {
  playRound(getUserChoice(e), getComputerChoice());
  i++;
  gamenotxt.innerHTML = i;
});
