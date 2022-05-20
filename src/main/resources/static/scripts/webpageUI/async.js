"use strict";
import {sectionHead, sectionEnd, uiConsoleOut} from "../util/vale-js-utilities.js";

const asyncExample = () => {
	sectionHead("Javascript Asynchronous:");
	
	// Asynchronous Section
	// ========================================
	
	// Code that runs in a concurrent fashion to other functions is referred to as Asynchronous
	function myGreeting() {
		console.log("[Timeout: 3 seconds] - Delayed message!");
	} 
	
	// As a callback, "myGreeting" should take 3 seconds before invocation.
	// This is because the setTimeout function will delay execution of the instruction set
	// this will be run seperately from the application!
	setTimeout(myGreeting, 3000);
	
	// We may also wish to request information from our database or server
	// this may take time to return and may return an error instead.
	function getGreeting(callBack, url) {
		let req = new XMLHttpRequest();
		req.open('GET', url);
		req.onload = function() {
			if (req.status == 200) {
				callBack(this.responseText);
			} else {
				callBack("Error: " + req.status);
			}
		}
		req.send();
	}
	
	// Requesting basic message to output into console!
	getGreeting(console.log, "portal/greetings");
	
	// Retrieve file output!
	// getGreeting(uiConsoleOut, "scripts/fundamentals/vale-js-arrays.js");
	
	// Promises
	// ========================================
	// Promises are class objects that can accept a function with two callback parameters, the code executed
	// within this function is presumed to take time.
	// The callback functions are:
	//	resolve - called when a successful result is retrieved
	//	reject - called when a failure has occured
	
	
	// Promise with timeout!
	let promiseExample = new Promise( (resolve, reject) => {
		setTimeout(() => { resolve("Delayed Promise returned!"); }, 3000);
	});
	
	promiseExample.then(console.log);
	
	// Promise with api request!
	let apiPromise = new Promise(function(resolve, reject) {
		let req = new XMLHttpRequest();
		req.open('GET', "portal/greetings");
		req.onload = function() {
			if (req.status == 200) {
				resolve("Console Promise: " + this.responseText);
			} else {
				reject("Error: " + req.status);
			}
		}
		req.send();
	});
	
	apiPromise.then(
		console.log,
		console.log
	);
	
	// Async/Await
	// ========================================
	
	// Adding the Async keyword to a method definition is the same as
	// transforming that method into a promise, where the returned result invokes the "resolve" method.
	async function asyncExample() {
		return "[Async] - result returned";
	}
	asyncExample().then(console.log);
	
	// However we don't always return values, we can use async functions to wait for promises defined within them
	// the await keyword is called inside an async function.
	async function asyncPromiseExample() {
		let promise = new Promise((resolve, reject) => {
			setTimeout(() => { resolve("async/await Promise returned!"); }, 3000);
		});

		let result = await promise;
		console.log("[Async/Await]: " + result);
	}
	
	asyncPromiseExample();
	
	sectionEnd();
}

export default asyncExample;