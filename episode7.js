// EPISODE 7 ----------------------------------------
let murderer = 'Professor Plum';

const changeMurderer = function() {
    murderer = 'Mr. Green';

    const plotTwist = function() {
        let murderer = 'Colonel Mustard';

        const unexpectedOutcome = function() {
            murderer = 'Miss Scarlet';
        }

        unexpectedOutcome();
    }

    plotTwist();
}

const declareMurderer = function() {
    return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// GUESS = "The murderer is Professor Plum"
// As even though changeMurderer can change the murderer value, declareMurderer calls the murderer value on line 24
// ACTUAL = Incorrect, Mr Green returned.