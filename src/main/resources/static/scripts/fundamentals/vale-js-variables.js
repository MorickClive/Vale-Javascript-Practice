"use strict";
import {sectionHead, sectionEnd} from "../util/vale-js-utilities.js";

const variablesExample = () => {
	// ========================================
	// Var/Let/Const
	// ========================================
	// all code in javascript can technically be just written in file without any context
	// however this presents and issue with controling variables.

	// `var`s can be declared without concern as to where they are placed - for example below:
	var exampleVar;

	// ========================================
	// Hoisting/Scope

	// It is good practice to wrap code in scopes `{}`
	{
		// Here we have a declared variable; it can be referenced to recall and store data in the future.
		var exampleScopeVar;
	}

	// Thinking about scope is like thinking about a boundary, nothing outside of the scope should have relevance to what is happening
	// inside a scope, when you are out of scope - you are left with no context to draw from.

	// Usually, using the file without scope - or global scope is a bad idea and will restrict our ability to create self-contained/moduluar functionality
	// additionally we should avoid using var where possible.
	// This is because variables declared by var undergo a process known as "hoisting", where the declaration is compiled by the computer as if it were
	// amoung the first variables written in a global scope - regardless of whether they were declared in a scope or not.

	// In the next section we'll look at using `let` as a more scope-safe equalivant.


	// ========================================
	// Assignment

	{
		sectionHead("Javascript Variables/Assignments:");
		
		// let is a variable that respects its current scope; here we declare `exampleLet` - it has no data stored as of yet.
		let exampleLet;
		
		// Assignment is the process or ability to provide a variable a value to hold, we use the `=` symbol after the variable we 
		// wish to assign the data value to.
		
		// our variables hold this data and can be recalled at a later date to extract that data when required.
		// The first time we provide a value is usually referred to as initialisation and can occur with the declaration of a variable all at once or seperately(like below).
		exampleVar = 12;
		exampleLet = 13;
		
		// A variable can exist without a value - without being initialised, but it can lead to errors if you handle it as though it did contain some
		// form of data.
		
		// This should express that the value stored inside `exampleLet` is 13
		console.log("exampleLet = " + exampleLet);
		
		// We can even re-assign a value of a variable to change the contents of it.
		// this will replace the previous value with the provided value - losing the previously stored value.
		exampleLet = 40;
		console.log("exampleLet = " + exampleLet);
		
	}

	// We cannot call `exampleLet` here; this is because it's outside the scope of where exampleLet is defined and initialised.

	// We can however refer to exampleVar here and it should return "13"; this is because `var`s do not respect scope boundries.
	// infact we could even refer to it before it gets a value, but it would be considered undefined.

	// for now we know that we can have scopes, but scope isn't used exclusively on its own. It is used in conjunction with functions or conditionals
	// any functionality that itself provides some kind of meaningful operation where it controls isolated blocks of code.
	// thus we can use scopes to break down instructions into isolated "scripts/instructions" of sorts.

	{
		// Here we have an example of declaration and initialisation together; we create a variable and immediately set it to hold the value "CONSTANT VALUE"
		const exampleConst = "CONSTANT VALUE";
		
		// notice that we aren't using `let` here, but instead `const` - this is to express that we have 3 distinct ways of defining variables:
		// var/let/const
		// var - are variables that are hoisted to the start of the script and existing outside of scope.
		// let - are variables that existing in their defined scope.
		// const - are variables known as constants, they are defined and initialised immediately - once defined a const can not change the value it holds.
	}
	
	// ========================================
	// Types

	// most data types in javascript are inferred through type inference, this means that a let could store a number, string or other data type.
	// the data type generally is inferred when the value is provided, generally through initialisation or first time assignment.

	{
		sectionHead("Javascript Types:");
		
		// ========================================
		// Types - Booleans

		let exampleBool = true;

		// ========================================
		// Types - Strings

		let exampleString = "Hello World";
		
		// ========================================
		// Types - Numbers
		
		let exampleNum = 12.5;

		// ========================================
		// Types - Others

		// Other more complex data types, such as objects/classes/structures are stored in the same way, but are categorised
		// as objects, for example:
		
		// Arrays
		let exampleArray = [12.5, 24, 45, 67 ];

		// Objects
		
		let exampleObject = {"Name" : "example"};

		

		console.log("exampleBool = " + exampleBool);
		console.log("exampleString = " + exampleString);
		console.log("exampleNum = " + exampleNum);
		console.log("exampleArray = " + exampleArray);
		console.log("exampleObject = " + exampleObject);

		// typeof
		console.log("Data types:\n====================");
		console.log("typeof: exampleBool = " + typeof exampleBool);
		console.log("typeof: exampleString = " + typeof exampleString);
		console.log("typeof: exampleNum = " + typeof exampleNum);
		console.log("typeof: exampleArray = " + typeof exampleArray);
		console.log("typeof: exampleObject = " + typeof exampleObject);
		
		// Type Parsing
		// Primitives: Boolean, Null, Undefined, Number, BigInt, String, Symbol, NaN(Number:`Not a Number`)
		
		// Javascript provides the following wrapper objects that can translate data types for appropriate handling
		//	- Number("12");
		//	- parseFloat("12.5")
		//	- parseInt("12.5") // should return 12 - the process removes decimal values via "truncation"(Integers are whole numbers)
		//	- String(12) // returns "12"; we can also use concatenation which we'll observe in operators
		
		// Bitwise operations allow us to change numeric data by controlling their binary equalivant value.
		// observe the following values and their binary equal.
		let x = 5; // 0101
		let y = 1; // 0001
		
		// | - or
		// Will compare bits and will return a 1 as long as 1 bit exists:
		// 0101
		// 0001
		// ----
		// 0101 = 5
		console.log("x | y: " + (x | y));
		
		// & - and
		// Will compare bits and will only return a 1 as long as both positions have 1 bit:
		// 0101
		// 0001
		// ----
		// 0001 = 1	
		console.log("x & y: " + (x & y));
		
		// ~ - not 
		// flips bits, thus 1->0 and 0->1
		// 0101
		// ----
		// 1010 (however, all the 0s stored before these 4 bits are also flipped, resulting in -6)
		console.log("~x: " + ~x);
		
		// There are also bit shift operations, however they won't be reviewed here.
		sectionEnd();
	}

	// ========================================
	// Operators

	{
		sectionHead("Javascript Operators:");
		
		// Handling of raw data in javascript can be controlled with arithmetic operators
		// these will allow us to perform mathematical operations as an expression, we can even use other variables to handle 
		// calculations
		
		let result;
		
		// Arithmetic Operators
		// Addition: +
		result = 5 + 5;
		console.log("5 + 5: " + result);
		
		// Subtraction: -
		result = 5 - 5;
		console.log("5 - 5: " + result);

		// Multiplication: *
		result = 5 * 5;
		console.log("5 * 5: " + result);
		
		// Division: /
		result = 5 / 5;
		console.log("5 / 5: " + result);
		
		// Modulus: %
		result = 5 % 5;
		console.log("5 % 5: " + result);
		
		// Increment: ++
		result = 1;
		result++;
		console.log("result++: " + result);
		
		// Decrement: --
		result = 1;
		result--;
		console.log("result--: " + result);
		
		// Exponent: **
		result = 2**6;
		console.log("2**6: " + result);
		
		// Concatenation
		// When handling strings as part of operations, we cannot directly add numeric data to character/string data - instead the calculations
		// produces a resulting string of both the string and the number in String format, the addition of numeric data to a string is often referred to
		// as Concatenation.
		
		let message = "Our number is: " + result;
		console.log(message);
		
		sectionEnd();
	}

	// ========================================
	// Assignment Operators

	{
		sectionHead("Javascript Assignment Operators:");
		
		// Just like arithemtic operators, javascript also supports assignment operators.
		// These operators perform relative action based on the value stored inside a variable
		// this is a cleaner way of referencing the same variable in an operation if it
		// doesn't have a special place as a coefficient of a calaculation.
		
		// e.g.
		// let result = 5;
		// result = result + 5;
		//
		// result += 5; // add 5 to our existing/stored value.
		
		let result = 0;
		
		console.log("result = 0");
		// +=
		result += 5;
		console.log("result += 5: " + result);
		
		// -=
		result -= 3;
		console.log("result -= 3: " + result);
		
		// *=
		result *= 5;
		console.log("result *= 5: " + result);
		
		// /=
		result /= 5;
		console.log("result /= 5: " + result);
		
		// %=
		result % 1.5;
		console.log("result %= 0.5: " + result);
		
		// **=
		result **= 5;
		console.log("result **= 5: " + result);
		
		sectionEnd();
	}

}

export default variablesExample;