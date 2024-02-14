const categlist =
document.querySelectorAll("ul#categories li.item").length;
console.log(`Number of categories: ${categlist}`);

const categories =
  document.querySelectorAll("ul#categories li.item");

categories.forEach((category) => {

const header = category.querySelector("h2").innerText;

const elements = category.querySelectorAll("ul li");

const elementCount = elements.length;

console.log(`Category: ${header}`);
console.log(`Elements: ${elementCount}`);

});
