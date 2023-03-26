const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


// const item =ingredients.forEach(ingredien => {
//   const ul = document.querySelector('#ingredients')
//   const li = document.createElement("li")
//   li.textContent = ingredien
//   li.classList.add('item')
//   ul.append(li)
// })


const ul = [...ingredients].map(element => {
  const liElement = document.createElement('li');
  liElement.classList.add('item');
  liElement.textContent = element;
  return liElement;
});
const ulIngredients = document.querySelector('#ingredients');
ulIngredients.append(...ul);
console.log(ulIngredients);
