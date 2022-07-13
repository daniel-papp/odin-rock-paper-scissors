console.log("Hello Game");

// ----- Function Declarations -----

// computerPlay: randomly generates a choice for the computer

function computerPlay() {
    const computerSelectionNumeric = Math.floor(Math.random() * 3);
    let computerSelection;
    switch(computerSelectionNumeric) {
        case 0 :
            computerSelection = 'rock';
            break;
        case 1 :
            computerSelection = 'paper';
            break;
        case 2 :
            computerSelection = 'scissors';
            break;
    }
    return computerSelection;
}

// playRound: compares the player's and the computer's choice and declares the winner

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    let winner;
    
    if (playerSelection === 'rock') {
        if (computerSelection === 'rock') {
            winner = 'Tie!';
        } else if (computerSelection === 'paper') {
            winner = 'You Lose! Paper beats Rock';
        } else if (computerSelection === 'scissors') {
            winner = 'You Win! Rock beats Scissors';
        } else {
            winner = 'Somebody cheated!'
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            winner = 'You Win! Paper beats Rock';
        } else if (computerSelection === 'paper') {
            winner = 'Tie!';
        } else if (computerSelection === 'scissors') {
            winner = 'You Lose! Scissors beats Paper';
        } else {
            winner = 'Somebody cheated!'
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            winner = 'You Lose! Rock beats Scissors';
        } else if (computerSelection === 'paper') {
            winner = 'You Win! Scissors beats Paper';
        } else if (computerSelection === 'scissors') {
            winner = 'Tie!';
        } else {
            winner = 'Somebody cheated!'
        }
    } else {
        winner = 'Somebody cheated!'
    }

    return winner;

}

// Testing the playRound function
// const playerSelection = 'rOck';
// const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));