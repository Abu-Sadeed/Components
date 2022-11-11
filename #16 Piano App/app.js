const keys = document.querySelectorAll(".key");
const whiteKey = document.querySelectorAll(".key.white");
const blackKey = document.querySelectorAll(".key.black");
const WHITE_KEY = ["z", "x", "c", "v", "b", "n", "m"];
const BLACK_KEY = ["s", "d", "g", "h", "j"];

const playKey = (key) => {
  key.classList.add("active");
  const audio = document.getElementById(key.dataset.note);
  audio.currentTime = 0;
  audio.play();
  audio.addEventListener("ended", () => {
    key.classList.remove("active");
  });
};

keys.forEach((key) => {
  key.addEventListener("click", () => {
    playKey(key);
  });
});

document.addEventListener("keydown", (e) => {
  const key = e.key;

  const whiteKeyIndex = WHITE_KEY.indexOf(key);
  const blackKeyIndex = BLACK_KEY.indexOf(key);

  if (whiteKeyIndex > -1) playKey(whiteKey[whiteKeyIndex]);
  if (blackKeyIndex > -1) playKey(blackKey[blackKeyIndex]);
});
