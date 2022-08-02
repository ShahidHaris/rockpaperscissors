const buttons = document.querySelectorAll('.option');
const resultDiv = document.getElementById('resultDiv');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let pInput = button.textContent;
        let cOptions = ['ROCK', 'PAPER', 'SCISSORS']
        let cInput = cOptions[Math.floor(Math.random() * 3)];
        playRound(pInput, cInput);
        updateScore();
        if (game()) {
            pCount = cCount = 0;
            updateScore()};
    });
});

let pCount = 0;
let cCount = 0;
function playRound(pInput, cInput) {
    if (pInput == cInput) {
        pCount = pCount + 0;
        cCount = cCount + 0;
    } else if (pInput == 'ROCK') {
        if (cInput == 'PAPER') {
            cCount++;
        } else {
            pCount++;
        }
    } else if (pInput == 'PAPER') {
        if (cInput == 'ROCK') {
            pCount++;
        } else {
            cCount++; 
        }
    } else if (pInput == 'SCISSORS') {
        if (cInput == 'PAPER') {
            pCount++;
        } else {
            cCount++;   
        }
    }
}

function updateScore() {
    document.getElementById('pSpan').textContent = pCount;
    document.getElementById('cSpan').textContent = cCount;
}

function game(params) {
    if (pCount === 5 || cCount === 5) {
        pCount === 5 ? resultDiv.textContent = 'You Win, Congartulation' : resultDiv.textContent = 'Computer is the winner, try agin';
        return true;
    }
    resultDiv.textContent = '';
    return false;
}