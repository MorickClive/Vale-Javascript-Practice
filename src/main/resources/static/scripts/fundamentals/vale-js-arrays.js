"use strict";
import {sectionHead, sectionEnd} from "../util/vale-js-utilities.js";

const arrayExample = () => {
	sectionHead("Javascript Arrays:");
	
	let array = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
	
	// We cannot print a whole array by referencing array, but we can use an index position to extract
	// a value out from the array.
	// We can retrieve and even reassign values to specific index, but we must remember that the first position of an array start from the
	// index 0, the final position of an array is usually the total number of stored items -1.
	console.log("position 2: " + array[1]);
	
	// Arrays are a type of object, this means that javascript provides array structures a few utility methods
	// as stated before, we typically couldn't "print" and array to the console - however with the method toString
	// we can ask the array to return the most appropriate string-based form of this array, rather than trying to
	// print the object directly! (we would simply be printing the object without context otherwise!)
	console.log(array.toString());
	
	// Arrays also keep information about their total size as well as functions that can chance or manipulate the contents
	// or structure of the elements inside it.
	console.log("Array Size: " + array.length);
	
	// It is difficult to perform precise operations on an array line by line, however with iteration functionality
	// we can craft expressions to apply operations to each element within an array.
	//
	// In the next section we'll look at reviewing how we can use loops to iterate through a list.	
	sectionEnd();
}

export default arrayExample;