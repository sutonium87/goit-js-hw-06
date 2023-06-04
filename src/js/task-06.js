"use strict";
const input = document.getElementById("validation-input");
const handleInputBlur = () => {
  if (input.value.length === parseInt(input.dataset.length)) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
  console.log(input.value.length);
  console.log(input.dataset.length);
};
input.addEventListener("blur", handleInputBlur);
