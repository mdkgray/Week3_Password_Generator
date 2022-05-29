// Array section 
var choiceArr = [];
var characterLength = 8;
var specialCharArr = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
var numberArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var upperCaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var password = "";

var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function getPrompts() {
  choiceArr = [];

  characterLength = parseInt(window.prompt("How many characters would you like your password to be? Choose between 8 and 128."));

  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    window.alert("Must be a number and contain between 8 and 128 digits. Please try again");
    return false;
  }
  if (confirmLowercase = confirm("Do you want to include lowercase letters?")) {
    choiceArr = choiceArr.concat(lowerCaseArr);
  }
  if (confirmUppercase = confirm("Do you want to include uppercase letters?")) {
    choiceArr = choiceArr.concat(upperCaseArr);
  }
  if (confirmNumber = confirm("Do you want to include numbers?")) {
    choiceArr = choiceArr.concat(numberArr);
  }
  if (confirmSpecial = confirm("Do you want to include special characters?")) {
    choiceArr = choiceArr.concat(specialCharArr);
  }
  if (!confirmLowercase && !confirmUppercase && !confirmNumber && !confirmSpecial) {
    window.alert("You must select at least one criteria. Please try again.");
    return getPrompts();
  }
  return true;
}

// Start function to generate password
var generatePassword = function () {
  var password = "";
  for(var i = 0; i < characterLength; i++) {
    var randomValue = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomValue];
  }
  return password;
}

function writePassword() {
  var correctPrompts = getPrompts();

  if (correctPrompts == true) {
    var password = generatePassword();
    console.log(password);
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
}