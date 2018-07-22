// declare function areArraysSame with 2 arguments: arrayNum1, arrayNum2
function areArraysSame (arrayNum1, arrayNum2) {
	// if, both arrays have a same length then proceed below
	if (arrayNum1.length === arrayNum2.length) {
		// check whether both arrays have the same numbers in the same order
		for (var i = 0; i < arrayNum1.length; i++) {
			if (arrayNum1[i] !== arrayNum2[i]) {
				return false;
			}
			return true;
		}
	} else { // else, both arrays do not have a same length
		return false;
	}
}