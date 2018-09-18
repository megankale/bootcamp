// YOUR CODE BELOW
function mySlice(originalString, startIdx, endIdx) {
	result = '';
	if (startIdx === undefined) return originalString;
	else if (endIdx === undefined) {
		for (let i = startIdx; i < originalString.length; ++i){
			result += originalString[i];
		}
		return result;
	}
	else for (let i = startIdx; i < (endIdx); ++i){
		result += originalString[i];
	}
	return result;
	
}