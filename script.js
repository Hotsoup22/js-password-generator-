// Assignment Code
// js calling id from html
var generateBtn = document.querySelector("#generate");

//DECLARE GOLBAL DATA
//list of lowercase letters
var lowercaseLetter = ["a", "b", "c"];
//list of uppercase letters
var upperCaseLetters = ["A", "B", "C"];
//list of special letters
var specialLeters = [" ", "." , "," , ]
//list of number 
var numbers = ["1", "2", "3"];

var passwordLength;


function generatePassword() { 
    // declared an empty starting 'password' string
    var password = "";
    whatPasswordLength();
    wantUpperCase();
    //validated the 'passwordLength' variable value to verify that between  8 and 128
 
    //then display a message to the userthat "please provide a valid password length between 8 and 128".

 // var passwordlength +Check
function whatPasswordLength(){
  passwordLength = prompt(" How many characters? choose between 8-128.");
  if (passwordLength <8) {
    alert ("ERROR: Enter between 8-128!");
    whatPasswordLength();
  }
  if (passwordLength >128){
    alert("ERROR: Enter between 8-128!");
    whatPasswordLength();
  }
  else{
    return passwordLength;
  }
}
console.log(passwordLength + " This is passwordLength");


function wantUpperCase(){
  upperCaseLettersValid = confirm ("do you want Capitol LETTERS? Click OKAY, to continue.. OR CANCEL to cancel password generation.");
  if (upperCaseLettersValid === "ok") { 
  } else if(upperCaseLettersValid === "Cancel"){
  

  } 
    return upperCaseLettersValid;
  
}
console.log(upperCaseLettersValid + " This is the Upper Case letter check")
    // //ask the user if they want upper case' letter and store it in a variable 
    // var wantsUpperCaseLetters = false;
    // //ask the user if they want lower case' letter and store it in a variable 
    // var wantsLowerCaseLetter = false;
    // //ask the user if they want special case' letter and store it in a variable 
    // var wantsSpecialLeters= false;
    // //ask the user if they want numbers and store it in a variable 
    // var wantsNumbers = false;
   
    // if( !wantsLowercase && !wantsUpperCaseLetters && !wantsSpecialLeters && !wantsNumbers) {
      

        //then display a message to the user that "please select at least one character".
        //and then 'return "";'
        
    // }
   
      //DECLARE an empty 'characters' list
      // var empty[""];
  
    // if the user wants wantsUpperCaseLetters
    //THEN combine 'lowercaseLetters' with characters" list
    //AND THEN select on random letter from ' lowercaseLeetters' and append to 'password'


      //repeat per character choice

      //iterate randomly selecting a  charcter from 'characters and appending  it to 'password'

   

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


//pars int google it?
//raondomly select out of a array? 
//math.random google it
//