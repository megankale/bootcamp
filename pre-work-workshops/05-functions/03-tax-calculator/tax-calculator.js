// ### Tax Caclulator

// Define a function `taxCalculator` that accepts the price of an item and a state.
// `taxCalculator` should return the after-tax cost of the item, assuming NY's tax
// is 4% and NJ's sales tax is 6.625%.

// ```javascript
// taxCalculator(100, 'NY'); // => 104
// taxCalculator(100, 'NJ'); // => 106.625
// ```
// // YOUR CODE BELOW

function taxCalculator(price, state) {
	let tax;
	if (state === 'NY') tax = .04;
	else if (state === 'NJ') tax = .06625;
	else return null;

	total = price + price * tax;
	return total;
}