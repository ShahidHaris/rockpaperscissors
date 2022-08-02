const button = document.querySelectorAll('button');

let compEntry;
// computer choice
function getComputerChoice() {
    const randNum = Math.floor(Math.random() * 3) + 1;

    switch (randNum) {
        case 1:
            compEntry = 'rock';
            break;
        case 2:
            compEntry = 'paper';
            break;
        case 3:
            compEntry = 'scissors';
            break;
    }
}



















// make to computer random;y choose
/* function getComputerChoice () {
    let random;
    let max = 9;
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
} */

function playerSelection () {
    let state;
    
    
    return state;
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
        return `${alert('add another selection')}` + playRound(selection(), getComputerChoice());
    }
    return state;
}

function game () {
    let you = 0; 
    let computer = 0;
    for (let i = 0; i < 5; i++) {
    let play = playRound(playerSelection(), getComputerChoice());
        if (play == `you`) {
        you++;
        } else {
        computer++;
        }
    }
    return you > computer ? `You win !!` : `Computer wins !!`;
};













// Make the selection case insensitive
/* function makeCaseInsensitive (arg) {
    let result = '';
    for (let i = 0; i < arg.length; i++) {
        result = result.concat(arg[i].toLowerCase());
    }
    return result;
}
console.log(game());

for (let i = 0; i < button.length; i++) {
    if (button[i].className == 'rock' || button[i].className == 'paper' || button[i].className == 'scissors') {
        state = button[i];
    }
} */