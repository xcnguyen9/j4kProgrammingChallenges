var input = "javascript is awesome";
var output = "";

// loop through all the letters of the input string
for (var i = 0; i < input.length; i++) {
	// if the letter is "a", add a "4" to the output string
	if (input[i] === "a") {
		output += "4";
	// if the letter is "e", add a "3" to the output string
	} else if (input[i] === "e") {
		output += "3";
	// if the letter is "i", add a "1" to the output string
	} else if (input[i] === "i") {
		output += "1";
	// if the letter is "o", add a "0" to the output string
	} else if (input[i] === "o") {
		output += "0";
	// else add the original letter to the output string
	} else {
		output += input[i];
	}
}
console.log(output); // j4v4scr1pt 1s 4w3s0m3

