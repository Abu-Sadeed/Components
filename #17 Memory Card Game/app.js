const memoryCard = document.querySelectorAll(".memory-card");
const reset = document.querySelector("#reset-btn");
let cardIsFlipped = false;
let lockBoard = false;
let firstCard, secondCard;

reset.addEventListener("click", () => {
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
