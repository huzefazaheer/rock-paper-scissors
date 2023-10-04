console.log("Javascript loaded!");

function getComputerChoice() {
  let choice = Math.floor(Math.random(3));
  console.log(choice);

  switch (choice) {
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
  return choice;
}

getComputerChoice();
