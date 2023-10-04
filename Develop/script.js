// Assignment code here
// Declare values with id
const CharAmtRange = document.getElementById ('CharAmtRange');
const CharAmtNum = document.getElementById ('CharAmtNum');
const form = document.getElementById('passGenForm');
// Password text
const passwordTxtArea = document.getElementById('passwordTxtArea');
// Declare passGen variables
const includeUpperCaseEl = document.getElementById('includeUppCase');
const includeNumEl = document.getElementById('includeNum');
const includeSymEl = document.getElementById('includeSymb');
// ASCII codes declaration for Array loop
const NUMCASE_CHAR_CODE = arrayLowtoHigh(48, 57);
const UPPCASE_CHAR_CODE = arrayLowtoHigh(65, 90);
const LOWCASE_CHAR_CODE = arrayLowtoHigh(97, 122);
const SYMCASE_CHAR_CODE = arrayLowtoHigh(33, 47)
.concat(arrayLowtoHigh(58, 64)
).concat(arrayLowtoHigh(91,96)
).concat(arrayLowtoHigh(123, 126)
);
// Add listener to input and have them sync the other.
CharAmtNum.addEventListener('input',syncCharAmount);
CharAmtRange.addEventListener('input',syncCharAmount);
function syncCharAmount(e) {
  const value = e.target.value
  CharAmtNum.value = value
  CharAmtRange.value = value
}
// Everytime we submit a form a funciont is call to prevent the site from regenerating.
form.addEventListener('submit', e => {
  e.preventDefault()
  // Check for these selectors when building a password:
  const charAmount = CharAmtNum.value;
  const includeUppCase = includeUpperCaseEl.checked;
  const includeNum = includeNumEl.checked;
  const includeSym = includeSymEl.checked;

  const password = generatePassword(charAmount, includeUppCase, includeNum, includeSym);
  passwordTxtArea.value = password;
});
// Make a function to generate a password
function generatePassword(charAmount, includeUppCase, includeNum, includeSym) {
  let charCodes = LOWCASE_CHAR_CODE;

  if (includeUppCase) charCodes = charCodes.concat(UPPCASE_CHAR_CODE);
  if (includeNum) charCodes = charCodes.concat(NUMCASE_CHAR_CODE);
  if (includeSym) charCodes = charCodes.concat(SYMCASE_CHAR_CODE);

// Declare an empty array where the loop is going to store the random
const passwordCharacters = [];
// Loop function that 
for (let i = 0; i < charAmount; ++i){
// Declare a constant. 
// Get a random number between 0 and the user selected amout
// Make sure its an integer using math . floor
const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
// Translate the code to the respective character:
passwordCharacters.push(String.fromCharCode(characterCode));
}
// Make the returned array an string
return passwordCharacters.join('');
}
// Write all special characters 
function arrayLowtoHigh(low, high) {
  const array = []
  for (let i = low; i <= high; ++i) {
    array.push(i)
  }
  return array;
}
