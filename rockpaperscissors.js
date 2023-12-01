console.log('hi');

/* user makes a choice of rock, paper, or scissors */

//task #1: create const & function using arrow
const getUserChoice = userInput => {

  //task #2: make sure user's choice passes different capitalizations
  userInput = userInput.toLowerCase();

  // task #3: allow user to choose rock, paper, OR scissors. any other option prints an error in console
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput == 'bomb') {
    return userInput;
  } else {
    console.log('Error! Invalid choice. Please choose between rock, paper, or scissors.');
  }
};

// task #4: test the function
/* console.log(getUserChoice('paper'))
console.log(getUserChoice('rock'))
console.log(getUserChoice('scissors'))
console.log(getUserChoice('fork')) */

/* computer makes a choice of rock, paper, or scissors */

//task #5: create function for computer's choice
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch(randomNumber) {
    case 0:
      return 'rock';
    break;
    case 1:
      return 'paper';
    break;
    case 2:
      return 'scissors';
    break;
  }
};

//task #6: test the function
/* console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice()); */

/* time to determine the winner! */

//task #7: compare the 2 choices played & determines if the game is tied.
const determineWinner = (userChoice, computerChoice) => {
  if(userChoice === computerChoice)
  return 'The game is tied!';

  //task #8: determine winner if game isn't tied; rock vs paper
  if(userChoice === 'rock') {
    if(computerChoice === 'paper') {
      return 'The computer won!';
    } else {
      return 'Congrats, human! You won!';
    }
    }

    //task #9: determine winner if game isn't tied; user's choice is paper
    if(userChoice === 'paper') {
      if(computerChoice === 'scissors') {
        return 'The computer won!';
      } else {
        return 'Congrats, human! You won!';
      }
    }

    //task #10: determine winner if game isn't tied; user's choice is scissors
    if(userChoice === 'scissors') {
      if(computerChoice === 'rock') {
        return 'The computer won!';
      } else {
        return 'Congrats, human! You won!'
      }
    }

    //task #14: adding a cheat code
    if(userChoice === 'bomb') {
      return 'Congrats, human! You won! Good job finding the cheat code! ;)';
    }
}

//test #11: testing the function
/* console.log(determineWinner('paper', 'scissors')); // the computer won
console.log(determineWinner('paper', 'paper')); //tie game
console.log(determineWinner('rock', 'scissors')); // human wins!
console.log(determineWinner('paper', 'rock')); // human wins! */

/* starting the game & logging results */

//task #12: creating the game
const playGame = () => {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log('You chose: ' + userChoice);
  console.log('The computer chose: ' + computerChoice);

  //task #13: determine who won
  console.log(determineWinner(userChoice, computerChoice));
}

//task #13: play the game!
playGame();


