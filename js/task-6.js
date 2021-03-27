let validInput = document.querySelector('#validation-input');
const focusValidInput = () => {
    console.log(`Введено: ${validInput.value.length} символа`);  
    if (Number(validInput.getAttribute('data-length')) !== validInput.value.length) {
      validInput.classList.remove('valid');
    validInput.classList.add('invalid');
  } else {
    validInput.classList.remove('invalid');
    validInput.classList.add('valid');
  }
};
validInput.addEventListener('blur', focusValidInput ); //input работает отлично

