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