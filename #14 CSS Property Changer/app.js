const item = document.querySelector("#block");
const vertical = document.querySelector("#position-y");
const horizontal = document.querySelector("#position-x");
const size = document.querySelector("#size");

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
