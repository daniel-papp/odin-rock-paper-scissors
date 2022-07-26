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
rockButton.addEventListener('click', () => playGame('rock'));

const paperButton = document.querySelector('#paper-btn');
paperButton.addEventListener('click', () => playGame('paper'));

const scissorsButton = document.querySelector('#scissors-btn');
scissorsButton.addEventListener('click', () => playGame('scissors'));


// Add event listener to buttons for future scorekeeping

// const selectButtons = document.querySelectorAll('.button');
// selectButtons.forEach(button => button.addEventListener('click', keepScore));



// Function for keeping score

// console.log(playRound(playerSelection, computerPlay()));
function keepScore(playerSelection) {
    currentRound++;
    let winnerMessage = playRound(playerSelection, computerPlay());
    if (winnerMessage.includes('Win!')) {
        playerScore++;
    } else if (winnerMessage.includes('Lose!')) {
            computerScore++;
        }
             
        // Display info on the DOM
        const display = document.querySelector('#display');
        const roundCountText = document.createElement('p');
        roundCountText.textContent = `Round ${currentRound}`;
        display.appendChild(roundCountText);
        const roundResultText = document.createElement('p');
        roundResultText.textContent = winnerMessage;
        display.appendChild(roundResultText);
        const roundScoretText = document.createElement('p');
        roundScoretText.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
        display.appendChild(roundScoretText);    
    }
    
    
    // Function for playing an entire game (final score after 5 rounds)
    
let playerScore = 0;
let computerScore = 0;
let currentRound = 0;
function playGame(playerSelection) {
    keepScore(playerSelection);
    if (currentRound === 5) {
        const display = document.querySelector('#display');
        const finalResultText = document.createElement('p');
        const finalScoreText = document.createElement('p');
        if (playerScore > computerScore) {
            finalResultText.textContent = 'Congratulations, you won the game!';
        } else if (playerScore < computerScore) {
            finalResultText.textContent = 'Unfortunately, you lost the game.';
        } else {
            finalResultText.textContent = 'It\'s a tie!';
        }
        display.appendChild(finalResultText);
        finalScoreText.textContent = `Final score: Player: ${playerScore} - Computer: ${computerScore}`;
        display.appendChild(finalScoreText);
    }
}




// commit message: Add round count and final results