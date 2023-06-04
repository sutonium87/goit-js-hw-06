"use strict";
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const changeColorBtn = document.querySelector(".change-color");
const bodyElement = document.body;
const spanElement = document.querySelector(".color");
const clickHandle = () => {
  bodyElement.style.backgroundColor = getRandomHexColor();
  spanElement.textContent = getRandomHexColor();
};
changeColorBtn.addEventListener("click", clickHandle);
