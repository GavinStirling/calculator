// Declaring all variables
// Declaring calculator object

const calculator = {
    firstNumber: 0,
    result: '0',
    waitingForSecondOperator: false,
    operator: null
}

const workArea = document.querySelector(".workarea");
const operatorButtons = document.querySelector(".operators");
const numberButtons = document.querySelector(".numbers")
const clearButtons = document.querySelector(".clear")

const setDisplay = (() => {
    workArea.innerText = calculator.result;
})

const handleClick = ((event) => {
    if (!event.target.matches('button')){
        return;
    }
    if (event.target.classList.contains("operators__operator")){
        console.log("operator ", event.target.value);
        return;
    }
    if (event.target.classList.contains("numbers__number")){
        console.log("number ", parseFloat(event.target.innerText));
        return;
    }
    if (event.target.classList.contains("clear__clear")){
        console.log("clear ", event.target.innerText);
        return;
    }
    if (event.target.classList.contains("numbers__decimal")){
        console.log("decimal ", event.target.innerText);
        return;
    }
    
})

operatorButtons.addEventListener("click", handleClick);
numberButtons.addEventListener("click", handleClick);
clearButtons.addEventListener("click", handleClick);



setDisplay();

