//variables for generating password
var optArr = [];
var lowerCaseArr =['a','b','d','e','f','g','hi','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCaseArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numbersArr =['1','2','3','4','5','6','7','8','9','0' ];
var specialCharArr = ['@','!','#','$','%','^','&','*','()','_','+'];


var generateBtn = document.querySelector("#generate");

//creating variable to store generated password
function writePassword() {
  var possiblePassword = passwordPrompt();
  var passwordText = document.querySelector("#password");
  if(possiblePassword) {
    var newpassword = generatePassword();
    passwordText.value = newpassword;
   
  }else{
    passwordText.value = '';
  }
}
 //generating password
 function generatePassword() {
  var password = "";
  for (var i = 0; i<charLength; i++){
    var randomIndex = Math.floor(Math.random() * optArr.length);
    password = password + optArr[randomIndex];
  }
  return password;
}

 function passwordPrompt() {
    optArr = [];
   charLength = window.prompt('How many characters do you want for your password between 8-128?');
  if (charLength >= 8 || charLength <= 128) {
    alert('Your password will be ' + charLength +  ' character long');
  } else  {
    alert('Your password must be a number between 8-128. Please try again');
    return false;
  }
  if (confirm('Would you like to include lowercase letters in your password?')) {
      optArr = optArr.concat(lowerCaseArr);
 }
 
 if (confirm('Would you like to include uppercase letters in your password?')) {
 optArr = optArr.concat(upperCaseArr);
}

if (confirm('Would you like to include numbers in your password?')){
optArr = optArr.concat(numbersArr);
}

if (confirm('Would you like to include special characters in your password?')){
optArr = optArr.concat(specialCharArr);
}
return true ;
 }
 



generateBtn.addEventListener("click", writePassword);



