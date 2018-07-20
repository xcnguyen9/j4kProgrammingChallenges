// array of animals
var animals = ["Cat", "Fish", "Lemur", "Komodo Dragon"];
// add the word "awesome" at an existing index in the array
for (var i = 0; i < animals.length; i++) {
	animals[i] = "Awesome " + animals[i];
}
console.log(animals);
//["Awesome Cat", "Awesome Fish", "Awesome Lemur", "Awesome Komodo Dragon"]