const keyContainers = document.querySelectorAll(".keys");
let textArea = document.querySelector(".display textarea");

keyContainers.forEach((keyContainer) => {
  keyContainer.addEventListener("click", (e) => {
    if (!e.path[0].value) return;
    if (e.path[0].value === "⌫") {
      textArea.value = textArea.value.slice(0, -1);
      return;
    }

    textArea.value += e.path[0].value;
  });
});
