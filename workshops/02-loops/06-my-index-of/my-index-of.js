function myIndexOf(source, searchValue, startIdx) {

	// if user didn't pass in startIdx, define it by default as 0
	if (startIdx === undefined) {
	  startIdx = 0;
	}
  
	for (let i = startIdx; i <= source.length - searchValue.length; i++) {
  
	  // get a substring from the source, starting at i, with the same length as the search value
	  let substring = source.slice(i, i + searchValue.length);
  
	  // if the substring matches the search value...
	  if (substring === searchValue) {
  
		// ...return the current index
		return i;
	  }
	}
  
	// if we get past the end of the for loop, we never found a match and can return -1
	return -1;
  }
