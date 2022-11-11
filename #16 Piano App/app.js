const keys = document.querySelectorAll(".key");

keys.forEach((key) => {
  key.addEventListener("click", () => {
    key.classList.add("active");
    console.log(key.dataset.note);
    const audio = document.getElementById(key.dataset.note);
    audio.currentTime = 0;
    audio.play();
    audio.addEventListener("ended", () => {
      key.classList.remove("active");
    });
  });
});
