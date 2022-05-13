"use strict";
import {sectionHead, sectionEnd} from "../util/vale-js-utilities.js";

const oopExample = () => {
	sectionHead("Javascript Class Objects:");
	
	// Define a class
	// ========================================
	
	// js classes use the class keyword, the name of the class to define as well as its scope.
	class Cat {
		
		// each defined class has a constructor that is called when we use the `new` keyword.
		constructor(name, age) {
			// By implying this.name, we are actually providing an attribute/variable that belongs to the
			// Cat instance; we'll explore instancing after this definition.
			this.name = name;
			this.age = age;
		}
		
		// we can provide functions that belong to this class object in a simular way that we provide
		// a normal function, however the context of this definitions means we do not need to use the
		// `function` keyword.
		toString(){
			return "Cat [name= " + this.name + ", age= " + this.age + "]";
		}
		
		toElement(){
			return "<p>name: "+this.name+"</p><p>age: "+this.age+"</p>";
		}
	}
	
	// when we create a cat class object we use the new keyword as well as the parameters that are
	// defined in the constructor.
	let tesla = new Cat("Tesla", 10);
	// When  we use the `new` keyword, we are taking the class definition and treating it like a template
	// the properties of this class are unique because it becomes and instanceof Cat.
	let boris = new Cat("Boris", 16);
	
	console.log("\nClass Object: ");
	console.log(tesla.toString()); // should be different compared to boris.
	console.log(boris.toString());
	
	// Extends & Super
	// ========================================
	
	// Classes can inherit from other classes, in order to do this we first need a parent object.
	class Media {
	
		constructor(title, author, datePublished) {
			this.title = title;
			this.author = author;
			this.datePublished = datePublished;
		}
	
		toString() {
			return "Media [title=" + this.title + 
			", author=" + this.author + 
			", datePublished=" + this.datePublished +"]";
		}
		
	}
	
	// a `child` class can extend another pre-existing class, this allows us to adopt existing functionality
	// that is commonly shared between classes. In this case, Book is-a type of Media.
	//
	// Book can use all attributes outlined in the Media constructor as well as its own - building upon
	// a preexisting class structure!
	class Book extends Media {
	
		constructor(title, author, datePublished, genre, pageCount) {
			// whilst we need to provide all the attributes in the parent object
			// we use the super keyword to represent the parent constructor
			//
			// as the parent functionality already outlines how to allocate the attributes
			// we can simple use the `super()/constructor method` to pass the respective qualities to the
			// parent definition.
			super(title, author, datePublished);
			this.genre = genre;
			this.pageCount = pageCount;
		}
	
		toString() {
			// as we can see here, despite the attributes title, author and datepublished belonging to super
			// we can use the this keyword as part of the context of our book class to inform
			// the compile we want to extract these particular variables.
			return "Book [title=" + this.title + 
			", author=" + this.author + 
			", datePublished=" + this.datePublished + 
			", genre=" + this.genre + 
			", pageCount=" + this.pageCount + "]";
		}
	}
	
	let book = new Book("Example Book Title","Alex", "20/02/2022", "Educational", 202);
	
	console.log("\nChild class: Extends & Super keywords: ");
	console.log(book.toString());
	
	// Static
	// ========================================
	
	// Not all classes have to use the new keyword in order to access functionality
	// the distinction here is that the static keyword implies that the method belongs to
	// the definition - Not the instance.
	class Calculator {
		static result = 0;
		
		static add(x, y){
			return x + y;
		}		
		static sub(x, y){
			return x - y;
		}		
		static mult(x, y){
			return x * y;
		}		
		static div(x, y){
			return x / y;
		}		
		static mod(x, y){
			return x % y;
		}		
		static expon(x, y){
			return x**y;
		}		
	}
		
	// To clear this logic up, imagine that any class always has a global instance that represents
	// the definition, anything static belongs to the global instance but NEVER to an instance.
	
	// The benefit of a non-static class is that it supports instancing; methods relate to the state of
	// a unique instance: you could have 2 cats, both with different names - but a static method might keep track
	// of all cats
	//
	// let cat = new cat("tesla", 12);
	// 
	// cat.getName(); // this would retrieve the instance name "tesla"
	// Cat.getTotalCats(); // this uses the `Cat` object - not instance to run a static method; likely to retrieve a
	// 					   // static variable value that has been incremented by invoking a constructor!
	
	console.log("\nstatic class context: ");
	console.log("Calculator.mult - 5*5 = " + Calculator.mult(5,5));
	
	sectionEnd();
}

export default oopExample;