const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ulIngr = document.querySelector('#ingredients');
let ingr = ingredients.map(el => {
    let liIngr = document.createElement('li');
    liIngr.textContent = el;
    return liIngr;
 })
ulIngr.append(...ingr); //заполняет все li за одну операцию