const ulEl = document.querySelector('ul');
const allLi = document.querySelectorAll('li.item')
console.log(`В списке ${document.querySelector('ul').id}: ${allLi.length} категории.`);

const titleEl = document.querySelector('h2');
allLi.forEach(el => {
    console.log(`Категория: ${el.querySelector('h2').textContent} \nКоличество элементов: ${el.querySelectorAll('li').length}`);
});