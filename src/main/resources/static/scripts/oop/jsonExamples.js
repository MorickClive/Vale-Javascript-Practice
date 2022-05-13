"use strict";
import {sectionHead, sectionEnd} from "../util/vale-js-utilities.js";

const jsonExample = () => {
	sectionHead("JavaScript Object Notation:");
	
	// JavaScript Object Notation
	// ========================================
	
	// Define a JSON
	// ========================================
	// - Data is in name/value pairs
	// - Data is separated by commas
	// - Curly braces hold objects
	// - Square brackets hold arrays
	
	let personJSON = {
		people : [
		{"name" : "Alex"},
		{"name" : "Safiya"},
		{"name" : "Morick"},
		{"name" : "Aster"},
		{"name" : "Corrin"}
		]
	}
		
	let JSONString = '{"people" : ['+
			'{"name" : "Alex"},' +
			'{"name" : "Safiya"},' +
			'{"name" : "Morick"},' +
			'{"name" : "Aster"},' +
			'{"name" : "Corrin"}' +
		']}';
	
	console.log("\nPrint JSON:\n========================================");
	console.log(personJSON); // browser consoles can often structure json into a console log as an object
	
	console.log("\nStringify JSON:\n========================================");
	console.log(JSON.stringify(personJSON)); // translate to String
	
	console.log("\nParse JSON String as JSON:\n========================================");
	console.log(JSON.parse(JSONString)); // translate to JSON from String
	
	console.log("Looping through JSON arrays:\n========================================");
	for(let x of personJSON.people){
		console.log("Person: " + x.name);
	}
	
	sectionEnd();
}

export default jsonExample;