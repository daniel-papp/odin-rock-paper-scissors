console.log("Let's play a game of Rock Paper Scissors!");

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
            winner = 'Invalid choice, try again.'
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            winner = 'You Win! Paper beats Rock';
        } else if (computerSelection === 'paper') {
            winner = 'Tie!';
        } else if (computerSelection === 'scissors') {
            winner = 'You Lose! Scissors beats Paper';
        } else {
            winner = 'Invalid choice, try again.'
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            winner = 'You Lose! Rock beats Scissors';
        } else if (computerSelection === 'paper') {
            winner = 'You Win! Scissors beats Paper';
        } else if (computerSelection === 'scissors') {
            winner = 'Tie!';
        } else {
            winner = 'Invalid choice, try again.'
        }
    } else {
        winner = 'Invalid choice, try again.'
    }

    return winner;

}

// game: plays 5 rounds and records the score

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Make your choice!');
        let computerSelection = computerPlay();
        let winnerMessage = playRound(playerSelection, computerSelection);
        if (winnerMessage.includes('Win!')) {
            playerScore++;
        } else if (winnerMessage.includes('Lose!')) {
            computerScore++;
        } else if (winnerMessage.includes('Invalid')) {
            i--;
        }
        console.log(`Round ${i + 1}`);
        console.log(winnerMessage);
        console.log(`Player: ${playerScore} - Computer: ${computerScore}`);
    }
    (playerScore > computerScore) ? console.log('Congratulations, you won the game!') : console.log('Unfortunately, you lost the game.');
    console.log(`Final score: Player: ${playerScore} - Computer: ${computerScore}`);
}


game(); 