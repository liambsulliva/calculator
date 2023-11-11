//* Globals
const calcBody = document.querySelector('.calc-body');
const calcDisplay = document.querySelector('.calc-display');
let firstOperand = '';
let secondOperand = '';
let currentOperation = null;
const ops = ['+', '-', '×', '÷'];

//* Arrow Function Arithmetic
let add = (a, b) => a + b;
let sub = (a, b) => a - b;
let mult = (a, b) => a * b;
let div = (a, b) => a / b;

//* Draws Button Interface
function drawDisplay () {
    const clearBtn = document.createElement('button');
    clearBtn.className = 'clearBtn';
    clearBtn.textContent = 'Clear';
    calcBody.append(clearBtn);
    for (let i = 1; i <= 9; i++) {
        const numBtn = document.createElement('button');
        numBtn.className = 'numBtn';
        numBtn.id = i + '';
        numBtn.textContent = i + '';
        calcBody.append(numBtn);
    }
    for (let i = 0; i < 4; i++) {
        const opBtn = document.createElement('button');
        opBtn.className = 'opBtn';
        opBtn.id = ops[i];
        opBtn.textContent = ops[i];
        calcBody.append(opBtn);
    }
    const equalsBtn = document.createElement('button');
    equalsBtn.className = 'equalsBtn';
    equalsBtn.textContent = '=';
    calcBody.append(equalsBtn);
}

//* Draws numbers to the screen when an update is requested
// TODO: Refactor numBtn event listener
function drawNums () {
    const numBtns = document.querySelectorAll('.numBtn');
    const opBtns = document.querySelectorAll('.opBtn');
    const clearBtn = document.querySelector('.clearBtn');
    const equalsBtn = document.querySelector('.equalsBtn');
    let numChars = 0;
    calcDisplay.textContent = '0';
    numBtns.forEach(button => {
        button.addEventListener('click', function() {
            if (numChars < 22) {
                if (calcDisplay.textContent !== '0') {
                    if (!firstOperand) {
                        firstOperand += button.id;
                        calcDisplay.textContent += button.id;
                    } else {
                        secondOperand += button.id;
                        if (currentOperation && numChars === 1) {
                            calcDisplay.textContent = button.id;
                        } else {
                            calcDisplay.textContent += button.id;
                        }
                    }
                } else {
                    calcDisplay.textContent = button.id;
                    firstOperand = button.id;
                }
                numChars++;
            }
        });
    });
    opBtns.forEach(button => {
        button.addEventListener('click', function() {
            calcDisplay.textContent = button.id;
            currentOperation = button.id;
        });
    });
    clearBtn.addEventListener('click', function() {
        calcDisplay.textContent = "0";
        firstOperand = '';
        secondOperand = '';
        currentOperation = null;
    });
    equalsBtn.addEventListener('click', function() {
        calcDisplay.textContent = operate(firstOperand, secondOperand, currentOperation);
        firstOperand = calcDisplay.textContent;
        secondOperand = '';
        currentOperation = null;
    });
}

//* Calculates answer from given nums and op
function operate(num1, num2, operator) {
    let result = 0;
    switch (operator) {
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = sub(num1, num2);
            break;
        case '×':
            result = mult(num1, num2);
            break;
        case '÷':
            if (num2 !== 0) {
                result = div(num1, num2);
            } else {
                result = "Cannot divide by zero";
            }
            break;
        default:
            result = null;
            break;
    }
    return result;
}

drawDisplay();
drawNums();
