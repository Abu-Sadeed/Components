let list = document.querySelector(".list");
let imgs = Array.from(list.children);
const rightBtn = document.querySelector(".btn-right");
const leftBtn = document.querySelector(".btn-left");
const imgWidth = imgs[0].getBoundingClientRect().width;

//Arrange Images next to each other
const setImgPosition = (img, index) => {
  img.style.left = imgWidth * index + "px";
};

//Image slider functionality
const imageSlider = (firstImg, secondImg) => {
  firstImg.classList.remove("current-img");
  secondImg.classList.add("current-img");
  list.style.transform = "translateX(-" + secondImg.style.left + ")";
};

//Hide slide buttons
const hideButton = (index) => {
  if (index === 0) {
    leftBtn.classList.add("hidden");
    rightBtn.classList.remove("hidden");
  } else if (index === imgs.length - 1) {
    rightBtn.classList.add("hidden");
    leftBtn.classList.remove("hidden");
  } else {
    leftBtn.classList.remove("hidden");
    rightBtn.classList.remove("hidden");
  }
};

imgs.forEach(setImgPosition);

rightBtn.addEventListener("click", () => {
  const currentImage = list.querySelector(".current-img");
  const nextImage = currentImage.nextElementSibling;
  const currentIndex = imgs.indexOf(nextImage);
  hideButton(currentIndex);
  imageSlider(currentImage, nextImage);
});

leftBtn.addEventListener("click", () => {
  const currentImage = list.querySelector(".current-img");
  const prevImage = currentImage.previousElementSibling;
  const currentIndex = imgs.indexOf(prevImage);
  hideButton(currentIndex);
  imageSlider(currentImage, prevImage);
});
