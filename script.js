// Assignment code here
const length = ""
const randomLower = "abcdefghijklmnopqrstuvwxyz"
const randomUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const symbols = " !@#$%^&*()"
const numbers = "1234567890"


// Assignment code here
var generatePassword = function() {
 
const length = window.prompt("Pick a number between 8-128 to determine password length.");
console.log(length);

const randomLower = window.prompt("Would you like to add a lowercase letter? Enter YES or NO.");
if (randomLower === "YES" || randomLower === "yes") {
  console.log (String.fromCharCode(Math.floor(Math.random() * 26) + 97));
}

const randomUpper = window.prompt("Would you like to add a lowercase letter? Enter YES or NO");
if (randomUpper === "YES" || randomUpper === "yes") {
  console.log(String.fromCharCode(Math.floor(Math.random()* 26) + 65));
}

const symbols = window.prompt("Would you like to add a sybmol in your password? Enter YES or NO");
if (symbols === "YES" || symbols === "yes") {
  console.log (symbols(Math.floor(Math.random() * symbols.length)));
}

const numbers = window.prompt("Would you like to add a number in your password? Enter YES or NO");
if (numbers === "YES" || numbers === "yes") {
  console.log (String.fromCharCode(Math.floor(Math.random() * 10) + 48));
}

  


};
generatePassword();

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
