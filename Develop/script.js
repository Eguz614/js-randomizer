// Assignment Code
var generateBtn = document.querySelector("#generate");
var pwLength = 8;
var pwArr = []
var lower = [ 'a','b','c','d','e']
var upper = ['A','B','C','D','E']
var spec = ['!','@','#','$' ]
var num = [1,2,3,4,5]
//Defining generatePassword Function/
function generatePassword(){
 
    npcdialog();
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  


}

// Write password to the #password input
  function writePassword() {
  

}
 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function npcdialog(){

  
  pwLength = prompt(" length of password ? (8 - 128)");

if (confirm( "Are lowercase ok?")) {
  pwArr = pwArr.concat(lower);
} 
if (confirm( "Are uppercase ok?")) {
  pwArr = pwArr.concat(upper);
} 
if (confirm( "Are special characters ok?")) {
  pwArr = pwArr.concat(spec);
} 
if (confirm( "Are numbers ok?")) {
  pwArr = pwArr.concat(num);
} 

}
