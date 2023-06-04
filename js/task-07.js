"use strict";
const input = document.getElementById("font-size-control");
const textSpan = document.getElementById("text");
const handleInput = () => {
  const fontSize = input.value;
  console.log(fontSize);
  textSpan.style.fontSize = fontSize + "px";
};
input.addEventListener("input", handleInput);
