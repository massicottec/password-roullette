// Assignment code here
// Assigns a vairable that javascript can use to affect the html id associated.
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// This function kick starts the process of creating a randomly generated password.
function writePassword() {
  var lowers = confirm('Does your password require lowercase elements?'); // This section prompts the user for various criteria,
  var uppers = confirm('Does your password require uppercase elements?'); // required within their personally randomized password,
  var numbers = confirm('Does your password require numeric elements?'); // and stores the prompts as boolean structures.
  var symbols = confirm('Does your password require special characters?');
  var passwordLength = Number(prompt('Choose a number between 8 and 128 to set set password length.')); // prompts user for how long their password should be.

  var password = generatePassword()
  var passwordText = document.querySelector("#password");
  // Checks to see is the user input for the following variables was correctly input.  If not it displays a confirm popup,
  // stating that the inputs were invalid and please try again.
  if (lowers == false && uppers == false && numbers == false && symbols == false) {
    confirm('Atleast one criteria is required to be selected to continue.\nPlease try again.');
  }

  if (passwordLength < 8 || passwordLength > 128) {
    confirm('The password length that was input was invalid.\nA number between 8 and 128 characters must be selected to continue.\nPlease try again.');
  }

  if (passwordLength >= 8 || passwordLength <= 128) {
    // This function is what will commit the generated password to follow the selected criterias above, to form the finalized output.
    function generatePassword(lower, upper, number, symbol) {
    var randomPassword = "";
    var variationsCount = [lower, upper, number, symbol].length;
      // runs an interative loop to generate a string for each criteria requirement, should the associated variables be true,
      // to then add into the randomPassword variable as a string that can then be sliced upon the final iteration to grab a healthy,
      // amount of all criteria required.  
      for (var i = 0; i < passwordLength; i ++) {
        if (uppers) {
          randomPassword += getRandomUpper();
        }

        if (numbers) {
          randomPassword += getRandomNumber();
        }

        if (symbols) {
          randomPassword += getRandomSymbol();
        }

        if (lowers) {
          randomPassword += getRandomLower();
        }
      }
    // Takes the variables that were added into the randompassword variable as a string and slices out an alotment of variables,
    // to the required length of the requested password.   
    var completePassword = randomPassword.slice(0, passwordLength);
    return completePassword
    }

    passwordText.value = password;
  }  
}
// The following functions all generate a random variable associated to their character type, such that said variable can be then,
// used in the above function.
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random()*26)+97);
}

function getRandomUpper() {
  var uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return uppers[Math.floor(Math.random()* uppers.length)];
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random()*10)+48);
}

function getRandomSymbol() {
  var symbols = "!@#$%^&*";
  return symbols[Math.floor(Math.random()* symbols.length)]
}