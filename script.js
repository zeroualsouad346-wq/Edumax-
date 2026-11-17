document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".btn");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      button.classList.add("pulse");
      setTimeout(() => button.classList.remove("pulse"), 250);
    });
  });
});
