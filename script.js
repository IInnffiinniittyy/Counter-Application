// script for counter logic

let display = document.querySelector("#display");

let value = 0;

document.querySelector("#decrement").addEventListener("click", () => {
  value--;
  display.innerHTML = value;
});

document.querySelector("#reset").addEventListener("click", () => {
  value = 0;
  display.innerHTML = value;
});

document.querySelector("#increment").addEventListener("click", () => {
  value++;
  display.innerHTML = value;
});

// script for the toggling

let toggle = document.querySelector("#toggle");
let body = document.querySelector("body");

toggle.addEventListener("click", function () {
  this.classList.toggle("bi-moon");
  if (this.classList.toggle("bi-brightness-high-fill")) {
    body.style.background = "rgb(255, 132, 100)";
    body.style.color = "black";
    body.style.transition = "2s";
  } else {
    body.style.background = "black";
    body.style.color = "white";
    body.style.transition = "2s";
  }
});
