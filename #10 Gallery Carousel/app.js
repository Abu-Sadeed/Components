let list = document.querySelector(".list");
let imgs = Array.from(list.children);
const rightBtn = document.querySelector(".btn-right");
const leftBtn = document.querySelector(".btn-left");
const imgWidth = imgs[0].getBoundingClientRect().width;

//Arrange Images next to each other
const setImgPosition = (img, index) => {
  img.style.left = imgWidth * index + "px";
};

imgs.forEach(setImgPosition);

rightBtn.addEventListener("click", () => {
  const currentImage = list.querySelector(".current-img");
  const nextImage = currentImage.nextElementSibling;
  currentImage.classList.remove("current-img");
  nextImage.classList.add("current-img");
  list.style.transform = "translateX(-" + nextImage.style.left + ")";
});
