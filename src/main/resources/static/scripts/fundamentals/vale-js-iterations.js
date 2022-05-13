"use strict";
import {sectionHead, sectionEnd} from "../util/vale-js-utilities.js";


export const iterationExample = () => {
	sectionHead("Javascript Iteration:");
	
	let array = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
	let flag = false;
	let counter = 0;
		
	console.log("Array: " + array.toString());
	console.log("while\n========================================");
	
	// While loops
	// perform instruction set within the scope whilst the condition in the while condition is true
	while(!flag){
		console.log(array[counter++]);
		if(counter >= array.length-1) { flag = true;}
	}
	flag = false;
	counter = 0;
	
	console.log("do-while\n========================================");
	
	// Do-While loops
	// Do while loops always run once, but then evaluate the while condition after the second iteration.
	do {
		console.log(array[counter++]);
		if(counter >= array.length-1) { flag = true;}
	} while (!flag);
	
	console.log("for loop\n========================================");
	
	// For loops
	// includes 3 sections as part:
	//	- section 1: allows for setup before the loop\n
	//	- section 2: condition, if true the next iteration runs
	//	- section 3: to execute after an iteration.
	for(let x = array.length-1; x > 0 ; x--) {
		console.log(array[x]);
	}
	
	console.log("for-in loop\n========================================");
	
	// For-in loops
	// requires an iterable array where the loop iterates over the key values of the array/set/map
	// the variable before "in" stores the key-value in the array index/key position.
	for(let x in array) {
		console.log(array[x]);
	}
	
	console.log("for-of loop\n========================================");
	
	// For-of loops
	// stores the value of an array position, iterating through the array from start to finish
	// the variable before "of" represents the retrieves data-value.
	for(let x of array) {
		console.log(x);
	}
	
	console.log("break loop\n========================================");
	
	// break
	// A break will escape out of the current scope and immediately continue after the scope it's called from.	
	for(let x in array) {
		console.log(array[x]);
		if(x > 1 ){ break; }
	}
	
	console.log("continue-on-odd loop\n========================================");

	// continue
	// A continue will break out of the active iteration, skipping any additional instructions in favour of continuing the next iteration
	// of the loop.
	for(let x in array) {
		if(x % 2 == 1) {
			continue;
		}
		console.log(array[x]);
	}
	
	sectionEnd();
}

export default iterationExample;