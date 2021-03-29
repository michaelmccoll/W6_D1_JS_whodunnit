// EPISODE 2 ----------------------------------------
const murderer = 'Professor Plum';

const changeMurderer = function() {
    murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
    return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// GUESS = "The murderer is Professor Plum"
// As murderer originally assigned on line 2, then the changeMurderer function, tries to re-assigns the murderer variable, however not allowed as a const
// ACTUAL = Error message from line 5, kind of right guess