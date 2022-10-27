const button = document.querySelector(".switch");
const body = document.querySelector("body");
const color = document.querySelector(".color");

// Random color generator
function randomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

// Change color
button.addEventListener("click", function () {
  body.style.backgroundColor = randomColor();
  color.textContent = randomColor();
});
