// YOUR CODE BELOW

function onlyOdds(num) {
	let sum = 0;
	if (num < 1) return 0;
	else for (let i = num; i > 0; --i){
		if (i % 2 === 1)
			sum += i;
		else sum += 0;
	}
	return sum;
}