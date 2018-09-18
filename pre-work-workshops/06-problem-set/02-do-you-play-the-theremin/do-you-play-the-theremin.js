// ### Do You Play the Theremin

// Define a function `doYouPlayTheTheremin` that accepts a string as an argument.
// `doYouPlayTheTheremin` should return true if the inputted string starts with the
// letters `s` or `S`. Otherwise, `doYouPlayTheTheremin` should return false.

// ```javascript
// doYouPlayTheTheremin('Griffin'); // => false
// doYouPlayTheTheremin('Scott'); // => true
// ```
// // YOUR CODE BELOW

function doYouPlayTheTheremin(name) {
	let result;
	if (typeof name === 'string') { 
	switch (name[0]) {
		case 's':
			result = true;
			break;
		case 'S':
			result = true;
			break;
		default:
			result = false;
	}
	return result;
}
}
