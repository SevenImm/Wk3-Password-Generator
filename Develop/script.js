// Assignment code here
// Declare values with id
const CharAmtRange = document.getElementById ('CharAmtRange');
const CharAmtNum = document.getElementById ('CharAmtNum');
// Add listener to input and have them sync the other.
CharAmtNum.addEventListener('input',syncCharAmount);
CharAmtRange.addEventListener('input',syncCharAmount);
function syncCharAmount(e) {
  const value = e.target.value
  CharAmtNum.value = value
  CharAmtRange.value = value
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
