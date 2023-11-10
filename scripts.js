//* Globals
const calcBody = document.querySelector('.calc-body');
const calcDisplay = document.querySelector('.calc-display');
let numChars = 0;

//* Basic Arithmetic
const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mult = (a, b) => a * b;
const div = (a, b) => a / b;

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
    const ops = ['+', '-', '*', '/', '='];
    for (let i = 0; i < 5; i++) {
        const opBtn = document.createElement('button');
        opBtn.className = 'opBtn';
        opBtn.id = ops[i];
        opBtn.textContent = ops[i];
        calcBody.append(opBtn);
    }
}

//* Draws numbers to the screen when an update is requested
//! Missing Implementation
function drawNums () {
    calcDisplay.textContent = 0;
    const numBtns = document.querySelectorAll('.numBtn');
    const opBtns = document.querySelectorAll('.opBtn');
    const clearBtn = document.querySelector('.clearBtn');
    numBtns.forEach(button => {
        button.addEventListener('click', function() {
            if (numChars < 22) {
                if (calcDisplay.textContent === '0') {
                    calcDisplay.textContent = button.id;
                } else {
                    calcDisplay.textContent += button.id;
                }
            }
            numChars++;
        });
    });
    opBtns.forEach(button => {
        button.addEventListener('click', function() {
            if (numChars < 22) {
                if (calcDisplay.textContent !== '0') {
                    calcDisplay.textContent += button.id;
                }
            }
            numChars++;
        });
    });
    clearBtn.addEventListener('click', function() {
        calcDisplay.textContent = "0";
    });
}

drawDisplay();
drawNums();
