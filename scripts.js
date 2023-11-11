//* Globals
const calcBody = document.querySelector('.calc-body');
const calcDisplay = document.querySelector('.calc-display');
let firstOperand = '';
let secondOperand = '';
let currentOperation = null;
const ops = ['+', '-', '×', '÷'];
let numChars = 0;

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
                        if (!numChars) {
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
            if (firstOperand) {
                calcDisplay.textContent = button.id;
                currentOperation = button.id;
                numChars = 0;
            }
        });
    });
    clearBtn.addEventListener('click', function() {
        calcDisplay.textContent = "0";
        firstOperand = '';
        secondOperand = '';
        currentOperation = null;
        numChars = 0;
    });
    equalsBtn.addEventListener('click', function() {
        const ans = operate(firstOperand, secondOperand, currentOperation);
        calcDisplay.textContent = ans;
        firstOperand = ans;
        secondOperand = '';
        currentOperation = null;
        numChars = 0;
    });
}

//* Calculates answer from given nums and op
function operate(num1, num2, operator) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
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
