//* Globals
const calcBody = document.querySelector('.calc-body');
const calcDisplay = document.querySelector('.calc-display');
const ops = ['+', '-', '*', '/'];
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
//! BUG: Operating on resultant numbers returns INVALID OPERATOR
function drawNums () {
    calcDisplay.textContent = 0;
    const numBtns = document.querySelectorAll('.numBtn');
    const opBtns = document.querySelectorAll('.opBtn');
    const clearBtn = document.querySelector('.clearBtn');
    const equalsBtn = document.querySelector('.equalsBtn');
    let expression = "";
    numBtns.forEach(button => {
        button.addEventListener('click', function() {
            if (numChars < 22) {
                calcDisplay.textContent = button.id;
                expression += button.id + " ";
            }
            numChars++;
        });
    });
    opBtns.forEach(button => {
        button.addEventListener('click', function() {
            if (numChars < 22) {
                calcDisplay.textContent = button.id;
                expression += button.id + " ";
            }
            numChars++;
        });
    });
    clearBtn.addEventListener('click', function() {
        calcDisplay.textContent = "0";
        expression = "";
    });
    equalsBtn.addEventListener('click', function() {
        calcDisplay.textContent = operate(expression);
        expression = calcDisplay.textContent;
    });
}

//* Splits string into operator and operands and parses answer
function operate(expression) {
    const [operand1, operator, operand2] = expression.split(/\s+/);
    const num1 = parseFloat(operand1);
    const num2 = parseFloat(operand2);
    let result = 0;

    switch (operator) {
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = sub(num1, num2);
            break;
        case '*':
            result = mult(num1, num2);
            break;
        case '/':
            if (num2 !== 0) {
                result = div(num1, num2);
            } else {
                result = "Cannot divide by zero";
            }
            break;
        default:
            result = "Invalid operator";
            break;
    }
    return result;
}

drawDisplay();
drawNums();
