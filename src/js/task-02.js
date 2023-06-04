"use strict";
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
let list = document.getElementById("ingredients");
ingredients.forEach(function (ingredient) {
  const listElement = document.createElement("li");
  listElement.textContent = ingredient;
  listElement.classList.add("item");
  list.append(listElement);
});
