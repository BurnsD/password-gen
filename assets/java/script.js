// Assignment code here
const charAmountRange = document.getElementById('charAmountRange')
const charAmountNumber = document.getElementById('charAmountNumber')
const includeUppercaseElement = document.getElementById('includeUppercase')
const includeNumbersElement = document.getElementById('includeNumbers')
const includeSymbolsElement = document.getElementById('includeSymbols')
const form = document.getElementById('passwordForm')

const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
const NUNBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
const SYMBOLS_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
  arrayFromLowToHigh(58, 64)
).concat(
  arrayFromLowToHigh(91, 96)
).concat(
  arrayFromLowToHigh(123, 126)
)

charAmountRange.addEventListener('input', syncCharacterAmount)
charAmountNumber.addEventListener('input', syncCharacterAmount)

form.addEventListener('submit', e => {
  e.preventDefault()
  const charAmount = charAmountNumber.value
  const includeUppercase = includeUppercaseElement.checked
  const includeNumbers = includeNumbersElement.checked
  const includeSymbols = includeSymbolscaseElement.checked
  const password = generatePassword(charAmount, includeUppercase, includeNumbers, includeSymbols)
})

function generatePassword(charAmount, includeUppercase, includeNumbers, includeSymbols) {
  console.log(LOWERCASE_CHAR_CODES)
}

function arrayFromLowToHigh(low, high){
  const array = []
  for (let i = low; i <= high; i++){
    array.push(i)
  }
  return array
}

function syncCharacterAmount(e) {
  const value =e.target.value
  charAmountNumber.value = value
  charAmountRange.value = value
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
