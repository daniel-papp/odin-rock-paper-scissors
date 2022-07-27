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
    }

    return winner;
}

// keepScore: calls the playRound function and updates the score based on the result
// it also outputs the current round, result, and score to the DOM

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

    // const existingText = document.querySelector('#display p');
    // console.log(existingText);

    while (display.firstChild) {
        display.removeChild(display.lastChild);
    }

    const roundCountText = document.createElement('p');
    roundCountText.textContent = `Round ${currentRound}`;
    display.appendChild(roundCountText);

    const roundResultText = document.createElement('p');
    roundResultText.textContent = winnerMessage;
    display.appendChild(roundResultText);

    const roundScoreText = document.createElement('p');
    roundScoreText.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
    display.appendChild(roundScoreText);    
}

// playGame: calls the keepScore function and displays the final result of the game after 5 rounds
    
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

        while (display.firstChild) {
            display.removeChild(display.lastChild);
        }

        display.appendChild(finalResultText);
        finalScoreText.textContent = `Final score: Player: ${playerScore} - Computer: ${computerScore}`;
        display.appendChild(finalScoreText);

        displayNewGame();
    }
}

// startGame: displays the player selection buttons

function startGame() {
    const buttons = document.querySelector('div.buttons');

    const rockButton = document.createElement('button');
    rockButton.setAttribute('id', 'rock-btn');
    rockButton.classList.add('button');
    rockButton.textContent = 'ROCK';
    buttons.appendChild(rockButton);
    rockButton.addEventListener('click', () => playGame('rock'));

    const paperButton = document.createElement('button');
    paperButton.setAttribute('id', 'paper-btn');
    paperButton.classList.add('button');
    paperButton.textContent = 'PAPER';
    buttons.appendChild(paperButton);
    paperButton.addEventListener('click', () => playGame('paper'));

    const scissorsButton = document.createElement('button');
    scissorsButton.setAttribute('id', 'scissors-btn');
    scissorsButton.classList.add('button');
    scissorsButton.textContent = 'SCISSORS';
    buttons.appendChild(scissorsButton);
    scissorsButton.addEventListener('click', () => playGame('scissors'));

    document.getElementById('start-game-btn').remove();
}

// displayNewGame: clears the selection buttons and creates a new game button

function displayNewGame() {
    const buttons = document.querySelector('div.buttons');
    while (buttons.firstChild) {
        buttons.removeChild(buttons.lastChild);
    }
    const newGameButton = document.createElement('button');
    newGameButton.setAttribute('id', 'new-game-btn');
    newGameButton.textContent = 'New Game';
    buttons.appendChild(newGameButton);
}


let playerScore = 0;
let computerScore = 0;
let currentRound = 0;

// ----- DOM Events -----

const startGameButton = document.querySelector('#start-game-btn');
startGameButton.addEventListener('click', () => startGame());