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

const clear = (() => {
    workArea.innerText = "";
})
const clearAll = (() => {
    calculator.result = "0";
    workArea.innerText = "";
})

const inputNumber = ((number) => {
    const numberString = calculator.result;
    if (numberString === '0'){
        calculator.result = number;
    } else {
        calculator.result += number;
    }
    
    
})

const handleDecimal =((decimal) => {
    if (!calculator.result.includes(decimal)) {
        calculator.result += decimal;
    }
})

const handleClick = ((event) => {
    if (!event.target.matches('button')){
        return;
    }
    if (event.target.classList.contains("operators__operator")){
        console.log("operator ", event.target.value);

    }
    if (event.target.classList.contains("numbers__number")){
        const num = event.target.innerText;
        console.log("number ", num);
        inputNumber(num);
        
    }
    if (event.target.classList.contains("clear__clear")){
        const action = event.target.innerText;
        console.log("clear ", action);
        if (action === "Clear"){
            clear();
        } else if (action === "Clear All") {
            clearAll();
        }

    }
    if (event.target.classList.contains("numbers__decimal")){
        const decimal = event.target.innerText;
        console.log("decimal ", decimal);
        handleDecimal(decimal);
    }

    
    setDisplay();
    console.log(calculator.result);
    
})

setDisplay();

operatorButtons.addEventListener("click", handleClick);
numberButtons.addEventListener("click", handleClick);
clearButtons.addEventListener("click", handleClick);





