"use strict";
const categories = document.querySelectorAll(".item");
// 1.
let index = 1;
for (; index < categories.length; index++) {}
console.log(`Number of categories: ${index}`);
// 2.
for (let index = 0; index < categories.length; index++) {
  let elementTitle = categories[index].firstElementChild;
  let elements = elementTitle.nextElementSibling;
  console.log(`Category:${elementTitle.textContent}`);
  console.log(`Elements: ${elements.childElementCount}`);
}
