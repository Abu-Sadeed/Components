const slides = document.querySelectorAll(".slide");
const indicators = document.querySelectorAll(".indicator-img");

//remove active class from all slides
const removeActiveClasses = () => {
  indicators.forEach((indicator) => {
    indicator.classList.remove("active");
  });

  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
};

indicators.forEach((indicator) => {
  indicator.addEventListener("click", () => {
    removeActiveClasses();
    indicator.classList.toggle("active");
    const id = indicator.getAttribute("data-id");
    const activeSlide = slides[id];
    activeSlide.classList.toggle("active");
  });
});
