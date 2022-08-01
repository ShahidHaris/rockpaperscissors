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

function selection () {
    // let params = prompt(`Select either of the three: 'rock' 'paper' or 'scissors'`);
    let  verify = makeCaseInsensitive(params);
    let state;
    if (verify == 'rock' || verify == 'paper' || verify == 'scissors') {
        state = verify;
    }   else {
        alert(`You've entered a wrong entry`);
        selection();
    }
    return state;
} 

// Make the selection case insensitive
function makeCaseInsensitive (arg) {
    let result = '';
    for (let i = 0; i < arg.length; i++) {
        result = result.concat(arg[i].toLowerCase());
    }
    return result;
}

function playRound(a, b) {
    let state;
    if (b == 'rock' && a == 'paper') {
        state  = `you`;
    } else if (b == 'rock' && a == 'scissors') {
        state  = `computer`;
    } else if (b == 'paper' && a == 'scissors') {
        state  = `you`;
    } else if (a == 'rock' && b == 'paper') {
        state  = `computer`;
    } else if (a == 'rock' && b == 'scissors') {
        state  = `you`;
    } else if (a == 'paper' && b == 'scissors') {
        state  = `computer`;
    } else {
        return playRound(selection(), getComputerChoice());
    }
    return state;
}

let playerSelection = selection();
let computerSelection = getComputerChoice();

/* function game () {
    let you = 0; 
    let computer = 0;
    for (let i = 0; i < 5; i++) {
    let play = playRound(selection(), getComputerChoice());
        if (play == `you`) {
        you++;
        } else {
        computer++;
        }
    }
    return you > computer ? `You win !!` : `Computer wins !!`;
}; */

// console.log(game());