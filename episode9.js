// EPISODE 9 ----------------------------------------
let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

// GUESS = "The murderer is Professor Plum"
// As it takes murderer value from line 2, the IF function doesn't return anything or acts as a function
// ACTUAL = Correct