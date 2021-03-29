// EPISODE 3 ----------------------------------------
let murderer = 'Professor Plum';

const declareMurderer = function() {
    let murderer = 'Mrs. Peacock';
    return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);

// GUESS = "First Verdict: The murderer is Mrs. Peacock". "Second Verdict: The murderer is Professor Plumb"
// As murderer is defined using let, so the function declareMurderer is allowed to change murderer value to Mrs Peacock
// ACTUAL = Correct