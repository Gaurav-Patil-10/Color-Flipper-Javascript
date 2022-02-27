const colors = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "A",
    "B",
    "C",
    "E",
    "D",
    "E",
    "F"

];

const color = document.querySelector(".color");

const btn = document.getElementById("button");

const container = document.querySelector(".container");

// Function for genarating the random variable from the array

function RandomNumber() {
    let index = Math.floor(Math.random() * (colors.length - 0));
    return String(colors[index]);
}




btn.addEventListener("click", function () {

    let color_value = "#";

    // Looping for 6 times to form new hex number

    for (let i = 0; i < 6; i++) {
        color_value += RandomNumber();
    }

    color.textContent = color_value;
    container.style.backgroundColor = color_value;

});
