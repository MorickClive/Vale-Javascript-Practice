"use strict";
import {sectionHead, sectionEnd} from "./util/vale-js-utilities.js";

const comparisonExample = () => {
	sectionHead("Javascript Comparators:");
	
	const number = 5;
	
	// if(){}
	// based on a boolean value, either the contents of the if scope will run
	// otherwise it is ignored if the value is false.	
	console.log("number: " + number);
	
	// == - compare values
	if( number == 5 ){
		console.log("number == 5: " + true);
	}
	
	// > - greater than value
	console.log("number > 5: " + (number > 5));
	
	// < - less than value
	console.log("number < 5: " + (number < 5));
	
	// >= - greater than or equal to value
	console.log("number >= 5: " + (number >= 5));
	
	// <= - less than or equal to values
	console.log("number <= 5: " + (number <= 5));
	
	// != - not equal value
	console.log("number != 5: " + (number != 5));
	
	// === - compare type
	console.log("(\"String\" === \"Another String\"): " +  ("String" === "Another String"));
	
	// !== - not equal type
	console.log("(\"String\" !== 5): " +  ("String" !== 5));
	
	// elif
	
	if(number < 5) {
		
	} else {
		console.log("else triggered!");
	}
	
	if(number == 6) {
	} else if (number == 5) {
		console.log("else if triggered!");
	}
	
	// Switch-Case
	// allow us to use a data value to compare againest comparitive cases,
	// executing code blocks under cases that are triggered.
	let result = 4;
	
	function checkNumber(x) {
		switch (x) {
			case 1:
				return "returned 1";
			// Without a break, the code would execute case 2 as well
			// the break keyword.
			break;
			case 2:
				return "returned 2";
			break;
			case 3:
				return "returned 3";
			break;
			case 4:
				return "returned 4";
			break;
			case 5:
				return "returned 5";
			break;
			
			default:
				return "an error occured";
		}
	}
	
	console.log("switch case result: " + checkNumber(result));
	console.log("switch case defaults: " + checkNumber(12));
	
	// Logical Operators
	// in some statements, logical operators might change the context of a conditional statement
	// by incorperating a range of conditions or multiple requirements for it to be considered "true".
	
	// || - logical Or
	// Only one condition in the logical `Or` needs to be true for the expression to evaluate to true overall
	if(number > 1 || number < 5){
		console.log("Logical Or");
	}
	
	// && - logical And
	// Both conditions in the logical `And` need to be true for the expression to evaluate to true overall
	if(number > 1 && number < 5){
		console.log("Logical And");
	}
	
	// ! - logical Not/Inverse
	if( !(number == 10) ){ // which would be arguablly considered equal to number != 10`
		console.log("Logical Not");
	}
	
	// Ternary operator
	console.log(number > 5 ? "number is greater than 5" : "number is not greater than 5");
	
	// instanceof
	// We can use the `instanceof` keyword to check if a data type is an example of a complex data type 
	// (of which has a constructor - we'll review this in object/classes)
	let x = new String("word");
	
	// Note that we can't do this with the primative data type `String x = "word"`
	if( x instanceof String){
		console.log("x is a String");
	}
	
	// typeof
	// we can, however, use the comparision operator `typeof x === "String"`
	console.log( typeof "word" === "string" ? "\"word\" is a primative String" : "\"word\" is not a primative String")
	
	sectionEnd();
}

export default comparisonExample;