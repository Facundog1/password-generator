// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
    // YOUR CODE HERE
    var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
    var numbers = "0123456789";
    var specialCharacters = "!@#$%^*+=-_"
    var chosenCharacter = []
    var passwordLength = Number (prompt("How many characters would you like in your password?"));
    var promptNumber = confirm("Would you like any numbers in your password?");
    var promptSpecial = confirm("Would you like any special characters in your password?");
    var promptUpper = confirm("Would you like any uppercase letters in your password?");
    var promptLower = confirm("Would you like any lowercase characters in your password?")

    if (promptSpecial === true){
        chosenCharacter = chosenCharacter.concat(specialCharacters);
    } 
    if (promptUpper === true){
        chosenCharacter = chosenCharacter.concat(uppercaseCharacters);
    }
    if (promptLower === true){
        chosenCharacter = chosenCharacter.concat(lowercaseCharacters);
    }
    if (promptNumber === true){
        chosenCharacter = chosenCharacter.concat(numbers)
    }
    if (!(passwordLength >= 8 && passwordLength <= 128) ) {
        alert("Try again"); 
        return
    } 
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
