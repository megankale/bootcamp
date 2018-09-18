// ### Last Character

// Define a function `lastCharacter` that accepts two strings as arguments.
// `lastCharacter` should return true if both strings end with the same character.
// Otherwise, `lastCharacter` should return false.


// ```javascript
// lastCharacter('apples', 'pumpkins'); // => true

// lastCharacter('marker', 'pen'); // => false
// ```
// // YOUR CODE BELOW

function lastCharacter(string1, string2) {
	let result;
	if (typeof string1 === 'string' && typeof string2 === 'string') {
		if (string1[string1.length -1] === string2[string2.length-1])
			result = true;
		else result = false;
	}
	return result;
}