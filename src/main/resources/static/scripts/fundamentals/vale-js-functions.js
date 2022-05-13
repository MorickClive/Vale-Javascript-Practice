"use strict";
import {sectionHead, sectionEnd} from "./util/vale-js-utilities.js";

const functionExample = () => {
	sectionHead("Javascript Functions:");
	
	// A  function is declared with the keyword `function` in conjunction with a `name`, a parameter list `()` and scope `{}`
	// here is a greeting function that'll return a value using the `return` keyword
	function greeting() {
		return "Hello World!";
	}
	
	// Once we've defined a method, we can use it by invoking it, we can invoke a function by providing parameters.
	// If you have no required parameters you simply leave the parameter list empty: `()`, it's also
	// a good way to distinguish function from variables is the requirement to use brackets directly after the function name;
	let message = greeting();
	
	// We'll generate the message to the console with the following requests:
	// ~ notice that we can invoke a method as if it were a result rather store the value and then log it.
	console.log( message );
	console.log( greeting() );
	
	// Parameters can be added to the definition to handle values in a function
	// Parameters are like variables that represent data that is provided
	// when invoking a function.
	function addition(x, y) {
		return x + y
	}
	
	console.log("function: 5+5 = " + addition(5,5));
	
	// function expression
	const multiply = function(x,y) { return x*y; }
	
	console.log("function expression: 5*5 = " + multiply(5,5));
	
	// Arrow functions allow us to create methods without names that
	// invoke functionality through expression. In fact
	// a few preexisting functionalities and even accept these as part of their parameters.
	const div = (x,y) => { x / y};
	
	console.log("arrow function: 5/5 = " + div(5/2) );
	
	// IIFE or immediately-invoked function expressions are a way of running
	// defined code directly after definition.
	(	() => { 
		console.log("IIFE - executed!")
	})();
	
	// IIFE allows us to encapsulate variables and functionally within file scope rather than global scope - avoiding poluting additional.
	// it can also be used with async keyword functionality.
	
	sectionEnd();
}

export default functionExample;