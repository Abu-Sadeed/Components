const keyContainers = document.querySelectorAll(".keys");
let textArea = document.querySelector(".display textarea");
let capsLock = false;
const alphabetCase = document.querySelector(".alphabet-case");

// Change uppercase and lowercase symbol
const changeCase = () => {
  if (capsLock) {
    alphabetCase.value = "⇪";
    capsLock = false;
  } else {
    alphabetCase.value = "⬆";
    capsLock = true;
  }
};

// Add event listener to each key
keyContainers.forEach((keyContainer) => {
  keyContainer.addEventListener("click", (e) => {
    if (!e.path[0].value) return;
    if (e.path[0].value === "⌫") {
      textArea.value = textArea.value.slice(0, -1);
      return;
    }

    if (e.path[0].className === "alphabet-case") {
      changeCase();
      return;
    }
    if (capsLock) {
      textArea.value += e.path[0].value;
      return;
    }
    textArea.value += e.path[0].value.toLowerCase();
  });
});
