//* Globals
const calcBody = document.querySelector('.calc-body');
const calcDisplay = document.querySelector('.calc-display');

//* Basic Arithmetic
const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mult = (a, b) => a * b;
const div = (a, b) => a / b;

//* Draws Button Interface
function drawDisplay () {
    for (let i = 1; i <= 9; i++) {
        const numBtn = document.createElement('button');
        numBtn.className = 'numBtn';
        numBtn.textContent = i + '';
        calcBody.append(numBtn);
    }
    const ops = ['+', '-', '*', '/', '='];
    for (let i = 0; i < 5; i++) {
        const opBtn = document.createElement('button');
        opBtn.className = 'opBtn';
        opBtn.textContent = ops[i];
        calcBody.append(opBtn);
    }
}

//* Draws numbers to the screen when an update is requested
//! Missing Implementation
function drawNums () {
    calcDisplay.textContent = 0;
}

drawDisplay();
drawNums();
