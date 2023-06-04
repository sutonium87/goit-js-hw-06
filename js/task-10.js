"use strict";
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const boxesElement = document.getElementById("boxes");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");

const createBoxes = (amount) => {
  boxesElement.innerHTML = "";
  let width = 30;
  let height = 30;

  for (let index = 0; index < amount; index++) {
    const divElement = document.createElement("div");
    divElement.style.width = width + "px";
    divElement.style.height = height + "px";
    divElement.style.backgroundColor = getRandomHexColor();
    boxesElement.append(divElement);
    width += 10;
    height += 10;
  }
};

const destroyBoxes = () => {
  boxesElement.innerHTML = "";
};

createBtn.addEventListener("click", function () {
  const inputNumber = document.querySelector('input[type="number"]');
  const amount = parseInt(inputNumber.value);
  createBoxes(amount);
});
destroyBtn.addEventListener("click", destroyBoxes);
