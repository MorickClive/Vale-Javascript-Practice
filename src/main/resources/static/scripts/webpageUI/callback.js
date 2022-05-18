"use strict";
import {sectionHead, sectionEnd} from "../util/vale-js-utilities.js";

const callbackExample = () => {
	sectionHead("Javascript CallBacks Async:");
	
	// Callback:
	// ========================================
	const mainElement = document.getElementById("js");
	
	// Callbacks allow us to provide functions to other functions for invocation
	
	// Here we have two methods, log and consoleUILog
	function log(msg){
		console.log(msg);
	}
	
	function consoleUILog(msg) {
		const element = document.createElement("p");
		const targ = document.getElementsByClassName("window")[0];
		
		element.innerHTML = "[CONSOLE]: " + msg.replaceAll("\n","<br \>");
		targ.appendChild(element);
		// Track scroller:
		targ.scrollTop = targ.scrollHeight;
	}
	// end of two methods
	
	// print() can use "method" as a function pass, allowing us to provide the functionality
	// to be triggered either through our browser console or in page console!
	function print(msg, callBack){
		callBack(msg);
	}
	
	// Here we can see how that will impact our application
	let greeting = "\n" + "=".repeat(40) + "\nHello World\n" + "=".repeat(40);

	print(greeting, log);
	print(greeting, consoleUILog);
	
	sectionEnd();
}



export default callbackExample;