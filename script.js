// Assignment Code
// js calling id from html
var generateBtn = document.querySelector("#generate");

//DECLARE GOLBAL DATA
//list of lowercase letters
var lowercaseLetter = ["a", "b", "c"];
//list of uppercase letters
var uppercaseLetters = ["A", "B", "C"];
//list of special letters
var specialLeters = [" ", "." , "," , ]
//list of number 
var numbers = ["1", "2", "3"];

//promt


  function generatePassword() { 
    var password = "asdasd";
    console.log(password);

    // asked the user how long the passworkd will be and store their answer in a
    //variable called "passwordLength"
    var passwordLength = 8;
    console.log(passwordLength);
    //validated the 'passwordLength' variable value to verify that between  8 and 128
  
    // ask the user to make a choice on if they want to include each type of character.
    var wantsLower = false;
    var wantsLower = false;
    var wantsLower = false;
    var wantsLower = false;


  
    return password;
  }
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  }

  // *WHEN I click the button to generate a password

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);


//GIVEN I need a new, secure password

//THEN I am presented with a series of prompts for password criteria
// - promts with boxes to check
//WHEN prompted for password criteria
//-the boxes to check
//THEN I select which criteria to include in the password
//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters
//WHEN prompted for character types to include in the password
//THEN I choose lowercase, uppercase, numeric, and/or special characters
//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected
//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria
//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page


//