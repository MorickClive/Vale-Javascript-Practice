"use strict";
//import {uiConsoleOut} from "../util/vale-js-utilities.js";

const calculator = () => {	
	const calculator = {
		displayValue: '0',
		storedVal: null,
		pendingVal: false,
		operator: null,
	}
	
	function updateDisplay() {
		const display = document.querySelector('.result');
		display.value = calculator.displayValue;
	}
	
	function clearScreen() {
		calculator.displayValue = '0';
		calculator.storedVal = null;
		calculator.pendingVal = false;
		calculator.operator = null;
	}
	
	function inputDigit(digit) {
		const { displayValue } = calculator;
		
		if (calculator.pendingVal === true) {
			calculator.displayValue = digit;
			calculator.pendingVal = false;
		} else {
			calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
		}
	}
	
	function inputSQRT() {
		const { displayValue } = calculator;
		
		calculator.displayValue = displayValue === '0' ? -0 : Math.sqrt(displayValue);
	}
	
	function inputInvert() {
		const { displayValue } = calculator;
		
		calculator.displayValue = displayValue === '0' ? -0 : -displayValue;
	}
	
	function inputDecimal() {
		if (!calculator.displayValue.includes('.')) {
			calculator.displayValue += '.';
		}
	}
	
	function calculate(x, y, operator) {
		switch(operator) {
			case '+':
				return x + y;
			case '-':
				return x - y;
			case '*':
				return x * y;
			case '/':
				return x / y;
			case '%':
				return x % y;
		}
		return y;
	}
	
	function handleOperator(op) {
		const { storedVal, displayValue, operator } = calculator;
		const inputValue = parseFloat(displayValue);
	
		if (storedVal === null && !isNaN(inputValue)) {
			calculator.storedVal = inputValue;
		} else if (operator) {
			const result = calculate(storedVal, inputValue, operator);
	
			calculator.displayValue = `${parseFloat(result.toFixed(7))}`;
			calculator.storedVal = result;
		}
	
		calculator.pendingVal = true;
		calculator.operator = op;
	}
	
	const calc = document.getElementById('calculator');
	
	calc.querySelector(".numberGrid").addEventListener('click', (event) => {
			const { target } = event;
			const { value } = target;
	
			if (!target.matches('input')) {
				return;
			}
			
			switch (value) {
				case '+':
				case '-':
				case '*':
				case '/':
				case '%':
				case '=':
					handleOperator(value);
					break;
				case '.':
					inputDecimal();
					break;
				case '√':
					inputSQRT();
					break;
				case '±':
					inputInvert();
					break;
				case 'C':
					clearScreen();
					break;
				
				default:
					if (Number.isInteger(parseFloat(value))) {
						inputDigit(value);
					}
			}
			
			updateDisplay();
		}
	);
}

export default calculator;