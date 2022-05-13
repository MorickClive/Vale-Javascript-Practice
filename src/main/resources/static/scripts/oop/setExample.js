"use strict";
import {sectionHead, sectionEnd} from "../util/vale-js-utilities.js";

const setsExample = () => {
	sectionHead("Javascript Sets & Maps:");
	
	// Sets
	// ========================================
	sectionHead("Sets:");
	
	// Sets are like object-managed arrays, they have methods that control and handle
	// the contents of the various elements/items that belong to it!
	
	// We create it like any class-based object:
	let catSet = new Set();

	// add
	catSet.add("Tesla");
	catSet.add("Boris");
	catSet.add("Custard");
	catSet.add("Rhubarb");
	
	// We can print out the set now that it is populated.
	console.log(catSet);

	// size
	console.log("Set size: " + catSet.size);
	
	// has
	console.log("Does the set contain \"Boris\": " + catSet.has("Boris"));
	
	// Sets have a varity of methods that allow us to moderate the contents of the list/array.
	
	// We can use the utility method forEach to provide an functional expression.
	// This will allow us to handle the contents of our set like an array in a for loop.
	catSet.forEach((x) => {
		console.log("Cat: " + x);
	})
		
	// delete
	console.log("Deleting entry Boris");
	catSet.delete("Boris");
	

	// values()
	for (let x of catSet.values()) {
		console.log("Cat: " + x);
	}
	
	// Maps
	// ========================================
	// Maps are like sets, but each value is paired with a key value, these keys can help us
	// identify specific entries within the map.
	sectionHead("Map:");
	
	let catMap = new Map();
	
	// set - akin to add, it allows us to change entries and add new ones.
	catMap.set(1, "Tesla");
	catMap.set(2, "Boris");
	catMap.set(3, "Custard");
	catMap.set(4, "Rhubarb");

	// get - retrieve a value based on its associated key
	console.log("Cat 3: " + catMap.get(3));
	
	// set - set also allows us to edit an existing value.
	catMap.set(3, "Cheese");
	
	// has - a boolean check for entry existance.
	console.log("check Cat 3 exists: " + catMap.has(3));
	console.log("Cat 3 - cat=Cheese: " + (catMap.get(3) == "Cheese"));
	
	// forEach - same as Set.forEach, but allows us to map and additional parameter - reflecting the key.
	catMap.forEach( (x,y) => { console.log("key:" + x + ", value: " + y) });
	
	// entries
	for(let x in catMap.entries()){
		console.log("key:" + x.key + ", value: " + x.value);
	}
	
	// delete
	console.log("delete entry 3:");
	catMap.delete(3);
	catMap.forEach( (x,y) => { console.log("key:" + x + ", value: " + y) });
	
	// size
	console.log("Map Size: " + catMap.size);
	
	sectionEnd();
}

export default setsExample;