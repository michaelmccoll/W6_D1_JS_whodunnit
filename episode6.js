// EPISODE 6 ----------------------------------------
let murderer = 'Colonel Mustard';

const changeMurderer = function() {
    murderer = 'Mr. Green';

    const plotTwist = function() {
        murderer = 'Mrs. White';
    }

    plotTwist();
}

const declareMurderer = function () {
    return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// GUESS = "The murderer is Mrs. White".
// As changeMurderer changes the murder variable firstly on line 5, then plotTwist changes it again on line 8
// ACTUAL = Correct