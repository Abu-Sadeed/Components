const toggle = document.querySelector(".toggle-btn");
const header = document.querySelector(".main-header");
const overlay = document.querySelector(".overlay");

toggle.addEventListener("click", function () {
  toggle.classList.toggle("open");
  header.classList.toggle("open");
  overlay.classList.toggle("open");
});
