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

imgs.forEach(setImgPosition);

rightBtn.addEventListener("click", () => {
  const currentImage = list.querySelector(".current-img");
  const currentIndex = imgs.indexOf(currentImage);
  if (currentIndex === imgs.length - 1) {
    alert("You are at the end of the gallery");
  } else {
    const nextImage = currentImage.nextElementSibling;
    imageSlider(currentImage, nextImage);
  }
});

leftBtn.addEventListener("click", () => {
  const currentImage = list.querySelector(".current-img");
  const currentIndex = imgs.indexOf(currentImage);
  if (currentIndex === 0) {
    alert("You are at the beginning of the gallery");
  } else {
    const prevImage = currentImage.previousElementSibling;
    imageSlider(currentImage, prevImage);
  }
});
