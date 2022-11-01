const html = document.documentElement;

const checkbox = document.querySelector("input[name=theme]");

checkbox.addEventListener("change", function () {
  if (checkbox.checked) {
    html.classList.toggle("transition");
    html.setAttribute("data-theme", "dark");
  } else {
    html.classList.toggle("transition");
    html.setAttribute("data-theme", "light");
  }
});
