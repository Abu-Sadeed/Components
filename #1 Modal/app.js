var openBtn = document.querySelector(".open");
var modalContainer = document.querySelector(".modal-container");
var modalBtn = document.querySelector(".modal-btn");

openBtn.addEventListener("click", function () {
  modalContainer.classList.add("show");
});

modalBtn.addEventListener("click", function () {
  modalContainer.classList.remove("show");
});
