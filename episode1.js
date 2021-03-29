// EPISODE 1 ----------------------------------------
const scenario = {
    murderer: 'Miss Scarlet',
    room: 'Library',
    weapon: 'Rope'
  };
  
const declareMurderer = function() {
    return `The murderer is ${scenario.murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

// GUESS = "The murderer is Miss Scarlet", as line 9 accesses the murderer attribute from the scenario object
// ACTUAL = Correct
