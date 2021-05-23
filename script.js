// Assignment Code
// js calling id from html
var generateBtn = document.querySelector("#generate");

//DECLARE GOLBAL DATA
//list of lowercase letters
var lowerCaseLetters = ["a", "b", "c"];
//list of uppercase letters
var upperCaseLetters = ["A", "B", "C"];
//list of special letters
var specialLetters = ["/.,()"];
//list of number
var numbers = ["1", "2", "3"];

var passwordLength;

var upperCaseLettersValid;

//validated the 'passwordLength' variable value to verify that between  8 and 128

//then display a message to the userthat "please provide a valid password length between 8 and 128".

// var passwordlength +Check
function whatPasswordLength() {
  passwordLength = prompt(" How many characters? choose between 8-128.");

  if (passwordLength < 8) {
    alert("ERROR: Enter between 8-128!");
    whatPasswordLength();

  }else if (passwordLength > 128) {
    alert("ERROR: Enter between 8-128!");
    whatPasswordLength();
  }
  return passwordLength;
}


//ask the user if they want upper case letters and returns a boolean.
function wantUpperCase() {
  upperCaseLettersValid = prompt("do you want Capitol LETTERS? Yes or NO");
  if (upperCaseLettersValid === "yes" || upperCaseLettersValid === "y") {
    upperCaseLettersValid = true;
    return upperCaseLettersValid;
  } else if (upperCaseLettersValid === "no") {
    upperCaseLettersValid = false;
    
  }
  return upperCaseLettersValid;
}

//ask the user if they want special letters and returns a boolean.
function wantSpecialLetters() {
  specialLettersValid = prompt("do you want special letters? Yes or NO");
  if (specialLettersValid === "yes" || specialLettersValid === "y") {
    specialLettersValid = true;
    return specialLettersValid;
  } else if (specialLettersValid === "no" || specialLettersValid === "n") {
    specialLettersValid = false;
    
  }
  return specialLettersValid;
}




//generates password using multiple funcnctions. a for loop is used to pull from my arrays and randomly ++1.

function generatePassword() {
  
  whatPasswordLength();
  console.log(passwordLength + " This is passwordLength");
  wantUpperCase();
  console.log(upperCaseLettersValid + " This is the Upper Case letter check");
  wantSpecialLetters();
  console.log(specialLettersValid + " This is the special letter check");

  var characters = lowerCaseLetters;
  var password = "";

  if (upperCaseLettersValid && specialLettersValid) {
    characters  += upperCaseLetters += specialLetters;
    
  } else if (specialLettersValid){
    characters += specialLetters;
  } else if (upperCaseLettersValid) {
    characters += upperCaseLetters;
  } else {
    characters === lowerCaseLetters
  }
  //a for loop is used to pull from my characters var and randomly ++1.
  for (var i =0; i < passwordLength; i++){
    password += characters.charAt(Math.floor(Math.random() *characters.length));
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

