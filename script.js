console.log("Javascript loaded!");

const compchoicetxt = document.querySelector(".compchoice");
const userchoicetxt = document.querySelector(".usrchoice");
const resulttxt = document.querySelector(".result");
const gamenotxt = document.querySelector(".gameno");
const gameresulttxt = document.querySelector(".gameresult");
const userscoretxt = document.querySelector(".userscore");
const compscoretxt = document.querySelector(".compscore");

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getComputerChoice() {
  let compChoice = getRandomInt(3);
  let correctedCompChoice = "";

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

  compchoicetxt.innerHTML = "Computer chose " + correctedCompChoice;
  return correctedCompChoice;
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
  userchoicetxt.innerHTML = "You chose " + userChoice;
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

let gamesPlayed = 0;
let userWon = 0;
let compWon = 0;
function game(e) {
  if (gamesPlayed < 5) {
    result = playRound(getUserChoice(e), getComputerChoice());
    if (result != "draw") {
      result == "usr" ? userWon++ : compWon++;
    }
    gameresulttxt.innerHTML = "You: " + userWon + " ~ Comp: " + compWon;
    userscoretxt.innerHTML = userWon;
    compscoretxt.innerHTML = compWon;
    gamesPlayed++;
    gamenotxt.innerHTML = gamesPlayed;
  } else {
    if (userWon == compWon) {
      gameresulttxt.innerHTML = "You both drew";
    } else {
      let winner = "";
      userWon > compWon
        ? (gameresulttxt.innerHTML = "You have won")
        : (gameresulttxt.innerHTML = "The browser has won");
    }
    gamesPlayed = 0;
    userWon = 0;
    compWon = 0;
  }
}

const buttons = document.querySelector(".buttons");

buttons.addEventListener("click", game);
