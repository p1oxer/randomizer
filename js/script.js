let randomInteger = 0;
let result = document.querySelector('.random__result');
const randomButton = document.querySelector('.random__button');
let minInput = document.querySelector('.random-min');
let maxInput = document.querySelector('.random-max');
let minNumber = parseInt(minInput.value);
let maxNumber = parseInt(maxInput.value);

minInput.addEventListener('input', function(){
   minNumber = parseInt(minInput.value);
   checkInput();
})

maxInput.addEventListener('input', function(){
   maxNumber = parseInt(maxInput.value);
   checkInput();
})
function checkInput(){
   if(parseInt(minInput.value) >= parseInt(maxInput.value)){
      randomButton.setAttribute('disabled', true);
   } else if(minInput.value  == ""){
      randomButton.setAttribute('disabled', true);
   } else if(maxInput.value  == ""){
      randomButton.setAttribute('disabled', true);
   } else {
      randomButton.removeAttribute('disabled');
   }
}
function randomInt(){
   randomInteger = Math.floor(Math.random() * (maxNumber + 1 - minNumber)) + minNumber;
   result.innerText = randomInteger;
}

randomButton.addEventListener('click', randomInt);
