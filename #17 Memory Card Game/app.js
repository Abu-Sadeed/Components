const memoryCard = document.querySelectorAll(".memory-card");
const reset = document.querySelector("#reset-btn");
const timer = document.querySelector(".timer");
let cardIsFlipped = false;
let lockBoard = false;
let firstCard, secondCard;
let time = 0;

const startTimer = function () {
  let interval = setInterval(() => {
    time++;
    timer.textContent = time;
    console.log(time);
  }, 1000);
};

startTimer();

const stopTimer = function () {
  clearInterval(interval);
};

reset.addEventListener("click", () => {
  stopTimer();
  memoryCard.forEach((card) => {
    card.classList.remove("flip");
    card.addEventListener("click", flipCard);
  });

  shuffle();
});

const shuffle = function () {
  memoryCard.forEach((card) => {
    let randomPos = (Math.random() * 12) | 0;
    card.style.order = randomPos;
  });
};

shuffle();

const flipCard = function () {
  if (lockBoard) return;
  if (this === firstCard) return;
  this.classList.add("flip");

  if (!cardIsFlipped) {
    cardIsFlipped = true;
    firstCard = this;
    return;
  }

  secondCard = this;

  matchCheck();
};

const matchCheck = function () {
  if (firstCard.dataset.name === secondCard.dataset.name) {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
    resetBoard();
  } else {
    lockBoard = true;
    setTimeout(() => {
      firstCard.classList.remove("flip");
      secondCard.classList.remove("flip");
      resetBoard();
    }, 1000);
  }
};

const resetBoard = function () {
  [cardIsFlipped, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
};

memoryCard.forEach((card) => card.addEventListener("click", flipCard));
