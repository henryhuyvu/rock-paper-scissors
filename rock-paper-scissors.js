let choices = ['Rock','Paper','Scissors']


let computerSelection = '';
function getComputerChoice() {
    computerSelection = choices[Math.floor(Math.random()*3)].toLowerCase();
    console.log(`Computer chooses ${computerSelection}`);
}

getComputerChoice()

let playerSelection;
function playerSelectionPrompt() {
    playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();
    console.log(`Player chooses ${playerSelection}`);
}

playerSelectionPrompt()

function capitalizeWord(word) {
    let firstLetter = word.charAt(0);
    let firstLetterCap = firstLetter.toUpperCase();
    let capitalizedWord = firstLetterCap + word.slice(1);
    return capitalizedWord
}

function playRound(playerSelection,computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'paper' || playerSelection == 'paper' && computerSelection == 'scissors' || playerSelection == 'scissors' && computerSelection == 'rock') {
        console.log(`You lose. ${capitalizeWord(computerSelection)} beats ${capitalizeWord(playerSelection)}`)
    } else if (playerSelection == computerSelection) {
        console.log(`It's a draw.`)
    } else console.log(`You win! ${capitalizeWord(playerSelection)} beats ${capitalizeWord(computerSelection)}`)
}

playRound(playerSelection,computerSelection)