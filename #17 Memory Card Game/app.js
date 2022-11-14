const memoryCard = document.querySelectorAll(".memory-card");
let cardIsFlipped = false;
let lockBoard = false;
let firstCard, secondCard;

const flipCard = function () {
  if (lockBoard) return;
  this.classList.toggle("flip");

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
