"use strict";
const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");
console.log(nameInput);
console.log(nameInput.placeholder);
console.log(nameInput.value);
console.log(nameOutput);
const handleInput = () => {
  if (nameInput.value === "") {
    nameOutput.textContent = "Anonymous";
  } else nameOutput.textContent = nameInput.value;
};
nameInput.addEventListener("input", handleInput);
