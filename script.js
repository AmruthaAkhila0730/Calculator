let displayElement = document.getElementById('calc-display');
let currentExpression = '';

function addNumber(number) {
    currentExpression += number;
    updateDisplay();
}

function addOperator(operator) {
    currentExpression += ` ${operator} `;
    updateDisplay();
}

function resetDisplay() {
    currentExpression = '';
    updateDisplay();
}

function removeLast() {
    currentExpression = currentExpression.trim();
    if (['+', '-', '*', '/'].includes(currentExpression.slice(-1))) {
        currentExpression = currentExpression.slice(0, -2);
    } else {
        currentExpression = currentExpression.slice(0, -1);
    }
    updateDisplay();
}

function compute() {
    try {
        currentExpression = eval(currentExpression).toString();
    } catch (e) {
        currentExpression = 'Error';
    }
    updateDisplay();
}

function updateDisplay() {
    displayElement.textContent = currentExpression;
}
