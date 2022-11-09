const item = document.querySelector("#block");
const vertical = document.querySelector("#position-y");
const horizontal = document.querySelector("#position-x");
const size = document.querySelector("#size");
const shapeSelect = document.querySelector("#shape-select");
const shapeBtn = document.querySelector("#ok-btn");
const rgbaR = document.querySelector("#rgba-r");
const rgbaG = document.querySelector("#rgba-g");
const rgbaB = document.querySelector("#rgba-b");
const rgbaA = document.querySelector("#rgba-a");
const color = document.querySelector(".rgba-container");
const colorInput = color.querySelectorAll("input");

// Positioning
vertical.addEventListener("change", function () {
  item.style.top = vertical.value + "px";
});

horizontal.addEventListener("change", function () {
  item.style.left = horizontal.value + "px";
});

// Size
size.addEventListener("change", function () {
  item.style.transform = "scale(" + size.value + ")";
});

// Shape
shapeBtn.addEventListener("click", function () {
  let shape = shapeSelect.value;
  if (shape === "1") {
    item.style.borderRadius = "0";
  } else if (shape === "2") {
    item.style.borderRadius = "50%";
  }
});

// Color
colorInput.forEach(function (input) {
  input.addEventListener("change", function () {
    item.style.backgroundColor =
      "rgba(" +
      rgbaR.value +
      "," +
      rgbaG.value +
      "," +
      rgbaB.value +
      "," +
      rgbaA.value +
      ")";
  });
});
