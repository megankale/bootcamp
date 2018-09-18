// YOUR CODE BELOW
function zeroDarkThirty(num) {
	if (num === 0) return NaN;
	let withZ = String(num);
	let result = '';
	for (let i = 0; i < withZ.length; ++i){
		if (withZ[i] != '0') result += withZ[i];
	}
	return Number(result);
}