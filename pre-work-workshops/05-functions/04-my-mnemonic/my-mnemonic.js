// ### My Mnemonic

// Write a function `myMnemonic` that accepts up to four strings. `myMnemonic`
// should return a new string of the first characters for each string argument.

// Note that the user may not pass in all four strings!

// ```javascript
// myMnemonic('Must', 'Accept', 'Sugar', 'Happiness'); // => MASH
// myMnemonic('We', 'Eat', 'Eggs'); // => WEE
// ```// YOUR CODE BELOW

function myMnemonic(...words) { //rest operator
	let result = '';
	for (let i = 0; i < words.length; ++i){
		const input = words[i];
		const char = input[0];
		result += char;
	} 
	return result;
}