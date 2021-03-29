// EPISODE 4 ----------------------------------------
let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
    let suspectThree = 'Colonel Mustard';
    return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);
console.log(`Suspect three is ${suspectThree}.`);

// GUESS = "The suspsects are Miss Scarlet, Professor Plum, Colonel Mustard". "Suspect three is Mrs. Peacock."
// As declareAllSuspects changes suspectThree. When suspectThree called on line 11, it accesses this iteration on line 4, outside the function
// ACTUAL = Correct