const modal = document.getElementById("myModal");

const openModal = document.getElementById("open");

const closeModal = document.getElementById("close");

openModal.onclick = function() {
  modal.style.display = "block";
}

closeModal.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}




// // MODAL //
// $('.open').on("click", function() {
//   $(".container, .settings").addClass("active"); 
// });

// // close modal //
// $(".close, .container").on("click", function() {
//   $(".container, .settings").removeClass("active");
// });

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// let pwLength = prompt('Choose the length of your password', length);
// if (pwLength) {
//   //between how ever many letters then 
// }
// let checkedSettings = upperCase, lowerCase, symbol, number;
// let upperCase = confirm('Include uppercase?');
// if (upperCase) {
//   //add into password generator
// } else {
//   //don't add capital letters to password
// }
// let lowerCase = confirm('Include lowercase?');
// let number = confirm('Include numbers?');
// let symbol = confirm('Include symbols?');


// let length = ;

