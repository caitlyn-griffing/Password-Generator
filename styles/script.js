 // --- MY MODAL OPEN AND CLOSE FUNCTIONALITY --- //

const modal = document.getElementById("myModal");

const openModal = document.getElementById("open");

const closeModal = document.getElementById("close");

openModal.onclick = function() {
  modal.style.display = "block";
}

closeModal.onclick = function() {
  modal.style.display = "none";
}

// Closes (hides) modal when confirm preferences (id='generate' [below genereateEl]) button is clicked //
window.onclick = function(event) {
  if (event.target === generateEl) {
    modal.style.display = "none";
  }
}

const resultEl = document.getElementById('passwordResult');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');

// TODO: Get copy/clipboard option to work
// const copy = document.getElementById('copy');

const randomPassword = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
} 

// TODO: Get copy/clipboard option to work
// copy.addEventListener('click', () => {
//   const textarea = document.createElement('textarea');
//   const password = resultEl.innerText;

//   if(!password) { return; }

//   textarea.value = password;
//   document.body.appendChild(textarea);
//   textarea.select();
//   document.execCommand('copy');
//   textarea.remove();
//   alert('Password copied to clipboard');
// });

// click event listener for generateEl
generateEl.addEventListener('click', () => {
  const length = +lengthEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber= numbersEl.checked;
  const hasSymbol = symbolsEl.checked;
  
  resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});


function generatePassword(lower, upper, number, symbol, length) {
  let generatePassword = '';
  const typesCount = lower + upper + number + symbol;
  const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);

  if(typesCount === 0) {
    return '';
  }

  for(let i = 0; i < length; i += typesCount) {
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0];
      generatePassword += randomPassword[funcName]();
    });
  }

  // slice 
  const finalPassword = generatePassword.slice(0, length);

  return finalPassword;
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}[]=<>/,.'
  return symbols[Math.floor(Math.random() * symbols.length)];
}

