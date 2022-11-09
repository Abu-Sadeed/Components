const item = document.querySelector("#block");
const vertical = document.querySelector("#position-y");
const horizontal = document.querySelector("#position-x");
const size = document.querySelector("#size");
const shapeSelect = document.querySelector("#shape-select");
const shapeBtn = document.querySelector("#ok-btn");

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
