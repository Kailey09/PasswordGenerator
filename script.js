// Assignment code here
const length = ""
const randomLower = "abcdefghijklmnopqrstuvwxyz"
const randomUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//                   012 ..                   25
const symbols = " !@#$%^&*()"
const numbers = "1234567890"


// Assignment code here
var generatePassword = function() {
 
var length = window.prompt("Pick a number between 8-128 to determine password length.");
var result = "";

for(i = 0; i < length; i++){

  var randomIndex = Math.floor(Math.random() * 26);
  var randomChar = randomUpper[randomIndex];

  result = result + randomChar;
}

var includesLowercase = window.confirm("Would you like to add a lowercase letter? Enter YES or NO.");

var includesUppercase = window.confirm("Would you like to add a lowercase letter? Enter YES or NO");

var includesSymbols = window.confirm("Would you like to add a sybmol in your password? Enter YES or NO");

var includesNumbers = window.confirm("Would you like to add a number in your password? Enter YES or NO");



return result;
};


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
