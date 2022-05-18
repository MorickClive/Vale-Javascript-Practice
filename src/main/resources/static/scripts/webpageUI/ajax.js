"use strict";
import {sectionHead, sectionEnd, uiConsoleOut} from "../util/vale-js-utilities.js";

const ajaxExample = () => {
	sectionHead("Javascript: Asynchronous JavaScript And XML (AJAX)");
	
	// AJAX and RESTFUL Requests Section
	// ========================================
	
	// In cases where we want to store or retrieve data, we might invoke asynchronous
	// behaviour to load in data that we've stored.
	
	// however we cannot store much in a secure fashion with javascript and HTML
	// thus we might request data from a server or database to then provide 
	// new data to load on our website.
	
	// in order to do this, we can use AJAX and in particular the XMLHttpRequest class object

	function restRequest(method, url) {
		
		// In this example we'll contain the functionality within a function
		let req = new XMLHttpRequest();
		
		// Methods:
		// open
		// onload
		// send
		req.open(method, url);
		req.onload = function() {
			if (req.status == 200) {
				uiConsoleOut("[AJAX]: " + this.responseText);
			} else {
				uiConsoleOut("Error: " + req.status);
			}
		};
		req.send();
	}		
	
	restRequest("GET", "portal/greetings");
	
	sectionEnd();
}

export default ajaxExample;