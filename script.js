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
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            winner = 'You Win! Paper beats Rock';
        } else if (computerSelection === 'paper') {
            winner = 'Tie!';
        } else if (computerSelection === 'scissors') {
            winner = 'You Lose! Scissors beats Paper';
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            winner = 'You Lose! Rock beats Scissors';
        } else if (computerSelection === 'paper') {
            winner = 'You Win! Scissors beats Paper';
        } else if (computerSelection === 'scissors') {
            winner = 'Tie!';
        }
    } else {
        winner = 'Invalid choice, try again.'
    }

// Add display for round results

    const roundResultText = document.createElement('p');
    roundResultText.textContent = winner;
    const display = document.querySelector('#display');
    display.appendChild(roundResultText);
    return winner;

}

// game: plays 5 rounds and records the score

// function game() {
//     let playerScore = 0;
//     let computerScore = 0;
//     for (let i = 0; i < 5; i++) {
//         let playerSelection = prompt('Make your choice!');
//         let computerSelection = computerPlay();
//         let winnerMessage = playRound(playerSelection, computerSelection);
//         if (winnerMessage.includes('Win!')) {
//             playerScore++;
//         } else if (winnerMessage.includes('Lose!')) {
//             computerScore++;
//         } else if (winnerMessage.includes('Invalid')) {
//             i--;
//         }
//         console.log(`Round ${i + 1}`);
//         console.log(winnerMessage);
//         console.log(`Player: ${playerScore} - Computer: ${computerScore}`);
//     }
//     (playerScore > computerScore) ? console.log('Congratulations, you won the game!') : console.log('Unfortunately, you lost the game.');
//     console.log(`Final score: Player: ${playerScore} - Computer: ${computerScore}`);
// }

// Add a button to start the game

// const startButton = document.querySelector('#start-game');
// startButton.addEventListener('click', game);



// Add 3 buttons for player selection

const rockButton = document.querySelector('#rock-btn');
rockButton.addEventListener('click', () => keepScore('rock'));

const paperButton = document.querySelector('#paper-btn');
paperButton.addEventListener('click', () => keepScore('paper'));

const scissorsButton = document.querySelector('#scissors-btn');
scissorsButton.addEventListener('click', () => keepScore('scissors'));


// Add event listener to buttons for future scorekeeping

// const selectButtons = document.querySelectorAll('.button');
// selectButtons.forEach(button => button.addEventListener('click', keepScore));



// Function for keeping score

let playerScore = 0;
let computerScore = 0;
let currentRound = 0;
function keepScore(playerSelection) {
    // console.log(playRound(playerSelection, computerPlay()));
    let winnerMessage = playRound(playerSelection, computerPlay());
        if (winnerMessage.includes('Win!')) {
            playerScore++;
        } else if (winnerMessage.includes('Lose!')) {
            computerScore++;
        }
    // console.log(`Player: ${playerScore} - Computer: ${computerScore}`);
    const roundScoretText = document.createElement('p');
    roundScoretText.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
    const display = document.querySelector('#display');
    display.appendChild(roundScoretText);    
}

// Display round results and score on the DOM