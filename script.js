const length = ""
const randomLower = "abcdefghijklmnopqrstuvwxyz"
const randomUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"


// Assignment code here
var generatePassword = function() {
 
const length = window.prompt("Pick a number between 8-128 to determine password length.");
console.log(length);

const randomLower = window.prompt("Would you like to add a lowercase letter? Enter YES or NO.");
if (randomLower === "YES" || randomLower === "yes") {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
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
