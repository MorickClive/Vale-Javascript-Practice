"use strict";
import {sectionHead, sectionEnd} from "../util/vale-js-utilities.js";

const domExample = () => {
	sectionHead("Javascript DOM Control:");
	
	// DOM Manipulation:
	// ========================================
	
	// identify element:
	const mainElement = document.getElementById("js");
	
	// Additionally we can identify elements by the following:
	// document.getElementById(id)	Find an element by element id
	// document.getElementsByTagName(name)	returns array
	// document.getElementsByClassName(name) returns array
	
	// Edit internal html
	mainElement.innerHTML = "<h2>Hello World!</h2>";
	
	// Elements have the following attribute/methods:
	//	Attribute: innerHTML
	//	Attribute: attribute
	//	Attribute: style.property
	//  Method: .setAttribute(attributeTarget, value)
	
	// Creating an element
	const newElement = document.createElement("newElement");	//Create an HTML element
	
	// Config
	newElement.setAttribute("id", "newElement");
	newElement.innerHTML = "<p>New Element</p>";
	
	// Inserting an Element
	mainElement.appendChild(newElement);

	// Replace existing element	
	const newReplacementElement = document.createElement("p");
	newReplacementElement.innerHTML = "New Element Updated!";
	mainElement.replaceChild(newReplacementElement, newElement);
	
	// Delete Element
	const delElement = document.createElement("deleteElement");
	
	// Config
	delElement.setAttribute("id", "deleteElement");
	delElement.innerHTML = "<p>delete me</p>";
	mainElement.appendChild(delElement);
	mainElement.removeChild(delElement);
	console.log("delElement has been deleted!");
	
	// Event handle click:
	const buttonElement = document.createElement("input");
	
	// Config
	buttonElement.setAttribute("id", "deleteElement");
	buttonElement.setAttribute("type", "button");
	buttonElement.setAttribute("value", "button");
	
	newElement.removeAttribute("id");
	
	let check = 0;
	buttonElement.onclick = () => {
		const element = document.createElement("p");
		const targ = document.getElementsByClassName("window")[0];
		
		element.innerHTML = "Hello World!" + ++check;
		targ.appendChild(element);
		// Track scroller:
		targ.scrollTop = targ.scrollHeight;
	};
	
	mainElement.appendChild(buttonElement);
	
	// Console input:	
	const submit = document.getElementById("submitConsole");
	const input = document.getElementById("consoleInput");
	
	function submitEntry(x) {
		const element = document.createElement("p");
		const targ = document.getElementsByClassName("window")[0];
		element.innerHTML = x.value;
		x.value = "";
		
		targ.appendChild(element);
		targ.scrollTop = targ.scrollHeight;
	}
	
	submit.onclick = () => {submitEntry(input)};
	input.addEventListener('keypress', function (e) {
	    if (e.key === 'Enter') {
	      submitEntry(input);
	    }
	});
	
	sectionEnd();
}

export default domExample;