let random;
let max = 9;

// make to computer random;y choose
function getComputerChoice () {
    let state;
    random = Math.floor(Math.random() * max);
    if (random >= 0 && random <= 2) {
        state = 'rock';
    } else if (random >= 3 && random <= 5) {
        state = 'paper';
    } else {
        state = 'scissors';
    }
    return state;  
}

//make the player selection case insensitive
function makeCaseInsensitive (arg) {
    let result = '';
    for (let i = 0; i < arg.length; i++) {
        result = result.concat(arg[i].toLowerCase());
    }
    return result;
}

function playRound(playerSelection, computerSelection) {
    let a = playerSelection; 
    let b = computerSelection;
    if (b == 'rock' && a == 'paper') {
        console.log(`you win, ${a} beats ${b}`);
    } else if (b == 'rock' && b == 'scissors') {
        console.log(`computer win, ${a} beats ${b}`);
    } else if (a == 'paper' && b == 'scissors') {
        console.log(`you win, ${a} beats ${b}`);
    } else if (a == 'rock' && b == 'paper') {
        console.log(`computer win, ${a} beats ${b}`);
    } else if (a == 'rock' && b == 'scissors') {
        console.log(`you win, ${a} beats ${b}`);
    } else if (a == 'paper' && b == 'scissors') {
        console.log(`computer win, ${a} beats ${b}`);
    }else {
        console.log(`It's a draw, try again`);
        playRound(playerSelection, computerSelection)
    }
}

let selection = "rock";
const playerSelection = makeCaseInsensitive(selection); 
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));


