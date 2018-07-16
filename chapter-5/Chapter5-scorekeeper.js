var scores = {};
scores["Lily"] = 0;
scores["Christine"] = 0;
scores["Morgan"] = 0;
scores;
{Lily: 0, Christine: 0, Morgan: 0}
scores["Lily"] += 3;
scores["Christine"] += 10;
scores["Morgan"] += 7;
scores; // {Lily: 3, Christine: 10, Morgan: 7}

//Another way
var scores = { lily: 0, morgan: 0, christine: 0
};
scores["lily"] += 10;
scores["christine"] += 20;
scores.morgan += 50;
scores; // {lily: 10, morgan: 50, christine: 20}

