// script for counter logic

/* Selecting the element with the id of display. */
let display = document.querySelector("#display");

/* Declaring a variable called value and assigning it a value of 0. */
let value = 0;

/* A function that is being called when the button is clicked. */
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

/* Toggling the background color and the text color. */
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
