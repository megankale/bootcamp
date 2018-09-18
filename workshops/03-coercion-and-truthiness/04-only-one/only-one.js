// YOUR CODE BELOW
function onlyOne(val1, val2, val3) {
	if (!!val1 && !val2 && !val3) return true;
	if (!val1 && !!val2 && !val3) return true;
	if (!val1 && !val2 && !!val3) return true;
	else return false;
}