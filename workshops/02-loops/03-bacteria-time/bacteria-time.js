// YOUR CODE BELOW

function bacteriaTime(currentNum, targetNum) {
	if (currentNum > targetNum) return 'targetNum must be larger than currentNum';
	let result = currentNum;
	let count = 0;
	while (result < targetNum) {
		result = result * 2;
		count++;
	}
	count = count * 20;
	return count;
	
}