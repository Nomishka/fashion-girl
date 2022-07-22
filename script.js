var css = document.querySelector("h2");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var gradient = document.getElementById("gradient");
var button = document.querySelector("button");

function setGradient() {
    gradient.style.background =  "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = gradient.style.background + ";";
}

function setBackground() {
    color1.value = randomColor();
    color2.value = randomColor();
    setGradient();
} 

function randomColor () {
    let hexColor = Math.random().toString(16);
    hexColor = "#" + hexColor.slice(2, 8);
    return hexColor;
}

setGradient();

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", setBackground);





