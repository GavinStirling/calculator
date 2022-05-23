// Declaring variables

// Declaring the working and result holding areas as variables.
const workArea = document.querySelector(".workarea__working-area");
const holdingArea = document.querySelector(".workarea__holding-area");

// Declaring the buttons as variables.
const numberButton = document.querySelectorAll(".numbers__number");
const operatorButton = document.querySelectorAll(".operators__operator")
const equalsButton = document.querySelector(".operators__operator-equals");
const clearButton = document.querySelector(".clear__clear");
const clearAllButton = document.querySelector(".clear__clear-all");

// Decalring functions

// Writing a number to the working area.
const enterNumber = (event) => {
    workArea.innerText += event.target.innerText;
}

const enterOperator = (event) => {
    holdingArea.innerText += ` ${workArea.innerText} ${event.target.innerText} `;
    workArea.innerText = "";
}

// Clearing the working area.
const clearWorkArea = () => {
    workArea.innerText = "";
}

// Clearing both the working and holding areas.
const clearAll = () => {
    workArea.innerText = "";
    holdingArea.innerText = "";
}

// Event listeners

// Writing a number to the working area.
numberButton.forEach(number => {
    number.addEventListener("click", enterNumber); 
});

// 
operatorButton.forEach(operator => {
    operator.addEventListener("click", enterOperator); 
});

clearButton.addEventListener("click", clearWorkArea);
clearAllButton.addEventListener("click", clearAll);