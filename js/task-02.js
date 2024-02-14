const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// const ul = document.getElementById("ingredients");

// for (let ingredient of ingredients) {
//   let li = document.createElement("li");
//   li.innerText = ingredient;
//   ul.appendChild(li);
// }

const ingredientList = document.createDocumentFragment();
ingredients.forEach((ingredient) => {
  const listItem = document.createElement("li");
  listItem.textContent = ingredient;
  listItem.classList.add("item");

  ingredientList.appendChild(listItem);
});

const ulIngredients =
  document.querySelector("ul#ingredients");
ulIngredients.appendChild(ingredientList);