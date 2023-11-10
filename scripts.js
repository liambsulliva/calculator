//* Globals
const calcBody = document.querySelector('.calc-body');


//* Basic Arithmetic
const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mult = (a, b) => a * b;
const div = (a, b) => a / b;

//* Draw Display
function drawDisplay () {
    for (let i = 1; i <= 9; i++) {
        const numBtn = document.createElement('button');
        numBtn.className = 'numBtn';
        numBtn.textContent = i + '';
        calcBody.append(numBtn);
    }
}

drawDisplay();
