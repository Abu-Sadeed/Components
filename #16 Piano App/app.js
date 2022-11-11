const keys = document.querySelectorAll(".key");

keys.forEach((key) => {
  key.addEventListener("click", () => {
    console.log(key.dataset.note);
    document.getElementById(key.dataset.note).play();
  });
});
