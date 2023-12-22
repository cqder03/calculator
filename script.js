const displayContent = document.querySelector("#display-content");
const displayContentUpper = document.querySelector('#display-content-upperscreen');
const buttons = document.querySelector('#button-wrapper');
let firstValue = 0;
let secondValue = 0;
let currentOperator = '';
// For entering the numbers in to the display //
buttons.addEventListener('click', (event) => {
  let numberId = event.target.id;
    switch(numberId) {
      case '1':
				if(displayContent.textContent == '0') {
					displayContent.textContent = '1';	
				} else {
					displayContent.textContent += '1';
				}
				break;
			case '2':
        if(displayContent.textContent == '0') {
					displayContent.textContent = '2';	
				} else {
					displayContent.textContent += '2';
				}
				break;
			case '3':
        if(displayContent.textContent == '0') {
					displayContent.textContent = '3';	
				} else {
					displayContent.textContent += '3';
				}
				break;
			case '4':
        if(displayContent.textContent == '0') {
					displayContent.textContent = '4';	
				} else {
					displayContent.textContent += '4';
				}
				break;
			case '5':
        if(displayContent.textContent == '0') {
					displayContent.textContent = '5';	
				} else {
					displayContent.textContent += '5';
				}
				break;
			case '6':
        if(displayContent.textContent == '0') {
					displayContent.textContent = '6';	
				} else {
					displayContent.textContent += '6';
				}
				break;
			case '7':
        if(displayContent.textContent == '0') {
					displayContent.textContent = '7';	
				} else {
					displayContent.textContent += '7';
				}
				break;
			case '8':
        if(displayContent.textContent == '0') {
					displayContent.textContent = '8';	
				} else {
					displayContent.textContent += '8';
				}
				break;
			case '9':
        if(displayContent.textContent == '0') {
					displayContent.textContent = '9';	
				} else {
					displayContent.textContent += '9';
				}
				break;
			case '0':
        displayContent.textContent += '0';
				break;
			case 'DOT':
        if(displayContent.textContent.includes('.')) {
					break;
				}
				displayContent.textContent += '.';
				break;
				case 'C':
					restartParameters();
					break;
				case 'CE':
					displayContent.textContent = '';
					break;
				case 'DEL':
					displayContent.textContent = displayContent.textContent.slice(0, -1);
				break;
				case 'DIV':
					if (displayContentUpper.textContent === '' && firstValue === 0) {
						firstValue = Number(displayContent.textContent);
						currentOperator = '/'
						displayContentUpper.textContent = `${firstValue} ${currentOperator}`;
						displayContent.textContent = '';
					} else if(displayContent.textContent ==='0') {
						alert('You can\'t divide by 0, try again!');
						restartParameters();
					} else {
						secondValue = Number(displayContent.textContent);
						let newValue = operate(currentOperator, firstValue, secondValue);
						firstValue = newValue;
						currentOperator = '/';
						displayContentUpper.textContent = `${newValue} ${currentOperator}`;
						displayContent.textContent = '';
					} 
					break;
				case 'MUL':
					if (displayContentUpper.textContent === '' && firstValue === 0) {
						firstValue = Number(displayContent.textContent);
						currentOperator = 'x'
						displayContentUpper.textContent = `${firstValue} ${currentOperator}`;
						displayContent.textContent = '';
					} else {
						secondValue = Number(displayContent.textContent);
						let newValue = operate(currentOperator, firstValue, secondValue);
						firstValue = newValue;
						currentOperator = 'x';
						displayContentUpper.textContent = `${newValue} ${currentOperator}`;
						displayContent.textContent = '';
					}  
					break;
				case 'SUB':
					if (displayContentUpper.textContent === '' && firstValue === 0) {
						firstValue = Number(displayContent.textContent);
						currentOperator = '-'
						displayContentUpper.textContent = `${firstValue} ${currentOperator}`;
						displayContent.textContent = '';
					} else {
						secondValue = Number(displayContent.textContent);
						let newValue = operate(currentOperator, firstValue, secondValue);
						firstValue = newValue;
						currentOperator = '-';
						displayContentUpper.textContent = `${newValue} ${currentOperator}`;
						displayContent.textContent = '';
					} 
					break;
				case 'PLU':
					if (displayContentUpper.textContent === '' && firstValue === 0) {
						firstValue = Number(displayContent.textContent);
						currentOperator = '+'
						displayContentUpper.textContent = `${firstValue} ${currentOperator}`;
						displayContent.textContent = '';
					} else {
						secondValue = Number(displayContent.textContent);
						let newValue = operate(currentOperator, firstValue, secondValue);
						firstValue = newValue;
						currentOperator = '+';
						displayContentUpper.textContent = `${newValue} ${currentOperator}`;
						displayContent.textContent = '';
					} 
					break;
				case 'PNM': 
					if (displayContent.textContent.includes('-')) {
						displayContent.textContent = displayContent.textContent.slice(1);
					} else {
						displayContent.textContent = `-${displayContent.textContent}`;
					}
					break;
				case 'EQU':
					if (displayContentUpper.textContent === '' || displayContent.textContent === '' && displayContentUpper.textContent.length > 0) {
						alert('You need to select the operator first!');
						restartParameters();
					} else if(currentOperator === '/' && displayContent.textContent === '0') {
						alert('You can\'t divide by 0, try again!');
						restartParameters();
					} else {
						secondValue = Number(displayContent.textContent);
						let newValue = operate(currentOperator, firstValue, secondValue);
						firstValue = newValue;
						displayContentUpper.textContent = `${newValue}`;
						displayContent.textContent = '';
					}
					break;
    }
});

function add(a, b) {
  return a + b;
};

function subtract(a, b) {
  return a - b;
};


function multiply(a, b) {
	return a * b;
};

function divide(a, b) {
	return a / b;
};

function operate(operator, num1, num2) {
	let finalNumber;
	switch(operator) {
		case '+':
			finalNumber = add(num1, num2);
			break;
		case '-':
			finalNumber = subtract(num1, num2);
			break;
		case 'x':
			finalNumber = multiply(num1, num2);
			break;
		case '/':
			finalNumber = divide(num1, num2);
	}

	return finalNumber;
}

function restartParameters() {
	displayContentUpper.textContent = '';
	displayContent.textContent = '';
	firstValue = 0;
	secondValue = 0;
}