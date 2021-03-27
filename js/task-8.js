let number = document.querySelector('[type="number"]');
let render = document.querySelector('[data-action="render"]');
let destroy = document.querySelector('[data-action="destroy"]');
//console.log(destroy,render,number);
const getAmount = () => {
  const amount = Number(number.value);
  document.querySelector('[type="number"]').value = '';//уберает значение с иипута
  makeBoxes(amount);
}
const makeBoxes = (amount) => {
  let basicSize = 30;
  let basicSizeFont = 12;
  for (let i = 0; i < amount; i++) {  
    let size = basicSize + i * 10;
    let sizeFont = basicSizeFont + i*2 ;
    let div = document.createElement('div');   
    div.style.cssText = `display: flex; justify-content: center; align-items: center;  margin: 10px; margin-left: 40px; width: ${size}px; height: ${size}px; background-color: rgba( ${random()} , ${random()} , ${random()} );font-size: ${sizeFont}px; font-weight: 700; color: #ffff; `;
    boxes.appendChild(div);
    div.insertAdjacentHTML('afterbegin', `<p>${i+1}</p>`);
  }
}
const destroyBoxes = () => {
  boxes.innerHTML = '';
}
const random = () => {
    return Math.floor(Math.random() * 256);
}
render.addEventListener('click', getAmount);
destroy.addEventListener('click', destroyBoxes);

