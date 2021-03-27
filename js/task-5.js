let input = document.querySelector('input');
let output = document.getElementById('name-output');
const word = 'незнакомец';
output.textContent = word;

const inputChange = (e) =>{
  if (e.target.value.length > 0) {
    
    output.textContent = e.target.value;
  }
  else {
    output.textContent = word;
  }

  } 
input.addEventListener('input', inputChange);