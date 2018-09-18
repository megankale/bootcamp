// YOUR CODE BELOW

function crazyCaps(input) {
	result = '';
	if (typeof input === 'string') {
		for (let i = 0; i < input.length; ++i) {
			if (i % 2 === 0) {

				result += input[i];
			}
			else if (i % 2 === 1) {
				result += input[i].toUpperCase();
			}
		}
	}
	return result;
}