// ### Greeting

// Define a function `greeting` that accepts an optional string argument called
// name. `greeting` should return a personalized string if the name is present.

// ```javascript
// greeting('Sadie'); // => Hello Sadie!
// greeting(); // => Hello!
// ```// YOUR CODE BELOW

function greeting(name) {
	let result = '';
	if (name != undefined) { result = "Hello " + name + "!"; }
	else { result = "Hello!"; }
	return result;
}