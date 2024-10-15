const resultField = document.getElementById('result');
let resultString = "";


function appendToResult(value) {
    resultString += value;
    resultField.value = resultString; 
}


function clearResult() {
    resultString = ""; 
    resultField.value = ""; 
}

function calculate() {
    let numbers = resultString.split(/[\+\-\*\/]/).map(Number); 
    let operators = resultString.replace(/[0-9]/g, '').split(''); 

    let result = numbers[0]; 

    for (let i = 0; i < operators.length; i++) {
        if (operators[i] === '+') {
            result += numbers[i + 1];
        } else if (operators[i] === '-') {
            result -= numbers[i + 1];
        } else if (operators[i] === '*') {
            result *= numbers[i + 1];
        } else if (operators[i] === '/') {
            result /= numbers[i + 1];
        }
    }

    resultField.value = result; 
    resultString = result; 
}
