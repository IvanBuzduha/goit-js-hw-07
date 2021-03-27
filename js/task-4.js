let counter = 0;
let value = document.querySelector('#value');
let buttonClickMunus = document.querySelector('[data-action ="decrement"]');
let buttonClickPlus = document.querySelector('[data-action ="increment"]');
const plusClick = () => {
    counter +=1;
    value.textContent = counter;
    return value;
    
}
const minusClick = ()  =>{
    counter -=1;
    value.textContent = counter;
    return value;
}
buttonClickMunus.addEventListener('click', minusClick);
buttonClickPlus.addEventListener('click', plusClick);