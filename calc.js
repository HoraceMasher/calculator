
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function clearLastCharacter() {
    const display = document.getElementById('display');
    const currentValue = display.value;
    display.value = currentValue.substring(0, currentValue.length - 1);
}

function calculateResult() {
    const displayValue = document.getElementById('display').value;
    try {
        const result = eval(displayValue);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function handleKeyPress(event) {
const key = event.key;
if (/[0-9+\-*/.=]/.test(key)) {
if (key === 'Enter' || event.keyCode === 13) { // Check for Enter key
    calculateResult();
} else if (key === 'Backspace') {
    clearLastCharacter();
} else {
    appendToDisplay(key);
}
event.preventDefault(); // Prevent the default action of the key press
}
}
