"use strict";
let counterValue = 0;
const value = document.getElementById("value");
const deBtn = document.querySelector(
  '#counter button[data-action="decrement"]'
);
const inBtn = document.querySelector(
  '#counter button[data-action="increment"]'
);

const handleDeBtnClick = () => {
  counterValue -= 1;
  value.textContent = `${counterValue}`;
};
const handleInBtnClick = () => {
  counterValue += 1;
  value.textContent = `${counterValue}`;
};

deBtn.addEventListener("click", handleDeBtnClick);
inBtn.addEventListener("click", handleInBtnClick);
