// Assignment code here
var passwordCriteria = []; // An array used for storing the user's selected requirements
var passwordLength = 0; // 
var passwordSelections = [
  {A: 'A', B: 'B', C: 'C', D: 'D', E: 'E', F: 'F', G: 'G', H: 'H', I: 'I', J: 'J', K: 'K', L: 'L', M: 'M', N: 'N', O: 'O', P: 'P', Q: 'Q', R: 'R', S: 'S', T: 'T', U: 'U', V: 'V', W: 'W', X: 'X', Y: 'Y', Z: 'Z'},
  {a: 'a', b: 'b', c: 'c', d: 'd', e: 'e', f: 'f', g: 'g', h: 'h', i: 'i', j: 'j', k: 'k', l: 'l', m: 'm', n: 'n', o: 'o', p: 'p', q: 'q', r: 'r', s: 's', t: 't', u: 'u', v: 'v', w: 'w', x: 'x', y: 'y', z: 'z'},
  {1: '1', 2: '2', 3: '3', 4: '4', 5: '5', 6: '6', 7: '7', 8: '8', 9: '9', 0: '0'},
  {ex: '!', at: '@', hash: '#', cash: '$',  per: '%', hat: '^', amb: '&', ast: '*'}
];

// Prompts users for what there password must include.
function criteria() {
  passwordCriteria.push(confirm('Does your password require lowercase elements?'));
  passwordCriteria.push(confirm('Does your password require uppercase elements?'));
  passwordCriteria.push(confirm('Does your password require numeric elements?'));
  passwordCriteria.push(confirm('Does your password require special characters?'));
  passwordLength = Number(prompt('Choose a number between 8 and 128 to set set password length.'));
  console.log(passwordLength);
};
// console.log(passwordCriteria);
console.log(passwordLength);


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", criteria);
