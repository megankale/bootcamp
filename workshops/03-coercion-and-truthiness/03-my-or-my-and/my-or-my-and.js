// YOUR CODE BELOW
function myOr(val1, val2, val3) {
	if (Boolean(val1) === true) return val1;
	else if (Boolean(val2) === true) return val2;
	else if (Boolean(val3) === true) return val3;
	else { return val3 };
}

function myAnd(val1, val2, val3) {
	if (Boolean(val1) === false) return val1;
	else if (Boolean(val2) === false) return val2;
	else if (Boolean(val3) === false) return val3;
	else { return val3 };
}