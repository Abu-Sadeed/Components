const memoryCard = document.querySelectorAll(".memory-card");
const reset = document.querySelector("#reset-btn");
const appendTens = document.getElementById("tens");
const appendSeconds = document.getElementById("seconds");
let cardIsFlipped = false;
let lockBoard = false;
let firstCard, secondCard;
let time = 0;
let timerInterval;
let seconds = 0;
let tens = 0;

const startTimer = function () {
  tens++;

  if (tens <= 9) {
    appendTens.innerHTML = "0" + tens;
  }

  if (tens > 9) {
    appendTens.innerHTML = tens;
  }

  if (tens > 99) {
    seconds++;
    appendSeconds.innerHTML = "0" + seconds;
    tens = 0;
    appendTens.innerHTML = "0" + 0;
  }

  if (seconds > 9) {
    appendSeconds.innerHTML = seconds;
  }
};

const countScore = function () {
  clearInterval(timerInterval);
  timerInterval = setInterval(startTimer, 10);
};

countScore();

const resetTimer = function () {
  clearInterval(timerInterval);
  tens = "00";
  seconds = "00";
  appendTens.innerHTML = tens;
  appendSeconds.innerHTML = seconds;
  countScore();
};

const stopTimer = function () {
  clearInterval(timerInterval);
};

reset.addEventListener("click", () => {
  resetTimer();
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
