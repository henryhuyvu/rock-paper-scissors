let choices = ['Rock','Paper','Scissors']

function getComputerChoice() {
    computerSelection = choices[Math.floor(Math.random()*3)].toLowerCase();
    console.log(`Computer chooses ${computerSelection}`);
    return computerSelection;
}

function playerSelectionPrompt() {
    playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();
    console.log(`You chose ${playerSelection}`)
    return playerSelection;
}

function capitalizeWord(word) {
    let firstLetter = word.charAt(0);
    let firstLetterCap = firstLetter.toUpperCase();
    let capitalizedWord = firstLetterCap + word.slice(1);
    return capitalizedWord
}


let playerWins = 0;
let computerWins = 0;
function playRound(playerSelection,computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'paper' || playerSelection == 'paper' && computerSelection == 'scissors' || playerSelection == 'scissors' && computerSelection == 'rock') {
        console.log(`You lose. ${capitalizeWord(computerSelection)} beats ${capitalizeWord(playerSelection)}`);
        computerWins++;
    } else if (playerSelection == computerSelection) {
        console.log(`It's a draw.`);
    } else {
        console.log(`You win! ${capitalizeWord(playerSelection)} beats ${capitalizeWord(computerSelection)}`);
        playerWins++;
    }
}


function game() {
    for (let gamesPlayed = 0; gamesPlayed < 5; gamesPlayed++){
        playRound(playerSelectionPrompt(),getComputerChoice())
    }
}

game()
if (playerWins > computerWins) {
    console.log(`Congratulations! You beat the computer ${playerWins} to ${computerWins}`)
} else {
    console.log(`Sorry! You the computer beat you ${computerWins} to ${playerWins}`)
}