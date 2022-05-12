// ========================================
// Vale-JS-Variables

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
	const section = "Javascript Variables/Assignments:";
	console.log("\n" + section + "\n========================================");
	
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
	const section = "Javascript Types:";
	console.log("\n" + section + "\n========================================");
	
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
}

// ========================================
// Operators

{
	const section = "Javascript Operators:";
	console.log("\n" + section + "\n========================================");
	
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
}

// ========================================
// Assignment Operators

{
	const section = "Javascript Assignment Operators:";
	console.log("\n" + section + "\n========================================");
	
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
	
}

// ========================================
// Section end

{
	const section = "SECTION END";
	console.log("\n========================================\n" + section + "\n========================================");
}

// ========================================
// Vale-JS-Functions

{
	const section = "Javascript Functions:";
	console.log("\n" + section + "\n========================================");
	
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
	
	console.log("arrow function: 5/5 = " + number(div(5/2)));
	
	// IIFE or immediately-invoked function expressions are a way of running
	// defined code directly after definition.
	(	() => { 
		console.log("IIFE - executed!")
	})();
	
	// IIFE allows us to encapsulate variables and functionally within file scope rather than global scope - avoiding poluting additional.
	// it can also be used with async keyword functionality.
}

// ========================================
// Section END
{
	const section = "SECTION END";
	console.log("\n========================================\n" + section + "\n========================================");
}

// ========================================
// Vale-JS-Comparators

{
	const section = "Javascript Comparators:";
	console.log("\n" + section + "\n========================================");
	
	// ==
	
	// >
	
	// <
	
	// >=
	
	// <=
	
	// !=
	
	// ===
	
	// !==
	
	console.log( greeting() );
}

// ========================================
// Section END
{
	const section = "SECTION END";
	console.log("\n========================================\n" + section + "\n========================================");
}

// ========================================
// Vale-JS-Arrays

{
	const section = "Javascript Arrays:";
	console.log("\n" + section + "\n========================================");
	
	console.log( greeting() );
}

// ========================================
// Section END
{
	const section = "SECTION END";
	console.log("\n========================================\n" + section + "\n========================================");
}

// ========================================
// Vale-JS-Iteration

{
	const section = "Javascript Iteration:";
	console.log("\n" + section + "\n========================================");
	
	console.log( greeting() );
}

// ========================================
// Section END
{
	const section = "SECTION END";
	console.log("\n========================================\n" + section + "\n========================================");
}

// ========================================
// Vale-JS-Iteration

{
	const section = "Javascript Iteration:";
	console.log("\n" + section + "\n========================================");
	
	console.log( greeting() );
}

// ========================================
// Section END
{
	const section = "SECTION END";
	console.log("\n========================================\n" + section + "\n========================================");
}