var firstRandomNames = ["Lily", "Crystal", "Jessica"];
var secondRandomNames = ["Chance", "Morgan"];
var firstRandomAdjectives = ["perfectionist", "hardworking","cheerful"];
var secondRandomAdjectives = ["childish", "unmotivated", "jealous", "judgmental"];

// Pick a random name from the firstRandomNames array:
var firstRandomName = firstRandomNames[Math.floor(Math.random() * 3)];
// Pick a random name from the secondRandomNames array:
var secondRandomName = secondRandomNames[Math.floor(Math.random() * 2)];
// Pick a random adjective from the firstRandomAdjectives array:
var firstRandomAdjective = firstRandomAdjectives[Math.floor(Math.random() * firstRandomAdjectives.length)];
// Pick a random adjective from the secondRandomAdjectives array:
var secondRandomAdjective = secondRandomAdjectives[Math.floor(Math.random() * secondRandomAdjectives.length)];

// Join all the random strings into a sentence:
var randomSentence = firstRandomName + " is " + firstRandomAdjective + " while " + secondRandomName + " is " + secondRandomAdjective + ".";
randomSentence;

