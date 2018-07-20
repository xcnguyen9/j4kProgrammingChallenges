var myCrazyObject = {
"name": "A ridiculous object",
"some array": [7, 9, {purpose: "confusion", number: 123 }, 3.3],
"random animal": "Banana Shark"
};

// Get the number 123 out of this object using one line
myCrazyObject["some array"][2]["number"];
// Another way using dot notation
myCrazyObject["some array"][2].number;
