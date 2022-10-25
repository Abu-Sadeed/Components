const mouseCursor = document.querySelector(".cursor");
const navLinks = document.querySelectorAll(".nav-links li");

const cursor = (e) => {
  mouseCursor.style.top = e.pageY + "px";
  mouseCursor.style.left = e.pageX + "px";
};

window.addEventListener("mousemove", cursor);
navLinks.forEach((navLink) => {
  navLink.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow");
    navLink.classList.add("hovered-link");
  });

  navLink.addEventListener("mouseout", () => {
    mouseCursor.classList.remove("link-grow");
    navLink.classList.remove("hovered-link");
  });
});
