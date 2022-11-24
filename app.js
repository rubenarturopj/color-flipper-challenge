const colors = ["darkmagenta", "teal", "tomato", "whitesmoke", "peru", "salmon", "plum", "palegreen", "steelblue", "slategrey", "lemonchiffon", "khaki", "lightcoral", "lightpink", "darkseagreen", "hotpink", "indigo", "lightblue", "lavender", "brown", "cadetblue", "crimson", "darkorange", "darkolivegreen", "white", "green", "red", "rgba(133,122,300)", "#f15025", "blue", "yellow", "purple", "aqua", "silver", "black", "maroon", "fuchsia", "lime", "navy", "teal"];
  
const btn = document.getElementById("btn");

const color = document.querySelector(".color");

btn.addEventListener("click", function() {
    
    // our goal is to get a random number between 0 and 3 (4 elements in the array)
    const randomNumber = getRandomNumber();

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    // Math.random() nos da nûmeros del 0 al 0.99999, entonces tenemos que agregarle mâs
    // Math.floor()  redondea hacia abajo, 1.56 se redondea a 1.
    // si quisiéramos que fuera del 0 al 9 multiplicaríamos por 10, pero queremos que sean
    // los elementos del array así que le ponemos array.length
    return Math.floor(Math.random() * colors.length);
}