const memoryCard = document.querySelectorAll(".memory-card");
let cardIsFlipped = false;
let firstCard, secondCard;

const flipCard = function () {
  this.classList.toggle("flip");

  if (!cardIsFlipped) {
    cardIsFlipped = true;
    firstCard = this;
  } else {
    cardIsFlipped = false;
    secondCard = this;

    if (firstCard.dataset.name === secondCard.dataset.name) {
      firstCard.removeEventListener("click", flipCard);
      secondCard.removeEventListener("click", flipCard);
    } else {
      setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
      }, 1000);
    }
  }
};

memoryCard.forEach((card) => card.addEventListener("click", flipCard));
