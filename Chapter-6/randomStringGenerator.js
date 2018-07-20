var alphabet = "abcdefghijklmnopqrstuvwxyz";
var randomString = "";
while (randomString.length < 6) {
	// create random index from var alphabet
	var randomIndex = alphabet[Math.floor(Math.random() * alphabet.length)];
	randomString += randomIndex;
}
console.log(randomString);