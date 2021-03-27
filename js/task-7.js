let input = document.querySelector('#font-size-control');
let span = document.querySelector('#text');
const handRange = (event) => {    
  span.style.fontSize = event.currentTarget.value + "px";
}
input.addEventListener('input', handRange);