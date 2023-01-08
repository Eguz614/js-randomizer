
var generateBtn = document.querySelector("#generate");
var pwLength = 8;
var pwArr = []
var lower = [ 'a','b','c','d','e'];
var upper = ['A','B','C','D','E'];
var spec = ['!','@','#','$' ];
var num = ['1','2','3','4','5','6','7','8','9','0'];

// This function generates the password based on the size of "pwArr" after the options are confirmed from npcdialog function.

function generatePassword(){
   
  var password = '';
  for( var i = 0; i < pwLength; i++){
// This variable is using a math.floor and math.random to randomly generate a number based of the pwArr length and making sure the number doesn't have a decimal.
    var rando = Math.floor(Math.random() * pwArr.length)   
    password = password + pwArr[rando];
  }
  return password;
}

// this function takes all the info from both the generatepassword() and npcdialog() to paste a password in the <textarea> on the html.
  function writePassword() {
     npcdialog(); 
    var randorino = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = randorino
    
}
 


function npcdialog(){
 
  // Empty array that will act as the value bank for the password generator.

  pwArr = [];
 
  // Sets the number of characters for the password, if the input isn't a number it does nothing. 
  
  pwLength = prompt(" length of password ? (8 - 128)");
 // This prevents the user from going past the initial prompt with an invalid number of characters.
  while(pwLength < 8 || pwLength > 128 ) {
     pwLength = prompt("please enter a numbers between 8-128 ");
  } 
    
  

  // These confirms will merge their content with the empty array "pwArr" when the user clicks ok .
  
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
   
  // After all parameters for the password are checked the finally value bank will be returned .
  
  return pwArr;    
  }
  


generateBtn.addEventListener("click", writePassword);

