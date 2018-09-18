// YOUR CODE BELOW

function isTruthy(value) {
	if (Boolean(value) === true)
		return true;
	
	else if ((Boolean(value) === false) && (value === false))
		return 'The boolean value false is falsey';
	else if ((Boolean(value) === false) && (value === null))
		return 'The null value is falsey';
	else if ((Boolean(value) === false) && (value === undefined))
		return 'undefined is falsey';
	else if ((Boolean(value) === false) && (value === 0))
		return 'The number 0 is falsey (the only falsey number)';
	else ((Boolean(value) === false) && (value === ""))
		return 'The empty string is falsey (the only falsey string)';
}
