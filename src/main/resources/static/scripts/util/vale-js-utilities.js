"use strict";
// ========================================
// Section end

const sectionEnd = () => {
	console.log("\n========================================\nSECTION END\n========================================");
}
const sectionHead = (section) => {
	console.log("\n" + section + "\n========================================");
}

// Console - IIFE
(() => {
	function clearConsole(){
		document.getElementsByClassName("window")[0].innerHTML = "";
	}
	
	function clearInput(){
		document.getElementById("consoleInput").value = "";
	}
	
	function listCommands(){
		const element = document.createElement("p");
		const targ = document.getElementsByClassName("window")[0];
		
		let commandList = new Map();
		let msg = "";
		
		commandList.set("/q, /cls, /clear", "clears console display.");
		commandList.set("/?, /help, /lscmd", "displays available commands.");
		
		commandList.forEach((x, y) => { return msg += "<h4>" + y + "</h4>" + "<div style=\"padding-left:15px\">" + x + "</div>"});
		
		element.innerHTML = "<h3>[CONSOLE]:<h3> " + msg ;
		
		targ.appendChild(element);
		targ.scrollTop = targ.scrollHeight;		
	}
	
	function checkCommands(y){
		if(y.match("/")){
			let x = y.replace("/","");
			clearInput();
			
			switch(x.toLowerCase()){
				case "q":
				case "cls":
				case "clear":
					clearConsole();
				break;
				
				case "?":
				case "help":
				case "lscmd":
					listCommands();
				break;
				
				default:
				console.log("Command not found!");
			}
			return true;
		}
		return false;
	}
	
	function createConsole(){
		const submit = document.getElementById("submitConsole");
		const input = document.getElementById("consoleInput");
		
		function submitEntry(x) {
			if(x.value != "" && !checkCommands(x.value)){
				const element = document.createElement("p");
				const targ = document.getElementsByClassName("window")[0];
				
				element.innerHTML = x.value;
				clearInput();
				
				targ.appendChild(element);
				targ.scrollTop = targ.scrollHeight;
			}
		}
		
		submit.onclick = () => {submitEntry(input)};
		input.addEventListener('keypress', function (e) {
		    if (e.key === 'Enter') {
		      submitEntry(input);
		    }
		});
	}
	
	createConsole();
})();

export {sectionHead, sectionEnd};